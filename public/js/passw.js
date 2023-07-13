$(function(){
    var mayus =new RegExp("^(?=.*[A-Z])");
    var special =new RegExp("^(?=.*[!@#$%&*])");
    var numbers =new RegExp("^(?=.*[0-9])");
    var lower =new RegExp("^(?=.*[a-z])");
    var len =new RegExp("^(?=.{8,})");

    var regExp = [mayus, special, numbers, lower, len];
    var elementos = [$("#mayus"),$("#special"), $("#numbers"), $("#lower"), $("#len")];

    $("#contraseña").on("keyup", function(){
        var pass = $("#contraseña").val();

        for(var i = 0; i < 5; i++){
            if(regExp[i].test(pass)){
                elementos[i].hide();} 
            else{
                elementos[i].show();}
            }
        



    
    });
    
 








}); 
