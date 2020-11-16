// Ex 1-1 - delete row
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");    
    var delBtn = section.querySelectorAll(".del-btn");

    for(var i=0; i<delBtn.length; i++){
        delBtn[i].onclick = function(e){
            var rowSelected = e.target.parentElement.parentElement;
            rowSelected.remove();
        }
    }
});

// Ex 1 - Show Image selected: event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1");
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for(var i=0; i<imgs.length; i++){
        imgs[i].onclick = function(e){
            currentImg.src = e.target.src;
        }
    }
});