<?php

/**
 * Theme setup.
 */

namespace App;

use function Roots\asset;

/**
 * Register image thumbnails
 *
 */


add_image_size('top_image', 1400, 340,  array('center', 'center'));
add_image_size('square', 400, 400,  array('center', 'center'));

/**
 * Register the theme assets.
 *
 * @return void
 */
add_action('wp_enqueue_scripts', function () {
    wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), [], null, true);
    wp_enqueue_script('sage/app.js', asset('scripts/app.js')->uri(), ['sage/vendor.js'], null, true);

    wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');

    if (is_single() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }

    wp_enqueue_style('sage/app.css', asset('styles/app.css')->uri(), false, null);
}, 100);

/**
 * Register the theme assets with the block editor.
 *
 * @return void
 */
add_action('enqueue_block_editor_assets', function () {
    if ($manifest = asset('scripts/manifest.asset.php')->load()) {
        wp_enqueue_script('sage/vendor.js', asset('scripts/vendor.js')->uri(), ...array_values($manifest));
        wp_enqueue_script('sage/editor.js', asset('scripts/editor.js')->uri(), ['sage/vendor.js'], null, true);

        wp_add_inline_script('sage/vendor.js', asset('scripts/manifest.js')->contents(), 'before');
    }

    wp_enqueue_style('sage/editor.css', asset('styles/editor.css')->uri(), false, null);
}, 100);

/**
 * Register the initial theme setup.
 *
 * @return void
 */
add_action('after_setup_theme', function () {
    /**
     * Enable features from the Soil plugin if activated.
     * @link https://roots.io/plugins/soil/
     */
    add_theme_support('soil', [
        'clean-up',
        'nav-walker',
        'nice-search',
        'relative-urls'
    ]);

    /**
     * Disable full-site editing support.
     *
     * @link https://wptavern.com/gutenberg-10-5-embeds-pdfs-adds-verse-block-color-options-and-introduces-new-patterns
     */
    remove_theme_support('block-templates');

    /**
     * Register the navigation menus.
     * @link https://developer.wordpress.org/reference/functions/register_nav_menus/
     */
    register_nav_menus([
        'primary_navigation' => __('Primary Navigation', 'sage'),
        'top_navigation' => __('Top Navigation', 'sage'),
    ]);

    /**
     * Register the editor color palette.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-color-palettes
     */
    add_theme_support('editor-color-palette', []);

    /**
     * Register the editor color gradient presets.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-gradient-presets
     */
    add_theme_support('editor-gradient-presets', []);

    /**
     * Register the editor font sizes.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#block-font-sizes
     */
    add_theme_support('editor-font-sizes', []);

    /**
     * Register relative length units in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#support-custom-units
     */
    add_theme_support('custom-units');

    /**
     * Enable support for custom line heights in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#supporting-custom-line-heights
     */
    add_theme_support('custom-line-height');

    /**
     * Enable support for custom block spacing control in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#spacing-control
     */
    add_theme_support('custom-spacing');

    /**
     * Disable custom colors in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-colors-in-block-color-palettes
     */
    add_theme_support('disable-custom-colors');

    /**
     * Disable custom color gradients in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-gradients
     */
    add_theme_support('disable-custom-gradients');

    /**
     * Disable custom font sizes in the editor.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-custom-font-sizes
     */
    add_theme_support('disable-custom-font-sizes');

    /**
     * Disable the default block patterns.
     * @link https://developer.wordpress.org/block-editor/developers/themes/theme-support/#disabling-the-default-block-patterns
     */
    remove_theme_support('core-block-patterns');

    /**
     * Enable plugins to manage the document title.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#title-tag
     */
    add_theme_support('title-tag');

    /**
     * Enable post thumbnail support.
     * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
     */
    add_theme_support('post-thumbnails');

    /**
     * Enable wide alignment support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#wide-alignment
     */
    add_theme_support('align-wide');

    /**
     * Enable responsive embed support.
     * @link https://wordpress.org/gutenberg/handbook/designers-developers/developers/themes/theme-support/#responsive-embedded-content
     */
    add_theme_support('responsive-embeds');

    /**
     * Enable HTML5 markup support.
     * @link https://developer.wordpress.org/reference/functions/add_theme_support/#html5
     */
    add_theme_support('html5', [
        'caption',
        'comment-form',
        'comment-list',
        'gallery',
        'search-form',
        'script',
        'style'
    ]);

    /**
     * Enable selective refresh for widgets in customizer.
     * @link https://developer.wordpress.org/themes/advanced-topics/customizer-api/#theme-support-in-sidebars
     */
    add_theme_support('customize-selective-refresh-widgets');
}, 20);

