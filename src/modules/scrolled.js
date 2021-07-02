const scrolled = () =>{

    const scrolling = document.querySelector('.second-slide__scroll-trigger');
    const text = document.querySelector('.second-slide__description');

    let sum = 0;
    
    let del = 0;

    const moveing = '';
    let moveFunction = (e) =>{
        {
            let perm = e.screenY;
                    sum = perm-del;
           
            let value = sum;
            if(sum>340){
                value = 340;
            }
            if(sum<0){
                value = 0;
            }
            scrolling.style.top = `${value}px`;

            text.cssText = ``;
            let newValue = Math.ceil(value/3.4/2);
            text.style.cssText=`transform:translateY(-${newValue}%);`;
            console.log(text);
            }
    }

    scrolling.addEventListener('mousedown',(e)=>{
        del = e.screenY;

        const moveing = document.addEventListener('mousemove',moveFunction);

            document.addEventListener('mouseup',()=>{
                document.removeEventListener("mousemove", moveFunction);
            });
    })

}
export default scrolled;