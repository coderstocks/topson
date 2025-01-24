// slick
$('.review').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
  speed: 200,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1
});
// slick
$('.people').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 200,
  autoplay: true,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// slick
$('.reels').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 200,
  autoplay: false,
  prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="bi bi-arrow-left"></i></button>',
  nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="bi bi-arrow-right"></i></button>',
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// JavaScript for Cursor Effect
const cursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});
// aos
AOS.init(3000);


const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".brand-carousel");
  const items = Array.from(carousel.children);

  // Calculate the total width of the items
  let totalWidth = 0;
  items.forEach((item) => {
    totalWidth += item.offsetWidth + 50; // Including margin
  });

  // Set the width of the carousel to the total width
  carousel.style.width = `${totalWidth}px`;

  // Duplicate items to create a seamless scroll effect
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });
});
