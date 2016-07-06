


$(document).ready(function () {
    var f=-1;
    var x=0;
    while(f==-1){
    x= prompt("Please enter a number between 1-60");
    if(0<x && x<61){
        f=0;
    }
    else{
    var z= prompt("Do you want to continue?(Y/N)")
    if(z=="N" || z=="n"){
        f=0;
        x=20;
    }
    }

}
    //add columns to the the temp row object
    
    make_grid(x);

    $('div.square').hover(function(){
        $(this).css("background","rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")")
    });

});
function make_grid(squares) {
    i = 1;
    j = 1;
    side = Math.floor(Math.sqrt((530)*(530) / (squares * squares)));

    while(i <= squares) {
        $("#wrapper").append('<div class="column' + i +'" style="display:inline-block;" >');
        while(j <= squares) {
            $(".column" + i).append('<div class="square" style="width:' + side +'px; height:' + side + 'px">');
            j += 1;
        }
        i += 1;
        j = 1;
    }
    
};