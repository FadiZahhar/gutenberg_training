var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType("mytheme-blocks/firstblock", {
  title: __("First Block", "mytheme-blocks"),
  description: __("Our First Block", "mytheme-blocks"),
  category: "layout",
  // adding icon from developer.wordpress.org/resource/dashicons
  icon: "admin-network",
  // keywords is a searchable terms, here we are making it translatable
  keywords: [__("photo", "mytheme-blocks"), __("image", "mytheme-blocks")],
  edit: function() {
    return el("p", null, "Editor");
  },
  save: function() {
    return el("p", null, "Saved content");
  }
});
