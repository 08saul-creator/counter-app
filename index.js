let paraEl = document.getElementById('para-el')
let save = document.getElementById('save')
let increment = document.getElementById('increment')
let countEl = document.getElementById('count-el')

let count = 0
save.addEventListener('click',function(){
    let countString = count + " - "
   paraEl.innerText += countString
    countEl.innerHTML = 0
    count = 0
    
})

increment.addEventListener('click',function(){

 count += 1
 
 countEl.innerText = count


})


paraEl.innerHTML = "<p>ENTER THE NUMBERS OF PEOPLE'S :</p>"