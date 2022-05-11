var totalOri = document.getElementById("totals-ori");
var totalOri = document.getElementById("totals");
var totalOri = document.getElementById("price-ship");
var price = document.getElementsByClassName("price-pro");
var totalPrice = document.getElementsByClassName("total-price");
var inputQty = document.getElementsByClassName("input-cart-item-qty");
// for(let i=0;i<totalPrice.length;i++){
//     console.log(price[i]);
   
// }


var table = document.getElementById("table-checkout");
var rowCount = table.rows.length;    
for (var i = 1; i < rowCount -  1; i++) { 
        console.log(table.rows[i]["Giá tiền"].Tostring());
}