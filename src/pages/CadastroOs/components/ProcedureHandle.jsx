import ProcedureCard from "./ProcedureCard"


export default function ProcedureHandle({ procedimentos, setProcedimentosSelecionados }) {
    return (
        <div className="grid grid-cols-4 mb-2 gap-4 border-b-2 rounded-md border-violet-500 p-2">

            {procedimentos.map((procedimento) => {
                return <div key={procedimento.id}>
                    <ProcedureCard nome={procedimento.nome} setProcedimentosSelecionados={setProcedimentosSelecionados} valor={procedimento.valor} />

                </div>
            })}
        </div>
    )
}
