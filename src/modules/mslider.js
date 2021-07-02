const mslider = (sliders, prevTrigger, nextTrigger, poginationBlock) =>{
    let slideIndex = 0;
    let mass = [];

    let items = document.querySelectorAll(sliders);
    let prev = document.querySelector(prevTrigger);
    let next = document.querySelector(nextTrigger);
    let poginationList = document.querySelector(poginationBlock);

    let spaceForeReplacePagination = next.parentElement;


    poginationList.addEventListener('click',(e)=>{
        if(e.target.hasAttribute('data-value')){
            let numberButtonClick = e.target.dataset.value;
            slideIndex = numberButtonClick;
            showSlides(slideIndex);
        }
    });
    

    function paginations(){
        
            mass.forEach((item)=>{
                item.remove();
            });

        for(let i = 0; i < items.length; i++){
            let pag = document.createElement('li');
            mass.push(pag);
            pag.setAttribute('data-value',i);
            if(slideIndex == i){
                pag.classList.add('active');
            }
            spaceForeReplacePagination.insertAdjacentElement('beforeBegin', pag)
        }
    }



    function showSlides(n){

        
        items.forEach((item)=>{
            item.style.display="none";
        });
        items[n].style.display = 'block';
        paginations()
    }

    showSlides(slideIndex);

    prev.addEventListener('click',()=>{
        if(slideIndex-1 < 0){
            slideIndex = items.length - 1;
            showSlides(slideIndex);
        }else{
            slideIndex = slideIndex - 1;
            showSlides(slideIndex);
        }
    });

    next.addEventListener('click',()=>{
        if(slideIndex + 1 > items.length - 1){
            slideIndex = 0;
            showSlides(slideIndex);
        }else{
            slideIndex = slideIndex + 1;
            showSlides(slideIndex);
        }
    });

}

export default mslider;