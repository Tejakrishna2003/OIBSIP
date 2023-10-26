var buttons=document.querySelectorAll('input[type="button"]');
var answer=document.querySelectorById('result');

for (var i= 0; i<buttons.length; i++){
    button[i].addEventListener('click', function(cal){
        answer.value = cal.target.value;

    });
}