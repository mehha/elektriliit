import '@wordpress/edit-post';
import domReady from '@wordpress/dom-ready';
import { unregisterBlockStyle, registerBlockStyle, registerBlockVariation } from '@wordpress/blocks';

domReady(() => {
  unregisterBlockStyle('core/button', 'outline');

  registerBlockStyle('core/button', {
    name: 'outline',
    label: 'Outline',
  });

  registerBlockStyle('core/button', {
    name: 'arrow',
    label: 'Arrow',
  });

  registerBlockVariation('core/social-link', {
    name: 'elektriliit',
    title: 'Elektriliit',
    attributes: { service: 'elektriliit' },
  });
});
