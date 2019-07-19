//scroll hacia abajo
setInterval(function(){

    //ejecuta scroll hacia abajo
    $("html,.content").animate({scrollTop: $(document).height() }, 0000);

   //scroll hacia arriba
    setTimeout(function() {
       $('html,.content').animate({scrollTop:0}, 2000);
    },2000);//llama cada 2000 ms

},2000);//llama cada 2000 ms