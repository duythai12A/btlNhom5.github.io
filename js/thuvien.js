document.getElementById("showCart").style.display="none";


var Cart = new Array();

var checkoutSummary = 0;
function themvaogiohang(x){
    var boxsp = x.parentElement.children;
    
    var img = boxsp[0].src;
    var name = boxsp[1].innerHTML;
    var price = boxsp[2].innerHTML;
    var size = boxsp[4].value;
    var qty = parseInt(boxsp[4].value);

  
    var product = new Array(img,name,price,size,qty);

    var check=0;
    for (let i = 0; i< Cart.length; i++) {
      if(Cart[i][1]== name){
          check =1;
          qty+=parseInt( Cart[i][4]);
          Cart[i][4]=qty;
          break;
      }
       
    }

    if(check==0){

    Cart.push(product);
    }

    // Cart.push(product);

    sessionStorage.setItem("Cart", JSON.stringify(Cart));
    

    showCountpro();

    // sessionStorage.setItem("Cart", JSON.stringify(Cart));
}

function showCountpro(){
    document.getElementById("countsp").innerHTML=Cart.length;
}

function showTbody(){
    var cartInfo ="";
    for (let i=0;i< Cart.length;i++){
        var total = Cart[i][2] * Cart[i][4];
        var prices = parseInt(Cart[i][2]);
        prices = prices.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        total = total.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        cartInfo+='<tr>'+
        '<td data-th="Sản phẩm" class="col item">'+
         '   <div class="cart-item-info">'+
                '<div class="cart-item-photo">'+
                    '<a href="/html/chitiensanpham.html"><img src="'+Cart[i][0]+'" alt=""></a>'+
                '</div>'+
                '<div class="cart-item-details">'+
                    ' <div class="cart-item-name">'+
                        '<a href="/html/chitiensanpham.html">'+Cart[i][1]+'</a>'+
                    '</div>'+
                    '<div class="cart-item-potions">'+
                        '<span class="swatch-option text">Kích cỡ: '+Cart[i][4]+''+
                        '</span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
       ' </td>'+
        '<td data-th="Giá tiền" class="col price">'+
            '<span class="price-pro">'+prices+'</span>'+
       ' </td>'+
        '<td data-th="Số lượng" class="col qty">'+
           ' <div class="cart-item-qty">'+
                   ' <input  type="number"  readonly="readonly"  class="input-cart-item-qty" value="'+Cart[i][4]+'" >'+
                    '  </div>'+
                    ' </td>'+
                    ' <td data-th="Tổng tiền" class="col subtotal">'+
                    ' <span class="total-price">'+total+'</span>'+
                    ' <button onclick="delProduct(this)" class="btn-del">'+
                    'X'+
                    '</button >'+
                    '   </td>'+
                    ' </tr>';
                }
         
    document.getElementById("tbody").innerHTML=cartInfo;
 
}

function delProduct(x){
    // xoa tr
    var tr = x.parentElement.parentElement;
    var name = tr.children[0].children[0].children[1].children[0].innerText;
    tr.remove();
    //xoa mang
    for (let i = 0; i < Cart.length; i++) {
        if(Cart[i][1]==name){
            Cart.splice(i,1);
        }
        
    }
    showTbody();
    showCountpro();
    Order();
    sessionStorage.setItem("Cart", JSON.stringify(Cart));

    
}

function showCarts(){
    var iconCart = document.getElementsByClassName("fa-solid fa-bag-shopping fa-lg");
    if(Cart.length==0){
        var check = document.getElementById("cartEmpty");
        if(check.style.display=="block"){
                check.style.display="none";
                iconCart[0].style.color =  "rgba(0, 0, 0, 0.801)";
     }else{
        check.style.display="block";
        iconCart[0].style.color= "#64b1bc";
     }
    }else{
        var check = document.getElementById("showCart");
        if(check.style.display=="block"){
               check.style.display="none";
               iconCart[0].style.color =  "rgba(0, 0, 0, 0.801)";
        }else{
           check.style.display="block";
           showTbody();
           iconCart[0].style.color= "#64b1bc";
           
        }
    }
    
}


