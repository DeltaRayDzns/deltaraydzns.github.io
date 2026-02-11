$(document).ready(function(){

  $('.header').height($(window).height());

})


$(document).ready(function() {
    $('.needs-validation').on('submit', function(event) {
        var form = $(this);

        if (form[0].checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        
        form.addClass('was-validated');
    });
});
