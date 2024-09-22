export async function payloadResponseUser(userId) {
    const payload = {
        "message": "Cadastro realizado com sucesso",
        "_id": `${userId}`
    }
    return payload
}