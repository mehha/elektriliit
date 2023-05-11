import { Fancybox } from '@fancyapps/ui';

export function handleFancybox() {
  // Single
  const singleFancyItems = ['a[href$=".jpg"]:not(.no-fancy)','a[href$=".jpeg"]:not(.no-fancy)','a[href$=".png"]:not(.no-fancy)', 'a[href$=".webp"]:not(.no-fancy)', 'a[href$=".svg"]:not(.no-fancy)', '.fancyimage', '.fancyvideo'];

  if (!singleFancyItems.length) {
    return
  }

  singleFancyItems.forEach(function (value) {
    Fancybox.bind(value, {
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });
  });

  // Gallery
  const galleryFancyItems = ['.gallery-item a:not(.no-fancy)'];

  if (!galleryFancyItems.length) {
    return
  }

  galleryFancyItems.forEach(function (value) {
    Fancybox.bind(value, {
      groupAll: true,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },
    });
  });
}
