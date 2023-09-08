let female_value = document.getElementById('female_value');
let male_value = document.getElementById('male_value');
let female_btn = document.getElementById('female_btn');
let male_btn = document.getElementById('male_btn');
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let male = document.getElementById('male');
let female = document.getElementById('female');
let speedmeter = document.getElementsByClassName('speedmeter');
let needle = document.getElementsByClassName('needle');

const male_fun = () =>{
    let c = weight.value / ((height.value/100) * 2);
    male_value.innerText = parseInt(c) + ".00";
    let needal_value = - 90 + parseInt(c) * 3.6;
    if (needle > 50) {
        needal_value = 50
    } else if (needle <= -1){
        needal_value = 1; 
    }
    needle[0].style.transform = ` rotate(${needal_value}deg)`;
    let border = '13px solid #000';

    if (parseInt(c) >= 18 && parseInt(c) <= 25) {
        border = '13px solid yellowgreen';
        male_btn.innerText = 'Normal'
        male_btn.style.background = "yellowgreen"
    } else  if (25 < parseInt(c)) {
        border = '13px solid red';
        male_btn.innerText = 'Overweight'
        male_btn.style.background = "red"
    } else {
        border = '13px solid yellow';
        male_btn.innerText = 'underweight'
        male_btn.style.background = "yellow"
    }
    speedmeter[0].style.borderTop = border;
    speedmeter[0].style.borderLeft = border;
}
male.addEventListener('click', ()=>{
    male_fun();
})

const female_fun = () =>{
    let c = weight.value / ((height.value/100) * 2);
    female_value.innerText = parseInt(c) + ".00";
    let needal_value = - 90 + parseInt(c) * 3.6;
    if (needle > 50) {
        needal_value = 50
    } else if (needle <= -1){
        needal_value = 1; 
    }
    needle[1].style.transform = ` rotate(${needal_value}deg)`;
    let border = '13px solid #000';

    if (parseInt(c) >= 18 && parseInt(c) <= 23) {
        border = '13px solid yellowgreen';
        female_btn.innerText = 'Normal'
        female_btn.style.background = "yellowgreen"
    } else  if (23 < parseInt(c)) {
        border = '13px solid red';
        female_btn.innerText = 'Overweight'
        female_btn.style.background = "red"
    } else {
        border = '13px solid yellow';
        female_btn.innerText = 'underweight'
        female_btn.style.background = "yellow"
    }
    speedmeter[1].style.borderTop = border;
    speedmeter[1].style.borderLeft = border;
}

female.addEventListener('click', ()=>{
    female_fun();
})