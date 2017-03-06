//html模块中第二个选项卡
var oLeTab2=document.querySelector('.table2');
var oLeTabLi2=oLeTab2.getElementsByTagName('a');
var oLeTabRe=document.getElementById('html-tab-repeat');
for(var n=0;n<oLeTabLi2.length;n++){console.log(oLeTabLi2.length);
    oLeTabLi2[n].index=n;
    oLeTabLi2[n].onclick=function(){
        for(var n=0;n<oLeTabLi2.length;n++){
            oLeTabLi2[n].className='';
            oLeTabRe[n].style.display='none';
        }
        this.className='html-skill-bg';
        oLeTabRe[this.index].style.display='block';

    }
}
