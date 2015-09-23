(function (document) {
    'use strict';

    $(document).ready(function () {

        // fix main menu to page on passing
        $('.main.menu').visibility({
            type: 'fixed'

        });

        $('.ui.sidebar').sidebar('attach events', '.menu-toggler');
    });

})(document);