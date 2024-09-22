const { test } = require("../../support")
import ENV from "../../../utils/env"

test.describe('Login, @login', async () => {

  test('Login user admin SSO, @login_admin_sso',async ({ page }) => {
    await page.login.visitUrl(ENV.BASE_URL)
    await page.login.loginAgent(process.env.user_admin, process.env.email_admin, process.env.password_admin)
    await page.login.isLoggedIn()
  })

})