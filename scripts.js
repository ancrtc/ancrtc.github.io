let dehiationScale = 1;
window.onload = () => window.scrollTo(0, 0);

const rootElement = document.documentElement;
const numerofChiefCommercial = getComputedStyle(rootElement).getPropertyValue('--numberof-commercial-chief');

const achorSDRNumber =  document.getElementById('commercial-chief-number-element');
achorSDRNumber.textContent = numerofChiefCommercial.replace('\'', '').replace('\'', '');
const sdrNumber = achorSDRNumber.textContent
  .replace('(', '')
  .replace(')', '')
  .replace(' ', '')
  .replace(' ', '')
  .replace(' ', '');

achorSDRNumber.setAttribute("href", `https://api.whatsapp.com/send?phone=55${sdrNumber}&text=Ol%C3%A1!%20Gostaria%20de%20investir%20na%20tecnologia%20do%20meu%20neg%C3%B3cio!`)

document.getElementById("main-diag-free").addEventListener("click"
  , () => window.scrollBy({
    top: (1200 - window.scrollY) * dehiationScale,   // change this to how many pixels you want
    left: 0,
    behavior: "smooth" // makes it animate
  })
);

document.getElementById("main-about-us").addEventListener("click"
  , () => window.scrollBy({
    top: (2085 - window.scrollY) * dehiationScale,   // change this to how many pixels you want
    left: 0,
    behavior: "smooth" // makes it animate
  })
);

document.getElementById("second-diag-free").addEventListener("click"
  , () => window.scrollBy({
    top: (1150 - window.scrollY) * dehiationScale,   // change this to how many pixels you want
    left: 0,
    behavior: "smooth" // makes it animate
  })
);

function fitToScreen(targetWidth = 1536, targetHeight = 960) {
  const wrapper = document.documentElement;

  const scaleX = window.innerWidth / targetWidth;
  const scaleY = window.innerHeight / targetHeight;
  dehiationScale = Math.max(scaleX, scaleY);

  // Apply zoom (works in Chrome/Edge/IE)
  wrapper.style.zoom = dehiationScale;

  // Fallback for Firefox (which ignores zoom)
  if (getComputedStyle(wrapper).zoom === "normal") {
    wrapper.style.transformOrigin = "0 0";
    wrapper.style.transform = `scale(${scale})`;
    wrapper.style.width = `${100 / scale}%`;
    wrapper.style.height = `${100 / scale}%`;
  }
}

// run once at load
fitToScreen();

// update when window is resized
window.addEventListener("resize", () => fitToScreen());

var hasTouchScreen = false;

if ("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0) {
    hasTouchScreen = true;
} else if ("msMaxTouchPoints" in navigator && navigator.msMaxTouchPoints > 0) {
    hasTouchScreen = true;
} else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)" && !!mQ.matches) {
        hasTouchScreen = true;
    } else if ('orientation' in window) {
        hasTouchScreen = true; // deprecated, but good fallback
    } 
    // else {
    //     // Only as a last resort, fall back to user agent sniffing
    //     var UA = navigator.userAgent;
    //     hasTouchScreen = (
    //         "/\b(BlackBerry|webOS|iPhone|IEMobile)\b/i".test(UA) ||
    //         "/\b(Android|Windows Phone|iPad|iPod)\b/i".test(UA)
    //     );
    // }
}
if (hasTouchScreen) {
  document.getElementById('scene').setAttribute("style", "display: none");
  document.getElementById('no-android').setAttribute("style", "");  
}