var btnMinus = document.getElementsByClassName("btn-number-minus");
var btnPlus = document.getElementsByClassName("btn-number-plus");
var inputQty = document.getElementsByClassName("input-cart-item-qty");
var a=0;
var price = document.getElementsByClassName("price-pro").value;
var price_tong = document.getElementsByClassName("total-price");
for (let i=0;i<btnMinus.length;i++){
    btnMinus[i].onclick = function() {
        if (parseInt( inputQty[i].value)!=0){
            var temp =parseInt( inputQty[i].value)-1;
       inputQty[i].value= temp;
       price_tong[i].innerHTML = parseInt(price[i].innerHTML)*temp;
        }
        
    }
    btnPlus[i].onclick = function() {
        if (parseInt( inputQty[i].value)<10){
            var temp =parseInt( inputQty[i].value)+1;
       inputQty[i].value= temp;
       price_tong[i].innerHTML = parseInt(price[i].innerHTML)*temp;
        }
        
    }

}
