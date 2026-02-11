$(document).ready(function(){

  $('.header').height($(window).height());

})

(function() {
                  'use strict';
                  window.addEventListener('load', function() {
                    var forms = document.getElementsByClassName('needs-validation');
                    
                    Array.prototype.filter.call(forms, function(form) {
                      form.addEventListener('submit', function(event) {
                        
                        var password = document.getElementById('validationCustom04');
                        var confirm = document.getElementById('validationCustom05');
                
                        if (password && confirm) {
                          if (password.value !== confirm.value) {
                            confirm.setCustomValidity("Passwords do not match");
                          }
                          else {
                            confirm.setCustomValidity("");
                          }
                        }
                
                        if (form.checkValidity() === false) {
                          event.preventDefault();
                          event.stopPropagation();
                        }
                        else {
                          alert("Registration Successful!");
                          form.reset();
                        }
                
                        form.classList.add('was-validated');
                      }, false);
                    });
                  }, false);
                })();
