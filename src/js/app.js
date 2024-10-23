import { maskInputs } from "./static/inputmask.js";
import "./parts/sliders.js";
import "./parts/tabs.js";
import "./parts/popup.js";
import "./parts/menu.js";
import "./parts/gallery.js";

import { accorden } from "./static/accordeon.js";
import { stickyHeader } from "./parts/header.js";
import { playVideoAction } from "./parts/video.js";


accorden();
playVideoAction();
stickyHeader();

if (document.body.hasAttribute('data-lang') &&document.body.getAttribute('data-lang') == 'ru' && document.querySelector('._mask-phone')) {
    maskInputs('+7 (999) 999-99-99', '._mask-phone')
}

import { Fancybox } from "@fancyapps/ui";
Fancybox.bind("[data-fancybox]", {
});