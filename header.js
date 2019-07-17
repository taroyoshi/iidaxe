$(function(){
    
    $("#header-outer").load("../html/header.html #header-inner");
    
    //js読み込みのタイミングの関係で遅延
    setTimeout(function(){
        
        //以後 ↓不要の予定?
        /*
        var gatFile = document.location.pathname.split("/").pop();
        var id;
        switch(gatFile.replace(".html", "")){
            case "index":
                id = "index_button"; 
                break;
                
            case "profile":
                id = "profile_button"; 
                break;
                
            case "product":
                id = "product_button"; 
                break;
        }
        button_elements = document.getElementById(id);
        $("#" + id).parent().css('background-color', '#d67877');
        button_elements.remove();
        */
        //以後 ↑不要の予定?
    
        setHover();
        
        //キーバリューとか使ってスマートに
        
        var indexele    = document.getElementById('index').getBoundingClientRect();
        var profele     = document.getElementById('profile').getBoundingClientRect();
        var bioele     = document.getElementById('biography').getBoundingClientRect();
        var skillele     = document.getElementById('skill').getBoundingClientRect();
        var productele  = document.getElementById('product').getBoundingClientRect();
        var iidaxeele   = document.getElementById('iidaxe_wrap').getBoundingClientRect();
        
        topY = indexele.top + window.pageYOffset;   // Y座標(絶対座標)
        pflY = profele.top + window.pageYOffset;   // Y座標(絶対座標)
        bioY = bioele.top + window.pageYOffset;   // Y座標(絶対座標)
        skillY = skillele.top + window.pageYOffset;   // Y座標(絶対座標)
        pdtY = productele.top + window.pageYOffset;   // Y座標(絶対座標)
        idxY = iidaxeele.top + window.pageYOffset;   // Y座標(絶対座標)
            
        
        //スムーススクロール
        $('a[href^="#"]').click(function(){
        
            var speed = 500;
            var href= $(this).attr("href");
            var target = $(href == "#" || href === "" ? 'html' : href);
            var position = target.offset().top - 69;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            
            return false;
        
        });
        
        window.addEventListener('scroll', function() {
                           
            nowYpos = window.pageYOffset + 70;
            
            var cArray = [3];
            var sArray = [3];
            
            if((nowYpos >= topY) && (pflY > nowYpos)){
                cArray = [1, 0, 0];
                sArray = [0, 0, 0];
            }
            else if((nowYpos >= pflY) && (bioY > nowYpos)){
                cArray = [0, 1, 0];
                sArray = [0, 0, 0];
            }
            else if((nowYpos >= bioY) && (skillY > nowYpos)){
                cArray = [0, 1, 0];
                sArray = [1, 0, 0];
            }
            else if((nowYpos >= skillY) && (pdtY > nowYpos)){
                cArray = [0, 1, 0];
                sArray = [0, 1, 0];
            }
            else if((nowYpos >= pdtY) && (idxY > nowYpos)){
                cArray = [0, 0, 1];
                sArray = [0, 0, 0];
            }
            else if(nowYpos >= idxY){
                cArray = [0, 0, 1];
                sArray = [0, 0, 1];
            }
            
            changeColor(cArray, sArray);
            
        }, false);
        
    },130);
    
});



function changeColor(arr1, arr2){
    
    var carr = ['top_button', 
                'prof_button', 
                'prod_button'];
                
    var sarr = ['bio_button', 
                'skill_button', 
                'iidaxe_button'];
    
    for(var i = 0; i < carr.length; i++){
        if(arr1[i] == 1){
            $("#" + carr[i]).css('background-color', '#d67877'); 
        }
        else if(arr1[i] === 0){
            
            $("#" + carr[i]).css('background-color', 'rgb(255,175,255)'); 
        }
    }
    for(var j = 0; j < sarr.length; j++){
        if(arr2[j] == 1){
            $("#" + sarr[j]).css('background-color', 'rgb(100,175,155)'); 
        }
        else if(arr2[j] === 0){
            
            $("#" + sarr[j]).css('background-color', 'rgb(200,175,255)'); 
        }
    }
}


function setHover(){
    
    $('.head_button').hover(function(){
    
        var id = $(this).attr("id");
        var t;
        
        switch(id){
            case "top_button":
                t = "トップ";
                break;
            case "prof_button":
                t = "自己紹介";
                break;
            case "prod_button":
                t = "制作物";
                break;
        }
        $(this).children("h4").text(t);
        
        $(".slide_child:not(:animated)", this).slideDown();
        
    },function(){
        
        var id = $(this).attr("id");
        var bt;
        
        switch(id){
            case "top_button":
                bt = "TOP";
                break;
            case "prof_button":
                bt = "Profile";
                break;
            case "prod_button":
                bt = "Product";
                break;
        }
        $(this).children("h4").text(bt);
        
        $("div.slide_child",this).slideUp();
    });
}