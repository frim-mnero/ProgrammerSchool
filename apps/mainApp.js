const questBtns = document.querySelectorAll(".imgArrowBottom");
const imgArrowTop = document.querySelectorAll(".imgArrowTop");
const questBtnBtn = document.querySelectorAll(".questBtn");
const questBtns2 = document.querySelectorAll(".questBtn2");
const questItem = document.querySelectorAll(".quest-item");
const quesItemDescr2 = document.querySelectorAll('.quest-item-descr2');

console.log(questBtns);

for(let i = 0;i<=questBtns.length;i++){
    questBtns[i].addEventListener('click',function(){
        questItem[i].classList.add('quest-item-more');
        quesItemDescr2[i].classList.remove('hiddener');
        questBtnBtn[i].classList.add('hiddener');
        questBtns2[i].classList.remove('hiddener');
    });
    
}
for(let i = 0;i>imgArrowTop.length;i++){
    imgArrowTop[i].addEventListener('click',function(){
        console.log('click');
    });
}
