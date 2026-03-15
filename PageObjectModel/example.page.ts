class Example {
    usernameTF:string
    passwordTF:string
    SubmitBtn:any
    constructor(page: any){
        this.usernameTF = page.locator("#username")
        this.passwordTF = page.locator("#password")
        this.SubmitBtn = page.locator("#submit")
    }

}

export default Example