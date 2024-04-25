let p1=prompt('Digite seu Nome');
let p2=prompt('Digite seu Poder');
let p3=prompt('Digite o nome de um Vilão');
let p4=prompt('Digite um Lugar');

let msg=document.getElementById('msg');

msg.innerHTML=`olá ${p1}, o seu poder é ${p2}, e voce vai enfrentear o ${p3}, no ${p4}`
