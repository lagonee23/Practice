Everything = {
    enterLeave : function(ent, hid) {
        $(ent).mouseenter(function(){
            $(hid).slideDown(300);
            $(ent).mouseleave(function(){
                $(hid).hide()
            })
        })
    },
    // 대학교 추가시, Myscript_exe.js에서 코드 추가 필수!!
    universityList : function() {
        var lists=['서울대학교', '연세대학교', '고려대학교'];
        var i=0;
        var list="";
        var javlist=""
        while(i<lists.length) {
            var Li='<li><a id="uni_'+i+'" href="university_page_'+i+'.html">'+lists[i]+'</a></li>';
            list=list+Li;
            i=i+1;
        };
        document.querySelector('#SecondUL').innerHTML=list;
    }    
}