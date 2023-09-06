let female_value = document.getElementById('female_value');
let male_value = document.getElementById('male_value');
let female_btn = document.getElementById('female_btn');
let male_btn = document.getElementById('male_btn');
let weight = document.getElementById('weight');
let height = document.getElementById('height');
let male = document.getElementById('male');
let female = document.getElementById('female');
let speedmeter = document.getElementById('speedmeter');
let needle = document.getElementById('needle');

const male_fun = () =>{
    let c = weight.value / ((height.value/100) * 2);
    male_value.innerText = parseInt(c) + ",00";
    let needal_value = - 90 + parseInt(c) * 3.6;
    if (needle > 50) {
        needal_value = 50
    } else if (needle <= -1){
        needal_value = 1; 
    }
    needle[0].style.transform = ` rotate(${needal_value}deg)`;
    let border = '13px solid #000';

    if (parseInt(c) >= 18 && parseInt(c) <= 25) {
        border = '13 px yellowgreen';
        male_btn.innerText = 'Normal'
        male_btn.style.background = "yellowgreen"
    } else  if (25 < parseInt(c)) {
        border = '13 px solid red';
        male_btn.innerText = 'Overweight'
        male_btn.style.background = "red"
    } else {
        border = '13 px solid yellow';
        male_btn.innerText = 'underweight'
        male_btn.style.background = "yellow"
    }
}
male.addEventListener('click', ()=>{
    male_fun()
})