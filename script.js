"use strict";

let butInp = document.querySelector('.input__button')
let inpMain = document.querySelector('.input__inp')
let inpDate = document.querySelector('.input__date')
let list = document.querySelector('.list_parent')
let wrapDiv = document.querySelector('.wrapper')
let butTheme = document.querySelector('.butDarkLigth')

butTheme.addEventListener('click', function(){
    wrapDiv.classList.toggle('darkTheme')
    list.classList.toggle('list_parentDark')
    butInp.classList.toggle('input__buttonDark')
})



let nowDate = new Date()
let check = `${nowDate.getDate()}.${zeroBeforeMonth(nowDate.getMonth() + 1)}`
function zeroBeforeMonth(month) {
    if (month >= 0 && month <= 9) {
           return '0' + month
       } else {
           return month
       }
}    

inpMain.addEventListener('focus',function(){
    this.value = ''
})

inpDate.addEventListener('focus',function(){
    this.value = ''
})

butInp.addEventListener('click', function(){
    let divTaskContainer = document.createElement('div')
    divTaskContainer.classList.add('list_container')
    list.appendChild(divTaskContainer)

    if (inpMain.value ==='Введите задачу'){
        inpMain.value = ''
    }
    if (inpDate.value ==='Дата в формате 31.12'){
        inpDate.value = ''
    }

    let newTask = document.createElement('div')
        if (inpMain.value.length == 0){
            alert('Пожалуйста, введите корректую задачу, поле не может быть пустым (:')
            return 'error'
        }else if (inpDate.value.length == 0){
            inpDate.value = ''
            newTask.innerHTML = inpMain.value 
            divTaskContainer.appendChild(newTask)
        } else {
            newTask.innerHTML = `(DeadLine: ${inpDate.value}) ${inpMain.value}`
            divTaskContainer.appendChild(newTask)
        }



    if(check == inpDate.value) {
        alert(`Сегодня крайник срок задачи "${inpMain.value}"`)
    }

    inpMain.value = ''
    inpDate.value = ''

    let butChildListDone = document.createElement('button')
    butChildListDone.innerHTML = '<img src="img/titleImg.png">'
    butChildListDone.classList.add('butDone')
    divTaskContainer.appendChild(butChildListDone)

    butChildListDone.addEventListener('click', function(){
        newTask.classList.add('butDoneAfterClick')
    })

    let butChildListDelete = document.createElement('button')
    butChildListDelete.innerHTML = '<img src="img/cross.png">'
    butChildListDelete.classList.add('butDelete')
    divTaskContainer.appendChild(butChildListDelete)

    butChildListDelete.addEventListener('click', function(){
        divTaskContainer.parentNode.removeChild(divTaskContainer)
    })

})

