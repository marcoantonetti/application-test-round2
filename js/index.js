// Logic for carousel slider

const slides = document.querySelectorAll('.ul-carousel-slide')

const buttons = document.querySelectorAll('.button-carousel')

const activate = (button, index, slide) => {


    
    
}

console.log(slides)
console.log(buttons)


slides.forEach( (slide, index) => {

    buttons[index].addEventListener('click', (button) => {
 
       // Eliminate active from active button    
       const activeButton = document.querySelectorAll('.button-carousel.active')
       activeButton.forEach((activeButton) => activeButton.classList.toggle('active'))

       // Add active to current clicked button
       buttons[index].classList.toggle('active') 

       // Eliminate active from active slide
       const activeSlide = document.querySelectorAll('.ul-carousel-slide.active')
       activeSlide.forEach((activeButton) => activeButton.classList.toggle('active'))

       // Display active slide
       slide.classList.toggle('active')


          }
       )   
    }



)
