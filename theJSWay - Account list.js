class Account {
    constructor(name, balance){
        this.name = name
        this.balance = balance 
    }
    credit(){
        this.balance += 1000
    }
    describe(){
        console.log( `owner: ${this.name}, balance: ${this.balance}` )
    }
}
// let sean = new Account (sean,0)
// let Brad = new Account (Brad,0)
// let Georges = new Account (Georges,0)