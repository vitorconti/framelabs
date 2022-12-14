import { useEffect, useState } from "react"
import ordemServicoService from "../../../services/ordemServicoService"
import procedientoService from "../../../services/procedientoService"
import Loading from "../../../shared/components/loading/Loading"
import Input from "./Input"
import ProcedureCard from "./ProcedureCard"

const msgStyleConfig = {
    'error': 'bg-red-700 font-semibold p-2 rounded-md',
    'success': 'bg-green-700 font-semibold p-2 rounded-md'
}


export default function FormOs() {
    const [loading, setLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState({
        visivel: false,
        status: 'error',
        mensagem: ''
    })
    const [procedimentos, setProcedimentos] = useState([])
    const [procedimentosSelecionados, setProcedimentosSelecionados] = useState(new Set())
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [cpf, setCpf] = useState("")
    const limparEstados = () => {
        setProcedimentosSelecionados(estadoAnterior => {
            estadoAnterior.clear()
            return estadoAnterior
        })
        setNome("")
        setIdade("")
        setCpf("")
    }

    useEffect(() => {
        (async () => {
            const response = await procedientoService.getProcedimentos()
            setProcedimentos(response)
        })()


    }, [])


    const onSelectCard = (procedimento) => {

        if (procedimentosSelecionados.has(procedimento)) {
            setProcedimentosSelecionados(estadoAnterior => {
                estadoAnterior.delete(procedimento)
                return estadoAnterior
            })
            return
        }
        setProcedimentosSelecionados(estadoAnterior => estadoAnterior.add(procedimento))


    }

    const calcularValorTotalOs = (arrayProcedimentos) => {
        const valorTotalOs = arrayProcedimentos.map(({ valor }) => valor).reduce(
            (valorAnterior, valorAtual) => valorAnterior + valorAtual, 0)
        return valorTotalOs
    }

    const onSubmitOs = async (event) => {
        try {
            event.preventDefault()
            setLoading(true)
            const arrayProcedimentos = Array.from(procedimentosSelecionados)
            const valorTotalOs = calcularValorTotalOs(arrayProcedimentos)
            const payload = {
                nome, idade, cpf, procedimentos: arrayProcedimentos, valorTotalOs
            }

            await ordemServicoService.postOrdemServico(payload)
            setLoading(false)
            limparEstados()
            setStatusMessage({
                visivel: true,
                status: 'success',
                mensagem: 'Ordem de servi??o cadastrada com sucesso.'
            })
        } catch (error) {
            setStatusMessage({
                visivel: true,
                status: 'error',
                mensagem: 'Problema ao cadastrar Ordem de servico, por favor tente novamente'
            })
            setLoading(false)
        }


    }



    return (
        <div>

            <form >
                <div className="flex space-x-4">
                    <Input type={'text'} name='name' id='name' key={'name'} setState={setNome} state={nome} >Nome</Input>
                    <Input type={'number'} name='idade' id='idade' key={'idade'} setState={setIdade} state={idade} >Idade</Input>
                </div>
                <div className="flex space-x-4 items-center">
                    <Input type={'text'} name='cpf' id='cpf' key={'cpf'} setState={setCpf} state={cpf}>CPF</Input>
                    {statusMessage.visivel && <div className={msgStyleConfig[statusMessage.status]}>{statusMessage.mensagem}</div>}
                </div>

                <h3 className="text-xl text-gray-400">Procedimentos</h3>
                <div className="grid grid-cols-4 mb-2 gap-4 border-b-2 rounded-md border-violet-500 p-2">
                    {procedimentos.map((procedimento) => {
                        return <div onClick={onSelectCard.bind(this, procedimento)} key={procedimento.id}>
                            <ProcedureCard limparSelecao={limparEstados} nome={procedimento.nome} valor={procedimento.valor} />
                        </div>
                    })}
                </div>
                {loading && <Loading />}
                {!loading && <button disabled={loading} type="submit" onClick={onSubmitOs} className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Submit</button>}
            </form>
        </div>
    )
}
