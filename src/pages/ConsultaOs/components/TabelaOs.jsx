import { useEffect, useState } from "react";
import ordemServicoService from "../../../services/ordemServicoService";
import ModalDetalhesProcedimento from "./ModalDetalhesProcedimento";

const TabelaOs = () => {
    const [ordemServicos, setOrdemServicos] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [procedimentoDetalhe, setProcedimentoDetalhe] = useState({})
    useEffect(() => {
        (async () => {
            const os = await ordemServicoService.getOrdemServico()
            setOrdemServicos(os)
        })()
    }, [])


    const handleOpenModal = (procedimento) => {
        setProcedimentoDetalhe(procedimento)
        setShowModal(true)
    }

    return <>
        <ModalDetalhesProcedimento showModal={showModal} setShowModal={setShowModal} procedimentos={procedimentoDetalhe} />
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-50 uppercase "
                                    >
                                        ID
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-50 uppercase "
                                    >
                                        Nome
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-left text-gray-50 uppercase "
                                    >
                                        Idade
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-gray-50 uppercase "
                                    >
                                        Cpf
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                                    >
                                        Procedimentos
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-xs font-bold text-center text-white uppercase "
                                    >
                                        Valor Total
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {ordemServicos.map(os => {
                                    return <tr key={os.id}>
                                        <td className="px-6 py-4 text-sm font-medium whitespace-nowrap">
                                            {os.id}
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            {os.nome}
                                        </td>
                                        <td className="px-6 py-4 text-sm whitespace-nowrap">
                                            {os.idade}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                                            {os.cpf}
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
                                            <button
                                                className="bg-purple-800 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={handleOpenModal.bind(this, os.procedimentos)}
                                            >
                                                Visualizar
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">

                                            <span className=" disabled bg-green-900 font-bold rounded-md p-2">{os.valorTotalOs.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                        </td>
                                    </tr>
                                })}


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TabelaOs
