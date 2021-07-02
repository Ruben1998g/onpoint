import css from './css/index.css';
import toggled from './modules/toggled';
import mslider from './modules/mslider';
import slider from './modules/slider';
import scrolled from './modules/scrolled';


document.addEventListener('DOMContentLoaded', ()=>{
    scrolled();
    toggled('third-slide__more', '.modal', '.modal__close');
    mslider('.mslider__item', '.mslider__navigation-prev', '.mslider__navigation-next', '.mslider__navigation');
    slider();
});

