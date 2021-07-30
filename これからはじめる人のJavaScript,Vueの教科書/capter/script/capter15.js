
const tax = new Tax;
tax.setRate = 10;

const TAX = tax.salesTax;

// 標準値を設定
const getTax = (price, tax=10) => {
    return Math.round(price * (tax / 100));
}

//console.log(getTax(1980));

class Tax {
    value = 100;
    rate;
    constructor () {
        const salesTax = (this.rate / this.value)
    }
    static setRate(val){
        try {
            this.rate = val;
        } catch (error) {
            console.log(error.message);
        }
    }
}