function showCartCheckout(){
    var gh = sessionStorage.getItem("Cart");
    var Cart = JSON.parse(gh);
    checkoutSummary = 0;
    var cartInfo ="";
    for (let i=0;i< Cart.length;i++){
        var total = Cart[i][2] * Cart[i][4];
        checkoutSummary +=parseInt(total);
        var prices = parseInt(Cart[i][2]);
        
        prices = prices.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        total = total.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        cartInfo+='<tr>'+
        '<td data-th="Sản phẩm" class="col item">'+
         '   <div class="cart-item-info">'+
            '      <div class="cart-item-photo">'+
             '       <a href="/html/chitiensanpham.html"><img src="'+Cart[i][0]+'" alt=""></a>'+
                '  </div>'+
                '<div class="cart-item-details">'+
                 '   <div class="cart-item-name">'+
                  '      <a href="/html/chitiensanpham.html">'+Cart[i][1]+'</a>'+
                   ' </div>'+
                    '<div class="cart-item-potions">'+
                     '   <span class="swatch-option text">Kích cỡ: '+Cart[i][4]+''+
                      '  </span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
       ' </td>'+
        '<td data-th="Giá tiền" class="col price">'+
            '<span class="price-pro">'+prices+'</span>'+
       ' </td>'+
        '<td data-th="Số lượng" class="col qty">'+
           ' <div class="cart-item-qty">'+
               ' <button onclick="clickQty()" type="button" class="btn-number btn-number-minus">'+
                   ' <span>-</span>'+
                   '</button >'+
                   ' <input  type="number"  readonly="readonly"  class="input-cart-item-qty" value="'+Cart[i][4]+'" >'+
                   ' <button  onclick="clickQty()" class="btn-number btn-number-plus">'+
                   ' <span>+</span>'+
                    ' </button >'+
                    '  </div>'+
                    ' </td>'+
                    ' <td data-th="Tổng tiền" class="col subtotal">'+
                    ' <span class="total-price">'+total+'</span>'+
                    ' <button onclick="delProduct(this)" class="btn-del">'+
                    'X'+
                    '</button >'+
                    '   </td>'+
                    ' </tr>';
    }
         
    document.getElementById("tbody").innerHTML=cartInfo;
       
    // sessionStorage.setItem("Cart", JSON.stringify(Cart));
}

function clickQty(){
    var btnMinus = document.getElementsByClassName("btn-number-minus");
    var btnPlus = document.getElementsByClassName("btn-number-plus");
    var inputQty = document.getElementsByClassName("input-cart-item-qty");
    var temp=0;
    var price = document.getElementsByClassName("price-pro").value;
    var price_tong = document.getElementsByClassName("total-price");
    var gh = sessionStorage.getItem("Cart");
    var Cart = JSON.parse(gh);
  
    for (let i=0;i<Cart.length;i++){
        btnMinus[i].onclick = function() {
            if (parseInt( Cart[i][4])>1){
                console.log(parseInt( Cart[i][4]));
             temp =parseInt( Cart[i][4])-1;
                Cart[i][4]= temp;
                inputQty[i].value= Cart[i][4];
            var temp1 = parseInt(Cart[i][2])*temp;

                temp1 =temp1.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                })
                price_tong[i].innerHTML =temp1;
                checkoutSummary -=parseInt(Cart[i][2]);
            }
            Order();
            
        }

        btnPlus[i].onclick = function() {
            if (parseInt( Cart[i][4])<10){
                temp =parseInt( Cart[i][4])+1;
                Cart[i][4]= temp;
                inputQty[i].value= Cart[i][4];

                var temp1 = parseInt(Cart[i][2])*temp;

                temp1 =temp1.toLocaleString('vi-VN', {
                    style: 'currency',
                    currency: 'VND'
                })
                price_tong[i].innerHTML =temp1;
                checkoutSummary +=parseInt(Cart[i][2]);
            }
            Order();
         }
        
    }
      
}

