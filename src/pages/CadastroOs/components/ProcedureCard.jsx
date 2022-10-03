

export default function ProcedureCard({ nome, valor }) {
    return (
        <div className="rounded-lg flex items-center shadow-purple-400 p-4 w-52 bg-purple-700">
            <div className="font-semibold uppercase rounded-md bg-cyan-200 p-2">{nome}</div>
            <div className="  bg-green-800 rounded-md p-2">{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</div>
        </div>
    )
}
