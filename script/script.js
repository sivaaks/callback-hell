
setTimeout(()=>{
    let countdown= document.querySelector('.countdown');
    countdown.innerText=10;
    setTimeout(()=>{
        countdown.style.backgroundColor='skyblue';
        countdown.innerText=9;
        setTimeout(()=>{
            countdown.style.backgroundColor='forestgreen';
            countdown.innerText=8;
            setTimeout(() => {
                countdown.style.backgroundColor='orange';
                countdown.innerText=7;
                setTimeout(() => {
                    countdown.style.backgroundColor='purple';
                    countdown.innerText=6;
                    setTimeout(() => {
                        countdown.style.backgroundColor='violet';
                        countdown.innerText=5;
                        setTimeout(() => {
                            countdown.style.backgroundColor='pink';
                            countdown.innerText=4;
                            setTimeout(()=>{
                                countdown.style.backgroundColor='brown';
                                countdown.innerText=3;
                                setTimeout(()=>{
                                    countdown.style.backgroundColor='orange';
                                    countdown.innerText=2;
                                    setTimeout(()=>{
                                        countdown.style.backgroundColor='purple';
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
