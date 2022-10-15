// @@include('alert.js')
if (jQuery(window).width() > 768) {
    function parallax(event){
        this.querySelectorAll(".parallax").forEach(parallax => {
            parallax.style.transform = `translateX(${event.clientX/40}px)`
        });
    }

    document.addEventListener('mousemove', parallax);
}