





//dom documents for home team
let count1l = document.getElementById('count-1')
let count2l = document.getElementById('count-2')
let count3l = document.getElementById('count-3')
//score home button
let scoreHome = document.getElementById('score-home')
let count = 0



count1l.addEventListener("click",function(){
    count +=1
   scoreHome.textContent = count
})

count2l.addEventListener("click",function(){
    count +=2
    scoreHome.textContent = count
})

count3l.addEventListener("click",function(){
    count +=3
    scoreHome.textContent = count
})



// dom for visitor team
let counterPlus1 = document.getElementById('counter-plus1')
let counterPlus2 = document.getElementById('counter-plus2')
let counterPlus3 = document.getElementById('counter-plus3')
let scoreGuest =document.getElementById('score-guest')


let mycount = 0




counterPlus1.addEventListener("click",function(){
    mycount +=1
    scoreGuest.textContent = mycount
   
})
counterPlus2.addEventListener("click",function(){
    mycount +=2
   scoreGuest.textContent = mycount
})

counterPlus3.addEventListener("click",function(){
   mycount +=3
   scoreGuest.textContent = mycount
})