function Order(){
    var orderInfo ="";
    var ship=40000;
    var orderSummary=checkoutSummary;

    
    if(checkoutSummary>400000){
        ship = 0;
        orderSummary+=ship;
    }else{
        orderSummary+=ship;
    }

    var checkoutSummarys=checkoutSummary;
    var ships=ship;
    var orderSummarys=orderSummary;

    checkoutSummarys = checkoutSummarys.toLocaleString('vi-VN',{
        style: 'currency',
        currency: 'VND'
    })

    ships = ships.toLocaleString('ni-VN',{
        style:'currency',
        currency:'VND'
    })

    orderSummarys = orderSummarys.toLocaleString('ni-VN',{
        style:'currency',
        currency:'VND'
    })
    orderInfo +='<tr>'+
                '    <th>Giá gốc</th>'+
                '    <td id="totals-ori">'+checkoutSummarys+'</td>'+
                '</tr>'+
                '<tr>'+
                '    <th>Phí vận chuyển</th>'+
                '    <td id="price-ship">'+ships+'</td>'+
                '</tr>'+
                '<tr class="grand-totals">'+
                '    <th>Tổng tiền thanh toán</th>'+
                '    <td id="totals" >'+orderSummarys+'</td>'+
                '</tr>';
               
    document.getElementById("checkout-summary").innerHTML=orderInfo;
 
}

function showDetailCheckout(){
    var gh = sessionStorage.getItem("Cart");
    var Cart = JSON.parse(gh);
    checkoutSummary = 0;
    var cartInfo ="";
    for (let i=0;i< Cart.length;i++){
        var total = Cart[i][2] * Cart[i][4];
        checkoutSummary +=parseInt(total);
        var prices = parseInt(Cart[i][2]);
        
        prices = prices.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        total = total.toLocaleString('vi-VN', {
            style: 'currency',
            currency: 'VND'
        })
        cartInfo+='<tr>'+
        '<td data-th="Sản phẩm" class="col item">'+
         '   <div class="cart-item-info">'+
            '      <div class="cart-item-photo">'+
             '       <a href="/html/chitiensanpham.html"><img src="'+Cart[i][0]+'" alt=""></a>'+
                '  </div>'+
                '<div class="cart-item-details">'+
                 '   <div class="cart-item-name">'+
                  '      <a href="/html/chitiensanpham.html">'+Cart[i][1]+'</a>'+
                   ' </div>'+
                    '<div class="cart-item-potions">'+
                     '   <span class="swatch-option text">Kích cỡ: '+Cart[i][4]+''+
                      '  </span>'+
                    '</div>'+
                '</div>'+
            '</div>'+
       ' </td>'+
        '<td data-th="Giá tiền" class="col price">'+
            '<span class="price-pro">'+prices+'</span>'+
       ' </td>'+
        '<td data-th="Số lượng" class="col qty">'+
           ' <div class="cart-item-qty">'+
            //    ' <button href="" type="button" class="btn-number btn-number-minus">'+
            //        ' <span>-</span>'+
            //        '</button >'+
                //    ' <input  type="number"  readonly="readonly"  class="input-cart-item-qty" value="'+Cart[i][4]+'" >'+
                   '<span>x'+Cart[i][4]+'</span>'+
                //    ' <button  href="" class="btn-number btn-number-plus">'+
                //    ' <span>+</span>'+
                //     ' </button >'+
                    '  </div>'+
                    ' </td>'+
                    ' <td data-th="Tổng tiền" class="col subtotal">'+
                    ' <span class="total-price">'+total+'</span>'+
                    // ' <button onclick="delProduct(this)" class="btn-del">'+
                    // 'X'+
                    // '</button >'+
                    '   </td>'+
                    ' </tr>';
    }
         
    document.getElementById("tbody").innerHTML=cartInfo;
}
