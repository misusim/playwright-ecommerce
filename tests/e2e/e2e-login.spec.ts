import {test, expect} from '@playwright/test'
import { HomePage } from '../../page-objects/HomePage'

test.describe('Login / Logout', () => {
    let homePage: HomePage


    //before hook
    test.beforeEach(async ({page}) => {
        homePage = new HomePage(page)

        await homePage.visit()
    })

    test('Negative scenario for login', async ({page}) => {
        await homePage.clickOnSignIn()
    })


})

