<?php
/*
 * Plugin Name:       Custom Team Info Block
 * Description:       Custom Team Info Image Block, Allow to add and edit member details, position, name and image
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Ravina Vala
 */

function custom_block_register_block() {
    /* Register JavasScript File build/index.js */
    wp_register_script(
            'my-custom-block',
            plugins_url('build/index.js', __FILE__),
            array('wp-blocks', 'wp-element', 'wp-editor'),
            filemtime(plugin_dir_path(__FILE__) . 'build/index.js')
    );
    
    register_block_type('gutenberg-block/teams-block', array(
        'editor_script' => 'my-custom-block',
        'editor_style' => 'my-custom-block-editor-style',
        'style' => 'my-custom-block-frontend-style',
    ));
}

add_action('init', 'custom_block_register_block');