//Add scripts to head
add_action('wp_head', function () { ?>
    <link rel="apple-touch-icon" sizes="180x180" href="<?php print get_stylesheet_directory_uri(); ?>/public/images/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php print get_stylesheet_directory_uri(); ?>/public/images/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php print get_stylesheet_directory_uri(); ?>/public/images/favicon-16x16.png">
    <link rel="manifest" href="<?php print get_stylesheet_directory_uri(); ?>/public/images/site.webmanifest">
    <meta name="msapplication-TileColor" content="#44749D">
    <meta name="theme-color" content="#ffffff">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&family=Signika+Negative:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <?php
}, 100);

//Admin styles
add_action('login_head', function(){

    echo '<style>
    #login h1 a {
            background: url('.get_stylesheet_directory_uri().'/public/images/logo.png) no-repeat center top;
            background-size: 158px auto;
            width: 158px;
            height: 78px;
            margin: 0 auto 20px;
        }
         body { background: #fff; }
         .button-primary {
            background: #44749D !important;
            color: #fff !important;
            border: none !important;
            text-shadow none;
            border-radius: 0!important;
            -webkit-box-shadow: none !important;
            box-shadow: none !important;
            text-shadow: none !important;
            padding: 8px 16px;
          }
          .login #login_error, .login .message, .login .success {
            border-left: 4px solid #44749D;
          }
        </style>';
} );

/**
 * Register the theme sidebars.
 *
 * @return void
 */
add_action('widgets_init', function () {
    $config = [
        'before_widget' => '<section class="widget %1$s %2$s">',
        'after_widget' => '</section>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ];

    register_sidebar([
        'name' => __('Primary', 'sage'),
        'id' => 'sidebar-primary'
    ] + $config);

    register_sidebar([
        'name' => __('Header', 'sage'),
        'id' => 'sidebar-header'
    ] + $config);

    register_sidebar([
        'name' => __('Footer', 'sage'),
        'id' => 'sidebar-footer'
    ] + $config);
});

//Master redirect
add_action('wp', function () {
    if (get_current_blog_id() == 1 && $GLOBALS['pagenow'] !== 'wp-login.php' && $GLOBALS['pagenow'] !== 'wp-register.php' && !is_admin()) {

        $domain = 'et';

        wp_redirect(get_bloginfo('url') . '/' . $domain . '/', 301);
        exit;

    }
});

//Add lang files https://roots.io/sage/docs/localization/
add_action('after_setup_theme', function () {
    load_theme_textdomain('sage', get_template_directory() . '/resources/lang');
});

//Organize admin menu
//http://minusadam.test/et/wp-admin/edit-comments.php
add_action('admin_menu', function () {
    remove_menu_page( 'edit-comments.php' );
    remove_menu_page( 'edit.php?post_type=acf-field-group' );
    remove_menu_page( 'sb-instagram-feed' );
    remove_menu_page( 'wp_file_manager' );
}, 1000);

add_action('admin_bar_menu', function ($wp_admin_bar) {
//    $wp_admin_bar->remove_node('updates');
    $wp_admin_bar->remove_node('comments');
}, 1000);

//Maintenance mode
add_action('get_header', function () {
//    if ( !is_user_logged_in() ) { wp_die('Maintenance mode active!'); }
});

//Dashboard
function add_mehh_tutorial_videos() {
    wp_add_dashboard_widget(
        'mehh_tutorial_videos',
        'Videod',
        function() {
            echo '<p>Lehe muutmine</p><video controls muted playsinline><source type="video/mp4" src="https://elektriliit.ee/et/wp-content/uploads/sites/2/2023/09/Lehe-muutmine.mp4"></video>';
            echo '<p>Uue sündmuse lisamine</p><video controls muted playsinline><source type="video/mp4" src="https://elektriliit.ee/et/wp-content/uploads/sites/2/2023/09/Urituse-lisamine.mp4"></video>';
        }
    );
}

// Add the widgets
add_action('wp_dashboard_setup', function () {
    add_mehh_tutorial_videos();
});

add_action('wp_network_dashboard_setup', function () {
    add_mehh_tutorial_videos();
});

//Enable theme options for editor
add_action('init', function () {
    $editor = get_role('editor');

    // Grant capability to edit menus
    if ($editor && !$editor->has_cap('edit_theme_options')) {
        $editor->add_cap('edit_theme_options');
    }
});
