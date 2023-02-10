// ==UserScript==
// @name         Open frame
// @version      0.1
// @description  Ctrl + shift to open frame
// @author       Ajay
// @match        https://*/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/ajayyy/scripts/master/open-frame.js
// @downloadURL  https://raw.githubusercontent.com/ajayyy/scripts/master/open-frame.js
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener("mousedown", (e) => {
        if (e.ctrlKey && e.shiftKey && e.button === 1) {
            const iframe = document.querySelector("iframe");
            if (iframe) {
                window.location.href = iframe.src;
            }
        }
    });
})();
