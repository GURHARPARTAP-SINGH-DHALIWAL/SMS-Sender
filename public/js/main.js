const form=document.getElementById('form');
const number=document.getElementById('number');
const message=document.getElementById('message');
const response=document.querySelector(".result");


form.addEventListener('submit',(e)=>{
    response.textContent="";
    e.preventDefault();
    const numberV=number.value.replace(/\D/g,'');
    const messageV=message.value;

    fetch('/',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({
            number:numberV,
            message:messageV
        
        })
    }).then(async (res)=>{
        const data=await res.json();
        response.textContent=data.message;

        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
});