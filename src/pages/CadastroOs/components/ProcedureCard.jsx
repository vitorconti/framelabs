

export default function ProcedureCard({ nome, valor }) {
    return (
        <div className="flex space-x-2 border-2 border-gray-400">
            <span className="font-semibold uppercase block">{nome}</span>
            <span className="block text-green-600 ">{valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
        </div>
    )
}
