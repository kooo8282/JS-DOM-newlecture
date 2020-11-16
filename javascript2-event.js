// Ex 4 - multi-button
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");    
    var tbody = section.querySelector(".notice-table tbody");
    tbody.onclick = function(e){
        var target = e.target;
        if(target.nodeName != "INPUT"){return;}
        if(target.classList.contains("sel-btn")){
            var tr = target.parentElement;
            for(; tr.nodeName!="TR";tr=tr.parentElement);
            tr.style.background = "yellow";
        }else if(target.classList.contains("edit-btn")){

        }else if(target.classList.contains("del-btn")){

        }
    }    
});

// Ex 3 - stop bubbling
window.addEventListener("load", function(){
    var section = document.querySelector("#section3");
    var imgList = section.querySelector(".img-list");
    var addBtn = section.querySelector(".add-btn")
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e){                
        if(e.target.nodeName != "IMG") return;        
        currentImg.src = e.target.src;        
    };
    addBtn.onclick = function(e){        
        e.stopPropagation();        
        var img = document.createElement("img");
        img.src = "img/img3.jpg";
        currentImg.insertAdjacentElement("afterend", img);
    };    
});

// Ex 2-1 - delete row
window.addEventListener("load", function(){
    var section = document.querySelector("#section2-1");    
    var tbody = section.querySelector("tbody");

    tbody.onclick = function(e){
        if (e.target.nodeName != "INPUT") return;
        var rowSelected = e.target.parentElement.parentElement;
        rowSelected.remove();
    }    
});

// Ex 2 - Show Image selected: event bubbling
window.addEventListener("load", function(){
    var section = document.querySelector("#section2");
    var imgList = section.querySelector(".img-list");
    // var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    imgList.onclick = function(e){        
        // img가 아니면 아무짓도 하지마라.
        if(e.target.nodeName != "IMG") return;
        // 선택된 img src를 대입하라.
        currentImg.src = e.target.src;
    }


    // for(var i=0; i<imgs.length; i++){
    //     imgs[i].onclick = function(e){
    //         currentImg.src = e.target.src;
    //     }
    // }
});

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