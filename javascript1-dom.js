//EX10 - sort based on a column selected
window.addEventListener("load", function(){
    var notices = [
        {"id":1, "title":"가가멜..ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"하하 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0}
    ];
    
    var section = document.querySelector("#section10");
    var noticeTable = section.querySelector(".notice-table");
    var tbody = noticeTable.querySelector("tbody");
    var titleTd = section.querySelector(".title");

    var bindData = function(){
        var template = section.querySelector("template")
        for (i=0; i<notices.length; i++){
            var cloneNode = document.importNode(template.content, true);
            var tds = cloneNode.querySelectorAll("td");
            tds[0].innerText = notices[i].id;
            var aNode = tds[1].children[0]
            aNode.href = notices[i].id;
            aNode.innerText = notices[i].title;
            tds[2].innerText = notices[i].regDate;
            tds[3].innerText = notices[i].writerId;
            tds[4].innerText = notices[i].hit;

            tbody.appendChild(cloneNode);
        }        
    };
    bindData();

    var titleSorted = false;

    titleTd.onclick = function(){
        tbody.innerHTML = "";
        if(!titleSorted){
            // array sort : .title
            notices.sort(function(a, b){
                if (a.title < b.title){
                    return -1;
                }else if (a.title > b.title){
                    return 1;
                }else{
                    return 0;
                }
            });
            // sorting only at first time
            titleSorted = true;
        }
        // after first sorting, reversing items
        else{
            notices.reverse();
        }

        bindData();
    };


});

//EX9-overall select, delete, and position exchange
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var noticeTable = section.querySelector(".notice-table");
    var tbody = noticeTable.querySelector("tbody");
    var delBtn = section.querySelector(".del-btn");
    var swapBtn = section.querySelector(".swap-btn");
    var allCheckbox = section.querySelector(".overall-checkbox");
    allCheckbox.onchange = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']")
        for(var i=0; i<inputs.length; i++)
            inputs[i].checked = allCheckbox.checked;        
    };
    delBtn.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked")
        
        for(i=0; i<inputs.length; i++)
            inputs[i].parentElement.parentElement.remove();
    };
    swapBtn.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked")
        if(inputs.length!=2){
            alert("you must select 2 itmes.")
            return;
        }
        var trs = [];
        for (i=0; i<inputs.length;i++)
            trs.push(inputs[i].parentElement.parentElement);      
        
        var cloneNode = trs[0].cloneNode(true);
        trs[1].replaceWith(cloneNode);
        trs[0].replaceWith(trs[1]);
    };

})

//Ex 8: selector with childNodes
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var noticeTable = section.querySelector(".notice-table");
    var tbodyNode = noticeTable.querySelector("tbody");
    var upBtn = section.querySelector(".up-btn");
    var downBtn = section.querySelector(".down-btn");
    var currentNode = tbodyNode.firstElementChild;

    downBtn.onclick = function(){
        var nextNode = currentNode.nextElementSibling;
        if(nextNode == null){
            alert("can not move anymore!")
            return;
        }
        // nextNode.remove();
        // tbodyNode.insertBefore(nextNode, currentNode);
        currentNode.insertAdjacentElement("beforebegin",nextNode)
    }
    upBtn.onclick = function(){
        var preNode = currentNode.previousElementSibling;
        if(!preNode){
            alert("cant move!!")
        }
        // tbodyNode.removeChild(currentNode);
        // tbodyNode.insertBefore(currentNode, preNode);
        currentNode.insertAdjacentElement("afterend",preNode)
    }
});

