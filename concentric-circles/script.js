const circlesGroup = document.querySelector('.container')
console.log(circlesGroup);


for(let i =0; i< 20; i++){
    const newCircle = document.createElement('div')    
    newCircle.classList.add('circle')
    circlesGroup.appendChild(newCircle)
}

const listOfCircles = document.querySelectorAll('.circle')
let styleInner = ''
// console.log(circles);
const style = document.createElement('style')

listOfCircles.forEach((circle,index) => {

    circle.style.borderWidth = (index+1) * 10 + 'px'
    circle.style.animationName = `rotate-${index}`
    circle.style.zIndex = -index

    const deg = (index+1) * 360    
    // style.innerHTML = 
    //     `border: ${(index+1)*10}px dashed black;
    //     border-bottom-color: #fff;
    //     border-right-color: #fff;
    //     animation: rotate-${index} 4s ease-in-out infinite;

    //     @keyframes rotate-${index}{
    //         to{
    //             transform: translate(-50%,-50%) rotate(${(index+1)*360}deg);
    //         }
    //     }`
    styleInner += `
        @keyframes rotate-${index}{
            to{
                transform: translate(-50%,-50%) rotate(${deg}deg);
            }
        }
        `;

    })
    style.innerHTML = styleInner


document.body.appendChild(style)   