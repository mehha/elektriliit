<?php

require_once 'event-acf.php';

function create_post_type(): void
{
    register_post_type('events',
        array(
            'labels' => array(
                'name' => __('Events', 'sage'),
                'singular_name' => __('Event', 'sage'),
                'menu_name'           => __( 'Events', 'sage'),
                'parent_item_colon'   => __( 'Parent event', 'sage'),
                'all_items'           => __( 'All events', 'sage'),
                'view_item'           => __( 'View event', 'sage'),
                'add_new_item'        => __( 'Add New event', 'sage'),
                'add_new'             => __( 'Add New', 'sage'),
                'edit_item'           => __( 'Edit event', 'sage'),
                'update_item'         => __( 'Update event', 'sage'),
                'search_items'        => __( 'Search event', 'sage'),
                'not_found'           => __( 'Not Found', 'sage'),
                'not_found_in_trash'  => __( 'Not found in Trash', 'sage')
            ),
            'public' => true,
            'has_archive' => false,
            'rewrite' => array('slug' => __('events', 'sage')),
            'menu_icon' => 'dashicons-admin-site-alt',
            'show_in_rest' => false,
            'show_ui' => true,
            'hierarchical' => false,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'can_export' => true,
            'supports' => array('title', 'editor', 'author', 'thumbnail', 'excerpt'),
        )
    );
}

add_action('init', 'create_post_type');

//Add columns to admin
add_filter('manage_events_posts_columns', function ($columns) {
    return array_merge($columns, array(
        'begin_date_time' => __('Begin date and time'),
    ));
});

//Add data to column
add_action('manage_events_posts_custom_column', function ($column_name, $post_id) {
    if ('begin_date_time' == $column_name) {
        echo get_field('begin_date_time', $post_id);
    }
}, 20, 2);

/*
 * Modify menu active menu classes for events
 */
add_filter('nav_menu_css_class', function($classes, $item, $args, $depth){

    if (is_singular(array('events'))) {
//        100 is page id of Koolitused page (archive)
        if(342 == $item->object_id){
            $classes[] = 'current-menu-item';
        }
    }

    return $classes;

}, 10, 4);
