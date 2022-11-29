$( document ).ready(function() {
    var prevScrollpos = $(window).scrollTop();
    $( window ).scroll(function() {
        var currentScrollPos = $(window).scrollTop();
        console.log(currentScrollPos);
        if (prevScrollpos > currentScrollPos) {
            $( "#header" ).css( "top", "0" ) 
        } else {
            $( "#header" ).css( "top", "-74px" ) 
        }
        prevScrollpos = currentScrollPos;
    });
    document.getElementById("myVideo").loop = true;



    let items = document.querySelectorAll('.item');
document.addEventListener('scroll', function()
{
    items.forEach(item => {
        if(item.offsetTop - window.scrollY <350)
        {
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }
    })
})
});
