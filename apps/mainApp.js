const btnMore = document.querySelectorAll(".questBtn");
const questItem = document.querySelectorAll(".quest-item");
const questItemDescr2 = document.querySelectorAll(".quest-item-descr2");

const imgArrowBottom = document.querySelectorAll(".imgArrowBottom");
const krestBtn = document.querySelectorAll(".krestBtn");

let counter=1;

for(let i = 0;i<=btnMore.length;i++){
    btnMore[i].onclick=()=>{
        counter+=1;
        if(counter%2===0){
            questItem[i].classList.add('quest-item-more');
            questItemDescr2[i].classList.remove('hiddener');

            imgArrowBottom[i].classList.add('hiddener');
            krestBtn[i].classList.remove('hiddener');
        }
        else{
            questItem[i].classList.remove('quest-item-more');
            questItemDescr2[i].classList.add('hiddener');

            imgArrowBottom[i].classList.remove('hiddener');
            krestBtn[i].classList.add('hiddener');
        }
    }
}
