
setTimeout(()=>{
    let countdown= document.querySelector('.countdown');
    countdown.innerText=10;
    setTimeout(()=>{
        countdown.innerText=9;
        setTimeout(()=>{
            countdown.innerText=8;
            setTimeout(() => {
                countdown.innerText=7;
                setTimeout(() => {
                    countdown.innerText=6;
                    setTimeout(() => {
                        countdown.innerText=5;
                        setTimeout(() => {
                            countdown.innerText=4;
                            setTimeout(()=>{
                                countdown.innerText=3;
                                setTimeout(()=>{
                                    countdown.innerText=2;
                                    setTimeout(()=>{
                                        countdown.innerText=1;
                                        setTimeout(() => {
                                            countdown.style.fontSize='60px';
                                            countdown.innerText='Happy new year';
                                        }, 1000);
                                    },1000);
                                },1000);
                            },1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        },1000)
    },1000);
},1000);
