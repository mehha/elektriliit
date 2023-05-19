<?php

if (function_exists('acf_add_options_page')):

    acf_add_options_page('Members area');

    acf_add_local_field_group(array(
        'key' => 'group_5besasa8c49cfgh',
        'title' => 'Members files',
        'fields' => array(
            array(
                'key' => 'field_636a460e12f0c',
                'label' => 'Members files',
                'name' => 'members_files',
                'aria-label' => '',
                'type' => 'repeater',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'layout' => 'table',
                'pagination' => 0,
                'min' => 0,
                'max' => 0,
                'collapsed' => 'field_63792fdb90ddc',
                'button_label' => 'Add File',
                'rows_per_page' => 20,
                'sub_fields' => array(
                    array(
                        'key' => 'field_63792fdb90ddc',
                        'label' => 'Members file',
                        'name' => 'members_file',
                        'aria-label' => '',
                        'type' => 'file',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'return_format' => 'array',
                        'library' => 'all',
                        'min_size' => '',
                        'max_size' => '',
                        'mime_types' => '',
                        'parent_repeater' => 'field_636a460e12f0c',
                    ),
                ),
            ),

        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'acf-options-members-area',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => 1,
        'description' => '',
    ));

endif;
