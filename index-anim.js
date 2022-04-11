

 $surface = $('.surface');

 $car = $('.car');

 $img = $('.car img');

 var flag = true;

 const cars = ['./photo/Img_05.png', './photo/Img_06.png'];


$(document).ready(function(){

   
    // keypress event

    $(document).on('keypress',function(e){

      
       if(e.which === 32){
          
        
          $($surface).toggleClass('moveRight');

           $($car).toggleClass('suspension');
       }

})



$(document).on('keypress',function(e){

    if(e.which == 119){
        if(flag){
         
            flag = false;
            $img.attr('src', cars[0]);
        }
        else {

            flag= true 
            $img.attr('src', cars[1]);
        }
    }
    

})

});

