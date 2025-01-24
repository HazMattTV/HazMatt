document.addEventListener("DOMContentLoaded", ()=>{
    // Main
    const root = document.getElementById("root");
    
    // Divs
    const divMain = document.getElementById("main");
    const div1 = document.getElementById("aboutme");
    const links = document.getElementById("links");
    const langs = document.getElementById("langs");

    // Buttons
    const btnBack = document.querySelectorAll('.goback');
    const btn1 = document.getElementById("AM_btn");
    const btn2 = document.getElementById("L_btn");
    const btn3 = document.getElementById("Lan_btn");
    
    root.addEventListener('animationstart', (event)=>{
        // console.log(`Animation started: ${event.animationName}`);
        if (event.animationName == "fadeOut"){
            btn1.disabled = true;
            btn2.disabled = true;
            btn3.disabled = true;
            btnBack.forEach(btn => {
                btn.disabled = true;
            });
        }
    })
    root.addEventListener('animationend', (event)=>{
        if (event.animationName == "fadeIn"){
            btn1.disabled = false;
            btn2.disabled = false;
            btn3.disabled = false;
            btnBack.forEach(btn => {
                btn.disabled = false;
            });
        }
    })

    btn1.addEventListener('click', ()=>{
        changeDiv(root,divMain,div1);
    })
    btn2.addEventListener('click', ()=>{
        changeDiv(root,divMain,links)
    })
    btn3.addEventListener('click', ()=>{
        changeDiv(root,divMain,langs)
    })

    btnBack.forEach(btn=>{
        btn.addEventListener('click', () => {
            changeDiv(root, btn.parentElement, divMain);
        });
    });
});

function changeDiv(rootDiv,div1,div2){
    rootDiv.style.animation = "fadeOut 0.72s ease-in-out";
    rootDiv.addEventListener('animationend', ()=>{
        div1.style.display = "none";
        div2.style.display = "block";
        rootDiv.style.animation = "fadeIn 0.72s ease-in-out";
    })
}
