
let count = 0;
alert('Добро пожаловать на нашу Викторину');

let question1 = prompt('В каком году человек первый раз полетел в космос?');
if (question1==1961){
    alert('Correct answer');
    count+=1;
} else if(question1!=1961){
    alert('Wrong answer')};


let question2 = prompt('Какое простое наименьшее число?');
    if (question2==1){
        alert('Correct answer');
        count+=1;
    } else if(question2!=1){
        alert('Wrong answer')};    


let question3 = prompt('Какая скорость звука в м/c?');
if (question3<400 && question3>300){
  alert('Correct answer');
            count+=1;
        } else {
            alert('Wrong answer')};  
            
let question4 = prompt('Каково произведение чисел от 0-10');
if (question4==0){
  alert('Correct answer');
    count+=1;
    } else {
     alert('Wrong answer')};           
 
     

 
            

alert(`Количество правильных ответов ${count} из 4 возможных` );            













    





    