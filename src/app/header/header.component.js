import header from './header.component.html';
import headerStyle from './header.component.scss';

var htmlHeader = '<div id="header">' + header + '</div>';
$("app-header").replaceWith(htmlHeader);

// var html = '<style>' + headerStyle + '</style>';
// $("#header").append(html);