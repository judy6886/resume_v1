var oLeTab=document.querySelector('.primary-html-container-bot-le-list');
var oLeTabLi=oLeTab.getElementsByTagName('a');
var oLeTabtu=document.querySelector('.primary-html-container-bot-le-list-img');
var oLeTabImg=document.querySelector('#html-table-tupian');

for(var m=0;m<oLeTabLi.length;m++){
    oLeTabLi[m].index=m;
    oLeTabLi[m].onclick=function(){
        for(var m=0;m<oLeTabLi.length;m++){
            oLeTabLi[m].className='';
        }
        this.className='active-html';
        oLeTabImg.innerHTML='<img src="../img/code'+(this.index+1)+'.jpg"  width="340" height="374" />';
    }
}
