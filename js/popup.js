    var link =  document.querySelector(".feedback");
    var popup = document.querySelector(".common");
    var openOverlay = document.querySelector(".common-overlay");
    var close = popup.querySelector(".common-close");
    var name = popup.querySelector("[name-input]");
    var nameLab = popup.querySelector(".name-input-label")
    var email = popup.querySelector("[email-input]");
    var message = popup.querySelector("[text-input]");
    var form = popup.querySelector("form");
    var storage = localStorage.getItem("name");
    
    link.addEventListener("click", function(event) {
        event.preventDefault();
        openOverlay.classList.add("common-content-show");
        popup.classList.add("common-content-show");     
        if (storage) {
            name.value = storage;
            //email.focus();
        } else {
            name.focus();
        }
    });

    name.addEventListener("change", function(event) {
            event.preventDefault();
            nameLab.classList.add("label-hide");
    });   
    
    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("common-content-show");
        popup.classList.remove("common-error");
        openOverlay.classList.remove("common-content-show");
    });
    
    form.addEventListener("submit",function(event) {
        if (!name.value || !password.value) {
            event.preventDefault();
            popup.classList.add("common-error");
        } else {
            localStorage.setItem("name",name.value);
        }
    });
    
    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
            if (popup.classList.contains("common-content-show")) {
                    popup.classList.remove("common-content-show");
                    popup.classList.remove("common-error");
                    openOverlay.classList.remove("common-content-show");
                }          
        }
    })