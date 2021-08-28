// UI
const formel = document.getElementById('form');
const inputel = document.getElementById('input');
const talkone = document.getElementById('talkone');

const updates = JSON.parse(localStorage.getItem('update'));
// console.log(updates);

updates.forEach((update)=>{
    // console.log(update);
    secret(update);

});


//Event Listener
formel.addEventListener('submit',(e)=>{
    // console.log("I am working");

    secret();

    e.preventDefault();
});


//secret function
function secret(update){
    // console.log("I am secret");

    let inputvalue = inputel.value;
    // console.log(inputvalue);

    if(update){
        inputvalue = update;
    }

   if(inputvalue){
    const li = document.createElement('li');

    li.appendChild(document.createTextNode(inputvalue));
    

    const link = document.createElement('i');
    link.className = "fas fa-clock fa-spin";
    // console.log(link);

    li.appendChild(link);

    const span = document.createElement('span');
    // console.log(span);

    li.appendChild(span);

    // console.log(li);

    talkone.appendChild(li);

    inputel.value = '';

    updatelocalstorage(inputvalue);


    //remove by right click 
    li.addEventListener('contextmenu',(e)=>{
        // li.remove();

        
        let seconds = 0;
        function removeall(){
            // console.log('hey');

            seconds += 1;
            // console.log(seconds);
            
            if(seconds < 10){
                span.innerText = "0"+seconds;
            }else{
                span.innerText = seconds;
            }

            if(seconds == 50){
                // console.log("good");
                seconds = 0;
                li.remove();
                updatelocalstorage();
                
                if(time !== null){
                    clearInterval(time);
                }
            }
        }

        let time = setInterval(removeall,100);
        e.preventDefault();
    });




   }else{

        window.alert('Please Write Something');

   }
}


//update localStorage
function updatelocalstorage(inputvalue){
    // console.log("I am working");

    const lis = document.querySelectorAll('li');
    // console.log(lis);

    let arr = [];
    lis.forEach((li)=>{
        // console.log(li);
        // console.log(li.innerText);
        arr.push(li.innerText);
        
    });


    localStorage.setItem('update',JSON.stringify(arr));


    // console.log(arr);
   
}


//top words
const label = document.getElementById('secret');

// console.log(label);
// console.log(label.textContent);
// console.log(label.textContent.split(""));

label.innerHTML = label.textContent.split("").map((letter,index)=>`<span style="transition-delay:${index*50}ms">${letter}</span>`).join('');
