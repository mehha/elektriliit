// Bootstrap (importing BS scripts individually)
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/modal';
// import 'bootstrap/js/dist/scrollspy';
import 'bootstrap/js/dist/tab';

// Imports
import {handleFancybox} from "./components/fancybox";
import {handleMenu} from "./components/menu";
import {handleTables} from "./components/tables";
import {handleCheckScroll} from "./utilities/check-scroll";
import {handleForms} from "./components/forms";
import {handleSearch} from "./components/search";
import {handleCookieBanner} from "./components/cookie_banner";
import {handleSwiper} from "./components/swiper";
import {handleCountUp} from "./components/countup";
import {handleModal} from "./components/modal";

const mountedFns = [
  handleFancybox,
  handleMenu,
  handleTables,
  handleCheckScroll,
  handleForms,
  handleSearch,
  handleCookieBanner,
  handleSwiper,
  handleCountUp,
  handleModal,
]

// Run fn-s
for (const demountFn of mountedFns) {
  typeof demountFn === 'function' && demountFn()
}
