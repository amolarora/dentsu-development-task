let count = 0;
let tittle = "";
let message = "";

fetch('https://cdn.d4.digital/json/d4-demo-company/F7F2Z7/FXDJ24/scripts/datafile.js')
    .then(data => data.json())
    .then(data => {
        count = data.items[0].amount.value;
        tittle = data.items[0].headline_1.value;
        message = data.items[0].headline_2.value;
        
        //document.getElementById("count").innerHTML = count;
        document.getElementById("tittle").innerHTML = tittle;
        document.getElementById("message").innerHTML = message;
    });

gsap.from('#tittle',{duration: 1, opacity: 0, ease: 'slow'})
gsap.from('.topbar',{duration: 1, y: '-100%', delay: 1})
gsap.to('.banner',{duration: 3, y: '100%', delay: 1, ease: 'slow'})

gsap.from('#message',{duration: 1, opacity: 0, delay: 4, ease: 'slow'})
gsap.to('#message',{duration: 1, y: '-170%', ease: 'slow'})

gsap.from('#amount',{duration: 2, opacity: 0, delay: 5, ease: 'slow'})
gsap.to('#amount',{duration: 1, y: '-325%', delay: 1, ease: 'slow'})

let num = 1040346;
gsap.to("#count", {innerText: num , duration: 2, delay: 6, snap:"innerText"})
