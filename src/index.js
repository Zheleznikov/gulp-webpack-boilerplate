
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
// require('intersection-observer');
import IntersectionObserver from 'intersection-observer';

// import yall from 'yall-js';
// document.addEventListener("DOMContentLoaded", function() {
//   yall({

//   })
// });

import Test from './js/components/Test';
import SecondTest from './js/components/SecondTest';


// import { lazyLoading, lazyLoading2 } from './js/components/lazyLoading';

// document.addEventListener("DOMContentLoaded", lazyLoading);

new Test();
new SecondTest();
console.log('it works');

const numbers = [2, 3, 4];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);



// document.addEventListener("DOMContentLoaded", function() {
//   var lazyloadImages;

//   if ("IntersectionObserver" in window) {
//     lazyloadImages = document.querySelectorAll(".lazy");
//     var imageObserver = new IntersectionObserver(function(entries, observer) {
//       entries.forEach(function(entry) {
//         if (entry.isIntersecting) {
//           var image = entry.target;
//           image.classList.remove("lazy");
//           imageObserver.unobserve(image);
//         }
//       });
//     });

//     lazyloadImages.forEach(function(image) {
//       imageObserver.observe(image);
//     });
//   } else {
//     var lazyloadThrottleTimeout;
//     lazyloadImages = document.querySelectorAll(".lazy");

//     function lazyload() {
//       if (lazyloadThrottleTimeout) {
//         clearTimeout(lazyloadThrottleTimeout);
//       }

//       lazyloadThrottleTimeout = setTimeout(function() {
//         var scrollTop = window.pageYOffset;
//         lazyloadImages.forEach(function(img) {
//           if (img.offsetTop < (window.innerHeight + scrollTop)) {
//             img.src = img.dataset.src;
//             img.classList.remove('lazy');
//           }
//         });
//         if (lazyloadImages.length == 0) {
//           document.removeEventListener("scroll", lazyload);
//           window.removeEventListener("resize", lazyload);
//           window.removeEventListener("orientationChange", lazyload);
//         }
//       }, 20);
//     }

//     document.addEventListener("scroll", lazyload);
//     window.addEventListener("resize", lazyload);
//     window.addEventListener("orientationChange", lazyload);
//   }
// })