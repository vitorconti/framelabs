import TabelaOs from "./components/TabelaOs"

const ConsultaOs = () => {
    return (
        <div className="m-4 flex flex-col space-y-3">
            <h1 className="text-2xl font-semibold uppercase">Consulta de Ordem de Serviço</h1>
            <TabelaOs />
        </div>
    )
}

export default ConsultaOs
