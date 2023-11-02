let height=document.querySelector('#height')
let weight=document.querySelector('#weight')
let submit=document.querySelector('#calculate')
let BMI=document.querySelector('#bmi')
let Status=document.querySelector('#status')
 submit.addEventListener('click',calculateBMI)
 function calculateBMI(){
     let heightValue=(height.value)/100;
     let weightValue=weight.value;
     let bmiValue=(weightValue)/(heightValue*heightValue);
     let resultValue;
     if(bmiValue<=18.4){
         resultValue="UnderWeight"
     }
     else if(bmiValue>=18.5 && bmiValue<=24.9){
         resultValue="Normal Weight"
     }
     else if(bmiValue>=25 && bmiValue<=29.9){
         resultValue="OverWeight"
     }
     else if(bmiValue>=30){
         resultValue="Obese"
     }
     BMI.textContent=bmiValue
     Status.textContent=resultValue
 }