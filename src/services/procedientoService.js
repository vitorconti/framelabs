class ProcedimentoService {
    async getProcedimentos() {
        const response = await (await fetch("http://localhost:3000/procedimentos")).json()
        return response
    }
}
export default new ProcedimentoService()