//EX7-node clone and tempalte tag
window.addEventListener("load",function(){
    var addData = [
        {id:3, title:"Fire~~!", regDate:"2019-01-26",writerId:"newlec",hit:"100"},
        {id:4, title:"Water~~!", regDate:"2019-01-26",writerId:"newlec",hit:"500"}
    ];
    var cloneBtn = document.querySelector(".clone-btn");
    var tempCloneBtn = document.querySelector(".temp-clone-btn");

    var section = document.querySelector("#section7");
    var noticeTable = section.querySelector(".notice-table");
    var tbodyNode = noticeTable.querySelector("tbody");
    
    cloneBtn.onclick = function(){
        var trNode = noticeTable.querySelector("tbody tr");
        var trCloneNode = trNode.cloneNode(true);
        var tds = trCloneNode.querySelectorAll("td");
        tds[0].innerText = addData[0].id;
        tds[1].innerHTML = '<a ref="'+addData[0].id+'">'+addData[0].title+'</a>';
        tds[2].innerText = addData[0].regDate;
        tds[3].innerText = addData[0].writerId;
        tds[4].innerText = addData[0].hit;
        
        tbodyNode.append(trCloneNode);
    }
    tempCloneBtn.onclick = function(){
        var template = section.querySelector("template")
        var trCloneNode = document.importNode(template.content,true)
        var tds = trCloneNode.querySelectorAll("td");
        tds[0].innerText = addData[0].id;
        tds[1].innerHTML = '<a ref="'+addData[0].id+'">'+addData[0].title+'</a>';
        tds[2].innerText = addData[0].regDate;
        tds[3].innerText = addData[0].writerId;
        tds[4].innerText = addData[0].hit;
        
        tbodyNode.append(trCloneNode);
    }
})

// EX 6
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var titleInput = section.querySelector(".title-input");
    var menuListUl = section.querySelector(".menu-list");
    var addButton = section.querySelector(".add-button");
    var delButton = section.querySelector(".del-button");
    
    addButton.onclick = function(){
        var title = titleInput.value;
        var html = '<a ref="">' + title + '</a>';
		var liNode = document.createElement("li");
		liNode.innerHTML = html;
		menuListUl.append(liNode);

        // menuListUl.innerHTML += '<li><a ref="">'+title+'</a></li>'
        
        // var txtNode = document.createTextNode(title);
        // var aNode = document.createElement("a");
        // aNode.href = "";
        // // <a>...</a>
        // aNode.appendChild(txtNode);
        // var liNode = document.createElement("li");
        // // <li><a>...</a></li>
        // liNode.appendChild(aNode);
        // menuListUl.appendChild(liNode);
    }

    delButton.onclick = function(){
    //    var txtNode = menuListUl.childNodes[0];
        var liNode = menuListUl.children[0];
        // menuListUl.removeChild(liNode);
        liNode.remove();
    }
})

// EX 5
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    
    var srcInput = section.querySelector(".src-input");
    var changeBtn = section.querySelector(".change-btn");
    var img = section.querySelector(".img");
    var imgSelect = section.querySelector(".img-select")
    var colorInput = section.querySelector(".color-input")

    changeBtn.onclick = function(){
        // img.src = "img/" + srcInput.value;
        img.src = "img/" + imgSelect.value;        
        
        // img.style["border-color"] = colorInput.value;
        img.style.borderColor = colorInput.value;
    }
})

//Ex 4: selector with childNodes
window.addEventListener("load", function(){
    var section4 = document.querySelector("#section4");
    var box = section4.querySelector(".box");
    var input1 = box.children[0];
    var input2 = box.children[1];

    input1.value = "hello";
    input2.value = "okay";

});

//Ex 3: selector API level 1
window.addEventListener("load", function(){
    var section3 = document.getElementById("section3")
    var txtX = section3.querySelector(".txt-x");
    var txtY = section3.querySelector(".txt-y");
    var btnAdd = section3.querySelector(".btn-add");
    var txtSum = section3.querySelector(".txt-sum");
    
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

    }

});

// Ex2: better method for selection
window.addEventListener("load", function(){
    var sec1 = document.getElementById("sec1");
    var lis = sec1.getElementsByTagName("li");

    lis[0].innerHTML = "<span>hi</span><br>Hello";
});

//Ex 1: simple cal. program
window.addEventListener("load", function(){
    var txtX = document.getElementById("txt-x");
    var txtY = document.getElementById("txt-y");
    var btnAdd = document.getElementById("add");
    var txtSum = document.getElementById("txt-sum");
    
    btnAdd.onclick = function(){
        var x = parseInt(txtX.value);
        var y = parseInt(txtY.value);

        txtSum.value = x + y;

    }

});

