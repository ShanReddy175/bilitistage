
const productCanvas = document.getElementById('product-360deg-canvas'),
      productCanvasContext = productCanvas.getContext('2d'),
      productName = $('body').attr('data-product'),
      productDefaultColor = $('body').attr('data-product-defaultColor');
let selectedColor = productDefaultColor;
let rangeValue = document.getElementById('myRange');

const frameCount = 120,
      currentFrame = (index,color=selectedColor) => {
        return `images/product/${productName}/${color}/${color}-0${index.toString().padStart(4, '0')}.png`
      };

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i,selectedColor);
  }
};      

const img = new Image();
img.src = currentFrame(22);
productCanvas.width = 2000;
productCanvas.height = 1000;

img.onload = () => {
    productCanvasContext.drawImage(img,0,0)
}



const updateImage = (index) => {
    img.src = currentFrame(index,selectedColor);
    productCanvasContext.drawImage(img,0,0);
};

/* Color change product */

const colorLi = document.querySelectorAll('.product-color-ul li');

colorLi.forEach((colorLi) => {
  colorLi.addEventListener('click',() => {
    if(colorLi.classList.contains('active')){
      return ;
    }

    $('.product-color-ul li').removeClass('active');
    colorLi.classList.add('active');

    selectedColor = colorLi.getAttribute('data-color');

    productCanvasContext.clearRect(0,0,productCanvas.width,productCanvas.height);
    img.src = currentFrame(22,selectedColor);
    document.getElementById('myRange').value = 22;
  })

  

 rangeValue.addEventListener('input',()=>{
    requestAnimationFrame(()=>{
      productCanvasContext.clearRect(0,0,productCanvas.width,productCanvas.height);
      updateImage(parseInt(rangeValue.value))
      preloadImages()
    })
  })
})
