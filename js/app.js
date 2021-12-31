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
const pgh = "မင်္ဂလာပါ ကျွန်တော့်ကတော့ မြတ်မင်းဌေးပါခင်ဗျ။ ကျွန်တော့်ဇာတိက မန္တလေး ပါ။ တက္ကသိုလ်ဝင်တန်းစာမေးပွဲကို  2017-18 ပညာသင်နှစ်မှာ အ.ထ.က (၁၁) (မန္တလေး) ကနေဖြေဆိုအောင်မြင်ခဲ့ပါတယ်။ အဲ့တာပြီးတော့ ရတနာပုံတက္ကသိုလ်မှာ ရူပဗေဒ ဘာသာရပ်ကို ဆက်လက်သင်ကြားခဲ့ပါတယ်။ ပထမနှစ်ဖြေဆိုပြီးချိန် ဒုတိယနှစ် ဆက်တက်ရမည့်နှစ်မှာ ကိုဗစ် ၁၉ နဲ့ နိုင်ငံရေးအခြေအနေကြောင့် ကျွန်တော့်ပညာရေးကတော့ လောလောဆယ် ဆိုင်းငံနေပါတယ်ခင်ဗျ။ ကျောင်းသင်ပညာက ဆိုင်းငံနေပေမယ့် ဒီ website ပိုင်းမှာတော့ အမြဲကြိုးစားလေ့လာနေပါတယ်ဗျ။ ဒီ web-development ကို တက္ကသိုလ်ဝင်တန်းအောင်မြင်ပြီးချိန်မှာ စတင်သိရှိခဲ့ပါတယ်။ အဲ့နောက် အပြင်မှာ သင်တန်းတက်နိုင်ဖို့ အခက်ခဲကြောင့် ကိုယ့်ဘာသာ ပဲလေ့လာခဲ့ပါတယ်ခင်ဗျ။ အဲ့လိုလေ့လာရင်းနဲ့ Data Land Technology နဲ့ ရေစက်ပါပြီး ဆရာ တင်ထွဋ်အောင်ရဲ့  ပညာဒါန သင်ကြားပေးမှုကြောင့် ဒီပညာကို ဆရာနဲ့ သေသေချာချာ ကောင်းကောင်းမွန်မွန်သင်ကြားခဲ့ရပါတယ်။ ကျွန်တော် သေချာမသိတာတွေ တော်တော်ရှင်းသွားပါတယ်။ အခုလည်း Data Land Technlogy မှာ ဆက်လက်သင်ယူနေဆဲပါခင်ဗျ။ အဲ့နောက် အဆိုးထဲက အကောင်းဖြစ်တယ်ပြောရမလား။ အမေရိကန်နိုင်ငံ ရောက် မြန်မာနိုင်ငံသားများတည်ထောင်ထားတဲ့ ပရဟိတ အဖွဲ့အစည်း  MYTTA(Myanmar Youth Through Translatlantic American Dream) ရဲ့ ကျေးဇူးကြောင့် Project Rise ဆိုတဲ့ ခေါင်းစဉ်အောက်ကနေ Cyber Security နဲ့ပက်သက်တဲ့ အကြောင်းအရာတွေကို စတင်သင်ကြားခွင့်ရခဲ့ပါတယ်။ အဲ့တာလည်း အခမဲ့ပညာဒါနပါခင်ဗျာ။'မေတ္တာဖောင်ဒေးရှင်း' 501(c)(3) ဟာ 2007 ခုနှစ် ကတည်းက အမေရိကန် အခြေစိုက် Non-profit organization ကြီးတစ်ခု ဖြစ်ပါတယ်။ အမေရိကန် law firm ကြီး 2 ခုရဲ့ ကြီးကြပ်မှု အောက်မှာ , လူဝင်မှု ကြီးကြပ်ရေးနဲ့ ဥပဒေပိုင်းဆိုင်ရာများကို မိမိကိုယ်ပိုင်ငွေစိုက်ထုတ်ပြီး ဆရာမ ပတ္တမြားမိုမိုက 2007 ခုနှစ်ကတည်းက ကူညီပေးခဲ့တာဖြစ်တယ်။ နိုင်ငံခြားမှာ ကျောင်းသွားတက်ချင်တဲ့ ကျောင်းသားတွေကိုလည်း လမ်းညွှန် ကူညီပေးနေတဲ့ အဖွဲ့အစည်းတစ်ခုဖြစ်ပါတယ်ခင်ဗျ  အခုထိလည်း ဆက်လက်သင်ယူနေဆဲပါခင်ဗျာ။ ကျွန်တော့်ရဲ့ အိပ်မက်ကတော့ Web-Development ကနေတစ်ဆင့် Programmer နောက် Cyber Security Adminstrator , ETHICAL HACKER လို့ အဆင့်မျိုးထိ ရောက်ဖို့ပါပဲ။ ပြီးတော့ Data Land ကြောင့် ခင်မင်ရင်းနှီးခဲ့ရတဲ့ အစ်ကိုတွေ အစ်မတွေ နဲ့လည်း Freelance ကုမ္ပဏီသဘောမျိုး ဖြစ်တဲ့ Universe Software House ကို အကောင်အထည်ဖော်ဖို့ ကြိုးစားနေပါတယ်ခင်ဗျာ။ ကျွန်တော့်တစ်ယောက်တည်းကိုဖြစ်စေ ကုမ္ပဏီကို ဖြစ်စေ ပရောဂျက်အပ်ချင်တာရှိရင် ယုံကြည်စိတ်ချစွာအပ်နိုင်ပါတယ်ခင်ဗျ။ အခုလက်ရှိကျွန်တော်အရည်အချင်းကတော့ static website တွေကိုသာ တည်ဆောက်နိုင်ပါသေးတယ်ခင်ဗျာ။ ဆက်လက်ကြိုးစားသွားမှာပါခင်ဗျ။ <span class=\"rstg\">Rising Together</span> "

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



