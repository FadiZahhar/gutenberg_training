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

function mytheme_block_register()
{
    wp_register_script(
        'mytheme-blocks-firstblock-editor-script',
        plugins_url('blocks/firstblock/index.js', __FILE__),
        ['wp-blocks', 'wp-i18n', 'wp-element']
    );

    register_block_type(
        'mytheme-blocks/firstblock',
        [
        'editor_script' => 'mytheme-blocks-firstblock-editor-script',
        //'script' => '',
        //'style' => '',
        //'editor_style' => '',
        ]
    );
}

add_action('init', 'mytheme_block_register');
