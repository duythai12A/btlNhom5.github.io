var index = 1
    setInterval(function(){
        document.getElementById('radio'+index).checked = true;
        index++;
        if(index>4){
             index=1;
         }
    },4000);



