const { request } = require("@playwright/test");

export class ApiUser {
  constructor(request) {
    this.request = request;
  }

  async getUser(url, route) {
    const requestContext = await request.newContext();

    const req = requestContext.get(url + route, {
      headers: {
        accept: "application/json"
      },
    });

    return req;
  }

  async getUserId(url, route, id) {
    const requestContext = await request.newContext();

    const req = requestContext.get(url + route + `${id}`, {
      headers: {
        accept: "application/json"
      },
    });

    return req;
  }

  async postUser(url, route, payload) {
    const requestContext = await request.newContext();

    const req = requestContext.post(url + route, {
      headers: {
        accept: "application/json"
      },

      data: payload
    });

    return req;
  }

  async putUser(url, route, id, payload) {
    const requestContext = await request.newContext();

    const req = requestContext.put(url + route + `${id}`, {
      headers: {
        accept: "application/json"
      },

      data: payload
    });

    return req;
  }

  async delUser(url, route, id) {
    const requestContext = await request.newContext();

    const req = requestContext.delete(url + route + `${id}`, {
      headers: {
        accept: "application/json"
      },
    });

    return req;
  }
}