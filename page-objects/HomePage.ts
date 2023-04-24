import { expect, Locator, Page } from "@playwright/test"

export class HomePage {
    readonly page: Page
    readonly signInLink: Locator
    readonly searchBox: Locator

    constructor(page: Page){
        this.page = page
        this.signInLink = page.locator('li.authorization-link a')
    }

    async visit(){
        await this.page.goto('https://magento.softwaretestingboard.com')
    }

    async clickOnSignIn() {
        await this.signInLink.first().click()
    }
}

