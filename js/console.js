var target=document.querySelector('.console'),
    config={attributes:false,childList:true};

const callback=(mutationList)=>{
    for(var mutation of mutationList){
        if(mutation.type==='childList'){
            if(mutation.addedNodes.length>0){
                var text=mutation.addedNodes[0].innerHTML;
                if(text.includes('user') && text.includes('hello')){
                    consolePrint('hello my friend');
                }
                if(text.includes('/clear')){
                    consoleClear();
                }
            }
        }
    }
}

var observer=new MutationObserver(callback);
observer.observe(target,config);


function consolePrint(text) {
    var head='console >>';
    var i=0;
    var div=document.createElement('div');
    div.style.color='green';
    target.append(div);
    setTimeout(() => {
        div.innerHTML=head;
        setTimeout(() => {
            var interval=setInterval(() => {
                if(i===text.length+1){
                    clearInterval(interval);
                    return;
                }
                div.innerHTML=head+text.substring(0,i);
                i++;
            }, 200);
        }, 500);
    }, 1000);
}
function consoleClear() {
    while(target.lastElementChild){
        target.lastChild.remove();
    }
}
