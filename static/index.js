
(function(){
    var info='好巧，我也喜欢你~';
    function s(id){
        return document.getElementById(id);
    }
    s('like').onclick=function(){
        alert(info);
    }
    

    s('dis').onclick=function(){
        s('dis').style.left=Math.random()*80-50+'%' //-50  ---- 30
        s('dis').style.top=Math.random()*80-40+'%'  //-40 40
    }

})();


