

//LOADER EFFECT

setTimeout(function(){
    $('.loader_bg').fadeToggle();
}, 2000);



//First Counter
var countDate = new Date('Aug 1, 2020 00:00:00:00').getTime();

function launch(){
    var now = new Date().getTime();
    gap = countDate - now;
    
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));
    
    document.getElementById('day', 'days').innerText = d;
    document.getElementById('hour', 'hours').innerText = h;
    document.getElementById('minute', 'minutes').innerText = m;
    document.getElementById('second', 'seconds').innerText = s;
    
    }

    setInterval(function(){
        launch();
    },1000);
    
//Second Counter

var countDate = new Date('Aug 1, 2020 00:00:00:00').getTime();

function newYear(){
    var now = new Date().getTime();
    gap = countDate - now;
    
    var second = 1000;
    var minute = second * 60;
    var hour = minute * 60;
    var day = hour * 24;
    
    var d = Math.floor(gap / (day));
    var h = Math.floor((gap % (day)) / (hour));
    var m = Math.floor((gap % (hour)) / (minute));
    var s = Math.floor((gap % (minute)) / (second));
    
    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
    
    }

    setInterval(function(){
        newYear();
    },1000);


//Form Validation Top

$("#submit").click(function(){
                   
        var email = $("#email").val();
        
        if(email == ''){
              Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                  confirmButtonColor: '#ff7700',
                  customClass: ".sweet-alert-button"
                });
        }else{
            Swal.fire({
                  icon: 'success',
                  title: 'Successfully',
                  text: 'Successfully Subscribed!',
                  confirmButtonColor: '#ff7700',
                }).then(function(){ 
   location.reload();
            });
        }
        
    
});




//Form Validation Bottom

$("#submitted").click(function(){
                   
        var email2 = $("#email2").val();
        
        if(email2 == ''){
              Swal.fire({
                  icon: 'error',
                  title: 'No Email',
                  text: 'Input Your Email!',
                  confirmButtonColor: '#ff7700',
                  customClass: ".sweet-alert-button"
                });
        }else{
            Swal.fire({
                  icon: 'success',
                  title: 'Successfully',
                  text: 'Successfully Subscribed!',
                  confirmButtonColor: '#ff7700',
                }).then(function(){ 
   location.reload();
            });
        }
});


$(function(){
    $('form').submit(function(e){
        
        
        //Prevent default form submission
        
        e.preventDefault();
        
        //ajax form submission
        $.ajax({
            type: 'POST',
            url: 'submit.php',
            data: $(this).serialize(),
            success: (message) => {
                $('#submit').val=""
            },
            
            error: (error) => {
                alert(`{$error}`)
            }
            
            
        })
    });
});

    



if ( window.history.replaceState ) {
        window.history.replaceState( null, null, window.location.href );
    }


