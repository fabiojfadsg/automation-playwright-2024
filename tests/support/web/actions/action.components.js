import { expect } from "@playwright/test"

export class WebComponents {
    constructor(page) {
        this.page = page   
    }

    async toastHaveText(msg) {
        await expect(this.toast).toHaveText(msg)
        await expect(locator).not.toBeVisible({timeout: 5000})
    }

    async elementExistClose(lacator) {
        if(await (lacator).isVisible()){
            await (lacator).click()
        }
    }
}