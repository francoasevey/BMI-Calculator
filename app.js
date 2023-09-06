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
    let needal_value =
}
male_fun()