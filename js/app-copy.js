$(document).ready(function(){
    $(".nav-search").hide();
$('.search').on("click", function(){
            
        $(".nav-search").toggle(300);
             
    });
});        
  
 if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }