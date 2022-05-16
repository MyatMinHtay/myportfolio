// UI 

const toggle = document.querySelector('#toggle');

toggle.addEventListener('click',()=>{
    const html = document.querySelector('html');

    if(toggle.checked){
        html.classList.add('dark');
    }else{
        html.classList.remove('dark');
    }
});


const projects = document.querySelector('.projects');
const modalfirst = document.getElementById('#firstproject');
const modalsecond = document.getElementById('#secondproject');
const modalthird = document.getElementById('#thirdproject');
const playbtns = document.querySelectorAll('.fa-play');

playbtns.forEach((playbtn)=>{
    playbtn.addEventListener('click',()=>{
        if(playbtn.parentElement.parentElement.classList.contains('firstcards')){
            modalfirst.classList.toggle('show');
        }else if(playbtn.parentElement.parentElement.classList.contains('secondcards')){
            modalsecond.classList.toggle('show');
        }else if(playbtn.parentElement.parentElement.classList.contains('thirdcards')){
            modalthird.classList.toggle('show');
        }
    });
    
});



// val = window.scrollY;

window.addEventListener('scroll',()=>{

    let getscrolly = window.scrollY;

    // console.log(getscrolly);
    if(getscrolly >= 290){
        projects.classList.add('show');
    }else{
        projects.classList.remove('show');
    }


});


// START ABOUT SECTION 
const togglebtns = document.querySelectorAll('.abtoggles');

// console.log(togglebtns);

togglebtns.forEach(togglebtn=>{
    // console.log(togglebtn);

    togglebtn.addEventListener('click',()=>{
        togglebtn.parentElement.classList.toggle('active');

        // togglebtn.parentNode.classList.toggle('active');
        // parentNode လည္းထည့္လို႔ရတယ္ 
    });
});

// UI 

const textel = document.getElementById('aboutparagraph');
console.log(textel.innerHTML)
const pgh = "I’m a web developer. I start learning about web-development since 2018.Now I can write a small blog , information show website,portfoliowesite and so on. Now I’m learning about PHP and I can build e-commerce website soon. I can give some advice for your business about why your business must have a website and what is the advantages of having a website in your business.So don’t hesitate anymore try to contact me now…  <blockquote>#Rising Together</blockquote><span class=\"rstg\">Myat Min Htay</span> "

let idx = 1;
let speed = 50;

function autotext(){
    // console.log('hay');

    textel.innerHTML = pgh.slice(0,idx);

    // idx = 1 
    idx++;

    if(idx > pgh.length){
        clearTimeout(setTimeout(autotext,speed));
    }

    setTimeout(autotext,speed);
}

autotext();

// console.log(idx)





// END ABOUT SECTION 


// START CONATCAT SECTION 
const labels = document.querySelectorAll('.form-group label');
// console.log(labels);




labels.forEach(label=>{


    label.innerHTML = label.innerText
                    .split('')
                    .map((letter,index)=>
                        `<span style="transition-delay:${index * 50}ms">${letter}</span>`)
                        .join('');
});




// END CONTACT SECTION 



