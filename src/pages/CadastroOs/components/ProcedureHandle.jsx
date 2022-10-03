import ProcedureCard from "./ProcedureCard"


export default function ProcedureHandle({ procedimentos, setProcedimentosSelecionados }) {
    return (
        <div className="grid grid-cols-4 mb-2 gap-4 ">
            {procedimentos.map((procedimento) => {
                return <div key={procedimento.id}>
                    <ProcedureCard nome={procedimento.nome} valor={procedimento.valor} />

                </div>
            })}
        </div>
    )
}
