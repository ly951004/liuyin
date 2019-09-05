var base = 0
var htmlWidth
//获取Html的Dom
var htmlDom = document.getElementsByTagName('html')[0];
function fontBase(){
    htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    base = htmlWidth / 10
    htmlDom.style.fontSize= base + 'px'
}
fontBase()
window.addEventListener('resize',fontBase)