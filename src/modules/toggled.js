//Модуль Toggled
const toggled = function(trigger, modalWindow, modalClose){
    let open = document.getElementById(trigger);
    let close = document.querySelector(modalClose);
    let modal = document.querySelector(modalWindow);

    //Cлушает Esc
    const onBeginListenEsc = (e)=>{
        const Ecode = e.keyCode;
        if(Ecode == 27){
            modal.classList.remove('show');
            window.removeEventListener('keyup', onBeginListenEsc);
        }
    }

    //Слушает Trigger
    open.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.add('show');

        window.addEventListener('keyup', onBeginListenEsc)
    });

    //Слушает Close
    close.addEventListener('click', (e)=>{
        e.preventDefault();
        modal.classList.remove('show');

        window.removeEventListener('keyup', onBeginListenEsc);
    });


    

    //Слушает Overlay
    modal.addEventListener('click',(e)=>{
        
        if(e.target.classList.contains('modal')){
            modal.classList.remove('show');
            window.removeEventListener('keyup', onBeginListenEsc);
        }
        
    });
}


export default toggled;