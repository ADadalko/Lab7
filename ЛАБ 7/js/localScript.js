
$('header').load( "../file.txt" ).insertBefore('form');
$("p").text(function(index, text){
    return (text + "СРАБОТАЛ");
});
$("p").append("<button id='new'>Нажмите, если информация была считана неправильно</button>").before("p");

$("#new").bind("click",function(){
    alert("Информация была считана неправильно");
});
