// EX 9 - MouseEvent Position: moving 3 boxes By page-offset-left
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container2");
    var status = section.querySelector(".status");
    var dragging = false;
    var offset = {x:0,y:0}
    var current = null;
    var left = container.offsetLeft;
    var top = container.offsetTop;
    console.log(left, top)

    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };
    container.onmousemove = function(e){
        if(!dragging){return;}
        var x = e.pageX-offset.x-left
        var y = e.pageY-offset.y-top
        current.style.left = x+"px";
        current.style.top = y+"px";
        status.innerText = "(x, y):("+x+","+y+")";
    };
    container.onmouseup = function(e){
        dragging = false;
    };    
});

// EX 8 - MouseEvent Position: moving 3 boxes By Drag
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0,y:0}
    var current = null;

    container.onmousedown = function(e){
        if(e.target.classList.contains("box")){
            dragging = true;
            current = e.target;
            offset.x = e.offsetX;
            offset.y = e.offsetY;
        }
    };
    container.onmousemove = function(e){
        if(!dragging){return;}
        current.style.left = e.pageX-offset.x+"px";
        current.style.top = e.pageY-offset.y+"px";
    };
    container.onmouseup = function(e){
        dragging = false;
    };    
});

// EX 7 - MouseEvent Position: By Drag
window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");
    var dragging = false;
    var offset = {x:0,y:0}
    container.onmousedown = function(e){
        if(e.target===box){
            dragging = true;
        }
    };
    container.onmousemove = function(e){
        if(!dragging){return;}
        box.style.left = e.pageX-offset.x+"px";
        box.style.top = e.pageY-offset.y+"px";
    };
    container.onmouseup = function(e){
        dragging = false;
    };
    box.onmousedown = function(e){
        offset.x = e.offsetX;
        offset.y = e.offsetY;
    }
});

// EX 6 - MouseEvent Position
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container");
    var box = section.querySelector(".box");

    container.onclick = function(e){
        //e.x, e.y / e.offsetX,e.offsetY/ e.clientX,e.clientY
        console.log(e.x, e.y)
        console.log(e.clientX, e.clientY)
        console.log(e.pageX, e.pageY)
        console.log(e.offsetX, e.offsetY)
        box.style.position = "absolute";
        box.style.left = e.pageX+"px";
        box.style.top = e.pageY+"px";
    };
});

// EX 5 - Trigger
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileBtn = section.querySelector(".file-button");
    var fileTriggerBtn = section.querySelector(".file-trigger-button");

    fileTriggerBtn.onclick = function(){
        var event = new MouseEvent("click",{
            'view':window,
            'bubbles':true,
            'cancelable':true
        });
        fileBtn.dispatchEvent(event);
    };
})

// Ex 4 - multi-button
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");    
    var tbody = section.querySelector(".notice-table tbody");
    tbody.onclick = function(e){
        e.preventDefault();
        var target = e.target;
        if(target.nodeName != "A"){return;}
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