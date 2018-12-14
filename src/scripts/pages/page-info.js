$(function() {
    
    // TODO перенести на страницу INFO
    // Подсказки
    var tippySettings = {
        arrow: true,
        sticky: true,
        inertia: true,
        animateFill: false,
    };

    // Подсказки из атрибута title
    tippy('[data-tippy-attr]', tippySettings);

});