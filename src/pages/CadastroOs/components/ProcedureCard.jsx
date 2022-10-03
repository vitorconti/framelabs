

export default function ProcedureCard({ nome, valor }) {
    return (
        <div className="cursor-pointer rounded-lg flex items-center shadow-purple-400 p-4 w-52 bg-purple-700">
            <div className="font-semibold flex items-center  w-48 uppercase rounded-md bg-orange-500 p-2">{nome}</div>
            <div className="  bg-green-900 font-bold rounded-md p-2">{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
        </div>
    )
}
