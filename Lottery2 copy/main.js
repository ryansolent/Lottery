let genBtn = document.querySelector('.genBtn');
let result = document.querySelector('.result');
let newNumb = document.querySelector('.newNumb')
let powerBtn = document.querySelector('.genBtnPower');
let question = document.querySelector('question');
let reBtn = document.querySelector('refreshBtn');


let numbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
'11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
'21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
'31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
'41', '42', '43', '44', '45', '46', '47'];

let powerNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
'11'];

function getRand(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
genBtn.addEventListener('click', () => {
    let index = getRand(0, numbers.length-1);
    result.innerText = numbers[index];
    newNumb.innerText = numbers[index];

    document.getElementById('questionID').classList.add('questionGone');
    document.getElementById('resultID').classList.add('resultRoll');
    document.getElementById('newID').classList.add('newRoll');

    
    })
    //messing around
setTimeout(() => {
  console.log('use this maybe')
},2000)

//messing around
const ppl = ['ry', 'an','lo','fi']
function Test() {
setInterval(() => {
  for(let i = 0; i < ppl.length; i++){
    console.log(ppl[i]+ "iii")
  }
  
},2000)
}

Test();

powerBtn.addEventListener('click', () => {
    let index = getRand(0, powerNumbers.length-1);
    result.innerText = powerNumbers[index];

    document.getElementById('questionID').classList.add('questionGone');
    document.getElementById('newID').classList.add('newRoll');
})


reBtn.addEventListener('click', () => {
    document.location.reload();
});

function Reload() {
    document.location.reload();
}

// genBtn.addEventListener('click', () => {
// let index = getRand(0, numbers.length-1);
// result.innerText = numbers[index];
// newNumb.innerText = numbers[index];
// document.getElementById('resultID').classList.toggle('resultRoll');

// })



// function rollBall () {
//     document.getElementById('resultID').classList.add('resultRoll');
// };