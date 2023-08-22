// const buttons=document.querySelector("header")
// const body= document.querySelector("body")

// buttons.addEventListener("click",function(e)
// {

//     if(e.target.id == 'blue')
//     {
//         body.style.backgroundColor = e.target.id;
//     }
//     else if(e.target.id == 'red')
//     {
//         body.style.backgroundColor = e.target.id;
//     }
//     else if(e.target.id == 'green')
//     {
//         body.style.backgroundColor = e.target.id;
//     }
//     else if(e.target.id == 'orange')
//     {
//         body.style.backgroundColor = e.target.id;
//     }
// })

const buttons=document.querySelectorAll(".colors-box")
const body= document.querySelector("body")

buttons.forEach(function(button)
{
    button.addEventListener('click',function(e)
    {
        if(e.target.id == 'blue')
            {
                body.style.backgroundColor = e.target.id;
            }
            else if(e.target.id == 'red')
            {
                body.style.backgroundColor = e.target.id;
            }
            else if(e.target.id == 'green')
            {
                body.style.backgroundColor = e.target.id;
            }
            else if(e.target.id == 'orange')
            {
                body.style.backgroundColor = e.target.id;
            }
    })
})

