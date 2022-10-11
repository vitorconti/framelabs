import { useEffect, useState } from "react"

const classUnSelected = "cursor-pointer rounded-lg flex items-center shadow-purple-400 p-4 w-52 bg-purple-700"
const classSelected = "cursor-pointer rounded-lg flex items-center shadow-blue-400 p-4 w-52 bg-blue-500"
export default function ProcedureCard({ nome, valor, }) {
    const [selected, setSelected] = useState(false)


    return (
        <div onClick={setSelected.bind(this, !selected)} className={selected ? classSelected : classUnSelected}>
            <span className="disabled font-semibold flex items-center  w-48 uppercase rounded-md bg-orange-500 p-2">{nome}</span>
            <span className=" disabled bg-green-900 font-bold rounded-md p-2">{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    )
}
