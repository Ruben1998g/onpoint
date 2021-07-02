const slider = () =>{
        let slider = document.querySelector('.slider'),
        sliderTrack = slider.querySelector('.slider__list'),
        slides  = slider.querySelectorAll('.slider__item')
        slideWidth = slides[0].offsetWidth,
        slideIndex = 0,
        posInit = 0,
        posX1 = 0,
        posX2 = 0,
        posFinal = 0,
        posThreshold = slideWidth * 0.35,
        trfRegExp = /[-0-9.]+(?=px)/;

        sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

    let slide = function() {
        console.log(slideIndex);
        if(slideIndex < 0){
            slideIndex = 0;
        }

        if(slideIndex >= slides.length){
            slideIndex = slides.length-1;
        }

        sliderTrack.style.transition = 'transform .5s';
        sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

    }




    let getEvent = function(){
        return event.type.search('touch') !== -1 ? event.touches[0] : event;
    }

    let swipeStart = function() {
    let evt = getEvent();

    posInit = posX1 = evt.clientX;

    sliderTrack.style.transition = '';

    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
    };
    

    let swipeAction = function() {
    let evt = getEvent(),
        
        style = sliderTrack.style.transform,
        transform = +style.match(trfRegExp)[0];

        posX2 = posX1 - evt.clientX;
        posX1 = evt.clientX;

        sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
    }
    


    let swipeEnd = function() {

    posFinal = posInit - posX1;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    if (Math.abs(posFinal) > posThreshold) {

        if (posInit < posX1) {
        slideIndex--;
    
        } else if (posInit > posX1) {
        slideIndex++;
        }
    }

    
    if (posInit !== posX1) {
        slide();
    }

    };


 

    sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

    slider.addEventListener('touchstart', swipeStart);
    slider.addEventListener('mousedown', swipeStart);


    document.querySelector('.slide__onhome').addEventListener("click",(evt)=>{
        evt.preventDefault();
        console.log('11');
        slideIndex = 0;
        slide();
    });

    document.querySelector('.first-slide__button').addEventListener("click",(evt)=>{
        evt.preventDefault();
        slideIndex = 1;
        slide();
    });


}
export default slider;