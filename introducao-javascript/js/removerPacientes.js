var tabela = document.querySelector('table');

tabela.addEventListener('dblclick', function(event){
    console.log(event);
    
    if(event.target.tagName == 'TD') {
        event.target.parentNode.classList.add('fadeOut');
        setTimeout(function(){
            event.target.parentNode.remove();
        },500)
    }
})
