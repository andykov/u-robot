// .select-city scripts goes here 

$(function() {

    // $('.regions__scroll').height($(window).height());

    // (function () {
    //     var selectCity = $(".select-city");
    //
    //     if (selectCity.length) {
    //         var selectCityListWrapper = selectCity.find(".select-city-list-wrapper"),
    //             selectedCity = selectCity.find(".selected-city");
    //
    //         selectCity.on("click touchend", "div", function (e) {
    //             if($(e.currentTarget).hasClass("selected-city")) {
    //                 if (selectCity.hasClass("select-city_active")) {
    //                     closeSelect();
    //                     e.stopPropagation();
    //                 } else {
    //                     openSelect();
    //                     e.stopPropagation();
    //                 }
    //
    //             }
    //             if($(e.currentTarget).hasClass("select-city-item")) {
    //                 selectedCity.text($(this).text());
    //                 if (selectCity.hasClass("select-city_active")) {
    //                     closeSelect();
    //                     e.stopPropagation();
    //                 }
    //             }
    //             if($(e.currentTarget).hasClass("select-city-close")) {
    //                 if (selectCity.hasClass("select-city_active")) {
    //                     closeSelect();
    //                     e.stopPropagation();
    //                 }
    //             }
    //         });
    //
    //         $('.scrollbar-inner').scrollbar();
    //
    //         function openSelect() {
    //             selectCity.addClass("select-city_active");
    //             if (document.documentElement.clientWidth < 600) {
    //                 selectCity.addClass("select-mobile");
    //                 selectCityListWrapper.show(0);
    //             } else {
    //                 selectCityListWrapper.fadeIn(200);
    //             }
    //         }
    //         function closeSelect() {
    //             selectCity.removeClass("select-city_active");
    //             if (document.documentElement.clientWidth < 600) {
    //                 selectCity.removeClass("select-mobile");
    //                 selectCityListWrapper.hide(0);
    //             } else {
    //                 selectCityListWrapper.fadeOut(200);
    //             }
    //         }
    //     }
    // })();
});