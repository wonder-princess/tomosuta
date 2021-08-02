// 標準値を設定
const getTax = (price, tax=10) => {
    return Math.round(price * (tax / 100));
}
console.log(getTax(1980));

/***** 税の値をカプセル化 *****/

class Tax {
    value = 100;
    salesTax;
    set salesTaxRate(val){
        try {
            this.salesTax = (val / this.value);
        } catch (error) {
            console.log(error.message);
        }
    }
}

/******************************/


/********** 税率を設定 **********/

const tax = new Tax;
tax.salesTaxRate = 10;

/******************************/


/***** 設定した値を取得・計算 *****/

const SALES_TAX = tax.salesTax;
console.log(SALES_TAX);

function taxCalc(price) {
    return Math.round(price * SALES_TAX);
}

console.log(taxCalc(8888));

/******************************/




