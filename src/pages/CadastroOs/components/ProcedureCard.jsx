import { useState } from "react"

const classUnSelected = "cursor-pointer rounded-lg flex items-center shadow-purple-400 p-4 w-52 bg-purple-700"
const classSelected = "cursor-pointer rounded-lg flex items-center shadow-blue-400 p-4 w-52 bg-blue-500"
export default function ProcedureCard({ nome, valor, setProcedimentosSelecionados }) {
    const [selected, setSelected] = useState(false)

    const onSelectedProcedureCard = (e) => {
        setSelected(!selected)
        const newProcedure = { nome: e.target.children[0].innerHTML, valor: e.target.children[1].innerHTML, }
        setProcedimentosSelecionados((previous) => {
            if (previous.length > 0) {
                return [...previous, newProcedure]
            }
        })
    }
    return (
        <div onClick={onSelectedProcedureCard} className={selected ? classSelected : classUnSelected}>
            <span className="font-semibold flex items-center  w-48 uppercase rounded-md bg-orange-500 p-2">{nome}</span>
            <span className="  bg-green-900 font-bold rounded-md p-2">{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    )
}
