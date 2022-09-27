import ProcedureCard from "./ProcedureCard"


export default function ProcedureHandle({ procedimentos, setProcedimentosSelecionados }) {
    return (
        <div className="relative z-0 mb-6 w-1/4 group">
            {procedimentos.map((procedimento) => {
                return <div key={procedimento.id}>
                    <ProcedureCard nome={procedimento.nome} valor={procedimento.valor} />

                </div>
            })}
        </div>
    )
}
