import { faker } from "@faker-js/faker"

let nomeCreate = `${faker.person.firstName()} ${faker.person.lastName()}`
let emailCreate = `automation-postUser${faker.string.uuid()}@moviautomation.com`
let nomeUpdate = `${faker.person.firstName()} ${faker.person.lastName()}`
let emailUpdate = `automation-putUser${faker.string.uuid()}@moviautomation.com`

export const createUser = {
  "nome": nomeCreate,
  "email": emailCreate,
  "password": "1234",
  "administrador": "true"
}

export const updateUser = {
  "nome": nomeUpdate,
  "email": emailUpdate,
  "password": "1234",
  "administrador": "true"
}