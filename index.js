let imgBtn = document.getElementById('img')

let container = document.getElementById('container')

let list = document.getElementById('list')

let imgBtnI = document.getElementById('imgI')

imgBtn.onclick = function(){
    container.style.display = 'block'
    imgBtn.style.display ='none'
    list.style.display ='block'
    imgBtnI.style.display ='block'
    imgBtnI.classList.add('imgBtnI')
}

imgBtnI.onclick = function(){
   imgBtn.style.display ='block'
   imgBtnI.style.display ='none'
   imgBtn.classList.add('imgBtn')
   list.style.display ='none'
}

