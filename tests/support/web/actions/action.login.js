import { WebComponents } from './action.components';

const { expect } = require('@playwright/test');

export class WebLogin {

  constructor(page) {
    this.page = page;

    //Inputs
    this.inputUserNameSso = page.locator('.username-input-login-sso')
    this.inputPasswordService = page.locator('.password-input-login-service')
    this.inputEmailSso = page.locator('#email_signin')
    this.inputPasswordSso = page.locator('#password_signin')

    //Btns
    this.btnSubmitSso = page.locator('.login-button-sso')
    this.btnSubmit = page.locator('#btnSubmit')
    this.btnNext = page.locator('#btn-next')
    this.btnSignin = page.locator('#btn-signin')
    this.btnYes = page.locator('button[data-value="yes"]')
    this.iconChat = page.locator('#sidebar-menu-chat')

    this.page = page;
    this.sectionPaneHome = page.locator('#main-container')
    this.imgAvatar = page.locator('.img-avatar')
  }

  async visitUrl(url) {
    await this.page.goto(url)
  }

  async loginAgent(user, email, password) {
    await this.inputUserNameSso.fill(user)
    await this.btnSubmitSso.click()
    await this.inputEmailSso.fill(email)
    await this.btnNext.click()
    await this.inputPasswordSso.fill(password)
    await this.btnSignin.click()
  }

  async popUpSessionClose() {
    const components = new WebComponents()
    await components.elementExistClose(this.btnYes)
  }

  async isLoggedIn() {
    await this.page.waitForTimeout(3000)
    await expect(this.sectionPaneHome).toBeVisible()
  }

  async logoutOf() {
    await this.imgAvatar.click()
    await this.page.getByText("Sair").click()
  }

}