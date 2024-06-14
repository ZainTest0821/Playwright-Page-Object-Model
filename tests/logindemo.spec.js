import { test, expect } from '@playwright/test';
//I have uses double dot ../ in location in given import because the location of folder is outside the test . If it is in test folder then we can use single dot in location. and make sure use tha class name in import not foler or file name

import {LoginPage} from '../PageObjects/Loginpageobjects'

test('test demo on internetherokuapp', async ({ page }) => {
  // create an instance of the class
// we have used 'page' in the LoginPage function becaue in page objects class , all the function is declar under the page.
  const Login= new LoginPage(page);


  await page.goto('https://the-internet.herokuapp.com/login');

  //Now call the username from page object
 await Login.login('tomsmith','SuperSecretPassword!')    // We call login and then paste username and password which we declare in login page object class. 

    

  // await page.getByLabel('Username').click();
  // await page.getByLabel('Username').fill('tomsmith');
  // await page.getByLabel('Username').press('Tab');
  // await page.getByLabel('Password').fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();
});