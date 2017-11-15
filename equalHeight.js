function equalHeight(main, submain) {

    'use strict';

    var elements  = $(main).find(submain),
        heights   = [],
        maximumHeight = null;

    elements.each(function () {
        
        $(this).removeAttr('style');

        heights.push($(this).height());

    });

    maximumHeight = Math.max.apply(null, heights);

    elements.height(maximumHeight);

    return maximumHeight;

}