import crypto from 'crypto'

export class Product {
    constructor(tittle, description, stock, price, code){
        this.tittle = tittle
        this.description = description
        this.stock = stock
        this.code = code
        this.thumbnail = []
        this.price = price
        this.id = crypto.randomBytes(6).toString('hex')
    }
}