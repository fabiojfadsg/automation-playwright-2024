const { test: base, expect, request } = require('@playwright/test')

var chai = require('chai');
chai.use(require('chai-json-schema'));

const { WebComponents } = require('./web/actions/action.components')
const { WebLogin } = require('./web/actions/action.login')
const { ApiUser } = require('./api/requests/api.user.request')

const test = base.extend({
    page: async ({ page }, use) => {
        const context = page
        context['login'] = new WebLogin(page)
        context['components'] = new WebComponents(page)

        await use(context)

    },

    request: async({ request }, use) => {
        const context = request
        context['user'] = new ApiUser(request)

        await use(context)
    }
})

export { test, expect, request, chai}