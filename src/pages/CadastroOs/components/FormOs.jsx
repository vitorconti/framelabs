import { useEffect, useState } from "react"
import procedientoService from "../../../services/procedientoService"
import Input from "./Input"
import ProcedureHandle from "./ProcedureHandle"

export default function FormOs() {
    const [procedimentos, setProcedimentos] = useState([])
    const [procedimentosSelecionados, setProcedimentosSelecionados] = useState([])
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [cpf, setCpf] = useState("")
    useEffect(() => {
        (async () => {
            const response = await procedientoService.getProcedimentos()
            setProcedimentos(response)
        })()


    }, [])


    return (
        <div>

            <form>
                <div className="flex space-x-4">
                    <Input type={'text'} name='name' id='name' key={'name'} setState={setNome} state={nome} >Nome</Input>
                    <Input type={'number'} name='idade' id='idade' key={'idade'} setState={setIdade} state={idade} >Idade</Input>
                </div>
                <Input type={'text'} name='cpf' id='cpf' key={'cpf'} setState={setCpf} state={cpf}>CPF</Input>
                <ProcedureHandle procedimentos={procedimentos} setProcedimentosSelecionados={setProcedimentosSelecionados} />
                <button type="submit" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Submit</button>
            </form>

        </div>
    )
}
