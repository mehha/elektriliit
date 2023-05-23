import {WpCurrentClasses} from "../utilities/contsts";

export function handleMenu() {
  // Mobile menu
  const handleMobileMenu = () => {
    const burger = document.getElementById('burger')
    const burger2 = document.getElementById('burger-2')
    const mobileMenu = document.getElementById('mobile-menu')

    if (!burger || !burger2 || !mobileMenu) {
      return
    }

    burger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', true)
        mobileMenu.classList.remove('hidden')
      }
    })

    burger2.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        burger.setAttribute('aria-expanded', false)
        mobileMenu.classList.add('hidden')
      }
    })
  }
  handleMobileMenu()

  // Expanders
  const handleExpanders = () => {
    const expanders = document.querySelectorAll('.expander')

    if (!expanders.length) {
      return
    }

    Array.from(expanders).map(expander => {
      let parent = expander.parentElement;

      if (parent.classList.contains('menu-item-has-children') && parent.querySelector('a')) {
        parent.querySelector('a').setAttribute('aria-expanded', false);
        parent.querySelector('a').setAttribute('aria-haspopup', true);
      }

      if (WpCurrentClasses.some(ai => Array.from(parent.classList).includes(ai))) {
        parent.querySelector('a').setAttribute('aria-expanded', true);
      }

      expander.addEventListener('click', function () {
        if (WpCurrentClasses.some(ai => Array.from(parent.classList).includes(ai))) {
          for (let i = 0; i < WpCurrentClasses.length; i++) {
            parent.classList.remove(WpCurrentClasses[i]);
            parent.querySelector('a').setAttribute('aria-expanded', false);
          }
        } else {
          parent.classList.toggle('nav-item-open');

          if (parent.classList.contains('nav-item-open'))
            parent.querySelector('a').setAttribute('aria-expanded', true);
          else
            parent.querySelector('a').setAttribute('aria-expanded', false);
        }
      })
    })
  }
  handleExpanders()
}
