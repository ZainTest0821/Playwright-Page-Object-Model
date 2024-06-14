   exports.LoginPage=  class LoginPage{

//Here we will add locators of Login page as well as action that is needed to perfome on Login Page

constructor (page){


    this.page=page


    //locators of LoginPage
    this.username_textbox= page.getByLabel('Username')
    this.  password_textbox = page.getByLabel('Password')
    this. submit_button = page.getByRole('button', { name: ' Login' })


}

// Now we can do signle method/function to perform actions Or we can also create a sinle function in which we can intialize all the actions in it

// using Signle function like this 



// enter_username_text(){


// }

// enter_password_text(){


// }

// clickonlogin(){


// }


// Use single function for login and add all actions in it. 2nd thng I want to get the string value from user name or password that's why I use them in login function

async login (username, password){

    await this.username_textbox.fill(username)
    await this.password_textbox.fill(password)
    await this.submit_button.click()

}



}