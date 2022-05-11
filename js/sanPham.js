var arrProduct = [];



 var clickAddcart = document.getElementById("add-cart");
 clickAddcart.onclick =  function addProduct(){
    var name = document.getElementById("name-product").innerHTML;
    var price= document.getElementById("price-product").innerHTML;
    var size= document.getElementById("size").value;
    var qty= document.getElementById("input-qty").value;

    price= parseInt(price);
    qty= parseInt(qty);
    

    var total = price*qty;
    

    
    price = price.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND'
    })

    alert(price);

    var objProduct = {
        name: name,
        price: price,
        size: size,
        qty: qty

    }

    
    arrProduct.push(objProduct);
    // console.log("DS: ", arrProduct);

    sessionStorage.setItem("arrProduct",JSON.stringify(arrProduct));
    addCart();
    
 }

//  function addCart(){
//      var table = document.getElementById("tbody");
//      for (let i=0;i<arrProduct.length;i++){
//         //  console.log(arrProduct[i]);
//         var obj = arrProduct[i];

//         var row = tbody.insertRow();

//         var cell1 = row.insertCell(0);
//         var cell2 = row.insertCell(1);
//         var cell4 = row.insertCell(2);
//         var cell4 = row.insertCell(4);


//         cell1.innerHTML=obj.name;
//         cell2.innerHTML=obj.price;
//         cell4.innerHTML=obj.qty;
//         cell4.innerHTML="#";
//      }

//  }

function showCart(){
    var gh = sessionStorage.getItem("arrProduct");
    var arrProduct = JSON.parse(gh);
}
 