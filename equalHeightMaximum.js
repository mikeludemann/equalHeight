function equalHeightMaximum(main, submain) {
    
    'use strict';

    var elements        = $(main).find(submain),
        heights         = [],
        maximumHeight   = null;

    elements.each(function () {

        heights.push($(this).height());

        $(this).removeAttr('style');

    });

    maximumHeight = Math.max.apply(null, heights);

    elements.height(maximumHeight);

    return maximumHeight;

}