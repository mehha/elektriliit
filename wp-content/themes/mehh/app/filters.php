<?php

/**
 * Theme filters.
 */

namespace App;

/**
 * Add "… Continued" to the excerpt.
 *
 * @return string
 */
add_filter('excerpt_more', function () {
    return sprintf(' &hellip; <a href="%s">%s</a>', get_permalink(), __('Continued', 'sage'));
});

//Nav extra class to li
add_filter('nav_menu_css_class', function ($classes, $item, $args) {
    if ( 'primary_navigation' === $args->theme_location || 'top_navigation' === $args->theme_location || 'top_protected_navigation' === $args->theme_location ) {
        $classes[] = "nav-item";
    }

    return $classes;
}, 1, 3);

//Nav extra class to a
add_filter('nav_menu_link_attributes', function ($classes, $item, $args) {
    if (isset($args->anchor_class)) {
        $classes['class'] = $args->anchor_class;
    }
    return $classes;
}, 1, 3);

/**
 * Add custom mime types support
 *
 * */
add_filter('upload_mimes', function ($mimes) {
    $mimes['svg']   = 'image/svg+xml';
    $mimes['htm']   = 'text/html';
    $mimes['xhtml'] = 'application/xhtml+xml';
    $mimes['zip']   = 'application/zip';
    $mimes['eps']   = 'image/x-eps';
    return $mimes;
});

//Add expander
add_filter('wp_nav_menu_items', function ($items, $args) {
    // Check if it's the desired menu location
    if ($args->theme_location == 'primary_navigation') {
        // Get the menu items
        $menu_items = wp_get_nav_menu_items($args->menu);

        // Find the menu item with children
        $parent_item = null;
        foreach ($menu_items as $menu_item) {
            if (in_array('menu-item-has-children', $menu_item->classes)) {
                $parent_item = $menu_item;
                break;
            }
        }

        // Add the extra expander button as a child of the parent item
        if ($parent_item) {
            $extra_button = '<a href="#" class="extra-expander">Expand All</a>';
            $items = str_replace('</li>', $extra_button . '</li>', $items);
        }
    }
    return $items;
}, 10, 2);
