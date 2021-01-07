import mainModule from './app/app.module.js';
import mainStyle from './style.scss';

// $("app-root").replaceWith("<div id='main'>" + mainModule + "</div>");
var html = '<style>' + mainStyle + '</style>';
$("head").append(html);

