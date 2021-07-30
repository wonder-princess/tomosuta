
const tax = new Tax;
tax.setRaito = 10;

const TAX = tax.salesTax;

// 標準値を設定
const getTxax = (price, tax=10) => {
    return Math.round(price * (tax / 100));
}

//console.log(getTxax(1980));

class Tax {
    value = 100;
    raito;
    constructor () {
        const salesTax = (this.raito / this.value)
    }
    static setRaito(val){
        try {
            this.raito = val;
        } catch (error) {
            console.log(error.message);
        }
    }
}





