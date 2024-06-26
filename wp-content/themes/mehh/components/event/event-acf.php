<?php

if (function_exists('acf_add_local_field_group')):

    acf_add_local_field_group(array(
        'key' => 'group_6dada4300edft5',
        'title' => __('Event settings', 'sage'),
        'fields' => array(
            array(
                'key' => 'field_63e8c1650773f',
                'label' => __('Begin date and time', 'sage'),
                'name' => 'begin_date_time',
                'aria-label' => '',
                'type' => 'date_time_picker',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'display_format' => 'j. M Y H:i',
                'return_format' => 'Y-m-d H:i',
                'first_day' => 1,
            ),
            array(
                'key' => 'field_63e8c1650cfgh',
                'label' => __('End date', 'sage'),
                'name' => 'end_date_time',
                'aria-label' => '',
                'type' => 'date_time_picker',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'display_format' => 'j. M Y H:i',
                'return_format' => 'Y-m-d H:i',
                'first_day' => 1,
            ),
            array(
                'key' => 'field_adada0asdf67',
                'label' => 'Full day event',
                'name' => 'full_day',
                'type' => 'true_false',
                'default_value' => 0,
                'column_width' => '',
                'ui' => 1,
            ),
            array(
                'key' => 'field_63e8c1650cft6',
                'label' => __('Location', 'sage'),
                'name' => 'location',
                'aria-label' => '',
                'type' => 'text',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'events',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'side',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
        'show_in_rest' => false
    ));
endif;
