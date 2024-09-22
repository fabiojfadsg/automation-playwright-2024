const { test, expect, chai} = require("../../support/index")
import ENV from "../../../utils/env"
const payloadUser = require("../../support/api/payloads/api.user.payload")
const payloadResponseUser = require('../../support/api/responses/api.user.response')
import scheme_chai from '../../support/api/schemes/api.user.scheme'


test.describe('User', { tag: '@api_user' }, async () => {

  test('POST - /user', {
    tag: '@post_user',
  }, async ({ request }) => {

    //Envio de toda request
    const resp = await request.user.postUser(ENV.BASE_URL_API, "/usuarios", payloadUser.createUser)

    resp.waitForResponse
    //Resposta transformada em json
    const respBody = await resp.json()

    //Variavel id recuperada
    let userId = respBody._id
  
    //Validado status code
    expect(resp.status()).toBe(201)

    //Validando schema com chai
    chai.assert.jsonSchema(respBody, scheme_chai);
    chai.expect(respBody).to.be.jsonSchema(scheme_chai);

    //Validando body no test
    expect(respBody).toEqual({
      "message": "Cadastro realizado com sucesso",
      "_id": userId
    })
    //Validando propriedades e seus valores
    expect(respBody).toHaveProperty("message", "Cadastro realizado com sucesso")
    expect(respBody).toHaveProperty("_id", userId)

    //Validando resposta vindo de outro arquivo com paramentros da request
    expect(respBody).toEqual(await payloadResponseUser.payloadResponseUser(userId))

    //Envio de toda request Del - /User{id} para captura do id    
    const reqDelUser = await request.user.delUser(ENV.BASE_URL_API, "/usuarios/", userId)
    expect(reqDelUser.status()).toBe(200)
    let respDelUser = await reqDelUser.json()
    expect(respDelUser).toHaveProperty("message", "Registro excluído com sucesso")



    
   })

  test('E2E - /user @e2e', async ({ request }) => {

    //Envio de toda request GET - /User
    const reqGetUser = await request.user.getUser(ENV.BASE_URL_API, "/usuarios/")
    expect(reqGetUser.status()).toBe(200)
    //Envio de toda request Post - /User para captura do id
    const reqPostUser = await request.user.postUser(ENV.BASE_URL_API, "/usuarios", payloadUser.createUser)
    const respUserPost = await reqPostUser.json()
    let userId = respUserPost._id
    let reqPostUserEmail = payloadUser.createUser.email

    //Envio de toda request GET - /User{id} para captura do id
    const reqGetUserId = await request.user.getUserId(ENV.BASE_URL_API, "/usuarios/", userId)
    expect(reqGetUserId.status()).toBe(200)
    let respGetUserId = await reqGetUserId.json()
    let respGetUserEmail = respGetUserId.email
    expect(reqPostUserEmail).toEqual(respGetUserEmail)

    ////Envio de toda request PUT - /User{id} para captura do id
    const reqPutUser = await request.user.putUser(ENV.BASE_URL_API, "/usuarios/", userId, payloadUser.updateUser)
    expect(reqPutUser.status()).toBe(200)
    const respUserPut = await reqPutUser.json()
    let reqPutUserEmail = payloadUser.updateUser.email
    expect(reqPostUserEmail).not.toEqual(reqPutUserEmail)
    expect(respUserPut).toHaveProperty("message", "Registro alterado com sucesso")

    //Envio de toda request GET - /User{id} para captura do id
    const reqDelUser = await request.user.delUser(ENV.BASE_URL_API, "/usuarios/", userId)
    expect(reqDelUser.status()).toBe(200)
    let respDelUser = await reqDelUser.json()
    expect(respDelUser).toHaveProperty("message", "Registro excluído com sucesso")
  })
})