<?php
/*
Plugin Name: mytheme-blocks
Plugin URI: http://wordpress.org/plugins/hello-dolly/
Description: This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly. When activated you will randomly see a lyric from <cite>Hello, Dolly</cite> in the upper right of your admin screen on every page.
Author: Fadi Nicolas Zahhar
Version: 1.7.2
Author URI: https://wmvp.dev
**/
if (!defined('ABSPATH')) {
    exit;
}

// creating a function to avoid repetetion in registering block types.
// adding options as an empty array and using array_merge to merge first default option with the added options if required.
function mytheme_blocks_register_block_type($block, $options = array()){
    register_block_type(
        'mytheme-blocks/'. $block,
        array_merge(
            array(
                'editor_script' => 'mytheme-blocks-editor-script',
                'editor_style' => 'mytheme-blocks-editor-style',
                'script' => 'mytheme-blocks-script',
                'style' => 'mytheme-blocks-style',
            ),
            $options
            )
        );
}

function mytheme_block_register()
{
    // chaning mytheme-blocks-firstblock-editor-script to mytheme-blocks-editor-script
    // since we are bundeling all scripts into editor.js so any new import block we will be bundeled on save editor script.
    wp_register_script(
        'mytheme-blocks-editor-script',
        // chaning the plugin ulr to the dist of compiled javascript from webpack
        plugins_url('dist/editor.js', __FILE__),
        ['wp-blocks', 'wp-i18n', 'wp-element']
    );
    
    wp_register_script(
        'mytheme-blocks-script',
        // chaning the plugin ulr to the dist of compiled javascript from webpack
        plugins_url('dist/script.js', __FILE__),
        ['jquery']
    );
    
    wp_register_style(
        'mytheme-blocks-editor-style',
        plugins_url('dist/editor.css',
        __FILE__),
        array('wp-edit-blocks')
    );
    
     wp_register_style(
        'mytheme-blocks-style',
        plugins_url('dist/style.css',
        __FILE__),
        array('')
    );
    
    mytheme_blocks_register_block_type('firstblock');
    mytheme_blocks_register_block_type('secondblock');

}

add_action('init', 'mytheme_block_register');
