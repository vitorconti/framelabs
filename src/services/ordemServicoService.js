class OrdemServicoService {
    async postOrdemServico(payload) {
        const response = await fetch('http://localhost:3000/ordemServico', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        return response
    }
}
export default new OrdemServicoService()