var input=document.querySelector('input');

input.onkeydown=(e)=>{
    if(e.key==='Enter'){
        var div=document.createElement('div');
        div.innerHTML=`user >>${input.value}`;
        
        var consoleDiv=document.querySelector('.console');

        consoleDiv.append(div);
        input.value='';
    }
}