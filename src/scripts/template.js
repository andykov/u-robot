
// LIBS ALL PAGE
//=include ../../node_modules/jquery/dist/jquery.min.js
//=include libs/jquery-ui.min.js
//=include libs/jquery.validate.js
//=include libs/jquery.cookie.js
//=include ../../node_modules/jquery-ui-touch-punch/jquery.ui.touch-punch.min.js
//=include ../../node_modules/select2/dist/js/select2.full.js
//=include ../../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js
////=include libs/ion.rangeSlider.js
//=include libs/jquery.mask.min.js
//=include libs/moment.min.js
//=include libs/ru.js
//=include libs/bootstrap-datetimepicker.min.js
/* //=include libs/daterangepicker.min.js // пока не используется */
//=include libs/jquery.fancybox.pack.js
/* //=include libs/jquery.fancybox.min.js // пока не используется */
//=include libs/tippy.min.js


// BLOCKS
//=include ../blocks/card/card.js



// SCRIPTS ALL PAGE
//=include ../blocks/nav/nav.js
//=include ../blocks/tile/tile.js

$.fn.select2.defaults.set('language', 'ru');
var dateTimePickerTooltips = {
    today: 'Установить на сегодняшнюю дату',
    clear: 'Очистить значение',
    close: 'Закрыть выбор даты',
    selectMonth: 'Выбрать месяц',
    prevMonth: 'Предыдущий месяц',
    nextMonth: 'Следующий месяц',
    selectYear: 'Выбрать год',
    prevYear: 'Предыдущий год',
    nextYear: 'Следующий год',
    selectDecade: 'Выбрать десятилетие',
    prevDecade: 'Предыдущее десятилетие',
    nextDecade: 'Следующее десятилетие',
    prevCentury: 'Предыдущий век',
    nextCentury: 'Следующий век',
    pickHour: 'Выбрать час',
    incrementHour: 'Увеличить часы',
    decrementHour: 'Уменьшить часы',
    pickMinute: 'Выбрать минуты',
    incrementMinute: 'Увеличить минуты',
    decrementMinute: 'Уменьшить минуты',
    pickSecond: 'Выбрать секунды',
    incrementSecond: 'Увеличить секунды',
    decrementSecond: 'Уменьшить секунды',
    togglePeriod: 'Переключить период',
    selectTime: 'Выбрать время'
};

var app = {};
app.isMobile = function () {
    var a = navigator.userAgent||navigator.vendor||window.opera;
    return /android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|iP(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));
};

$(function() {


    // create cookies
    function setCookie(name, value) {
        if (name && value) {
            document.cookie = name + "=" + value;
        }
    }

    // check cookies
    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    // init global fancybox
    if($('.fancybox').length) {
        $('.fancybox').fancybox();
    }

    // init masked phone
    $('[data-s_option="full_phone"]').mask('+7 (000) 000-00-00');

    $('select').not('.event-group-add-time-begin').not('.event-group-add-time-end').not('.event-day-modify-time-begin').not('.event-day-modify-time-end').select2({
        minimumResultsForSearch: Infinity
    });

    // function contentIndent() {
    //     var headerFixedHeight = $('.header-fixed').height();
    //     $('body').css('padding-top', headerFixedHeight);
    //     $('.nav-wrap').css('top', headerFixedHeight);
    // }

    (function contentIndent() {
        var headerFixedHeight = $('.header-fixed').height();
        $('body').css('padding-top', headerFixedHeight);
        $('.nav-mobile').css('top', headerFixedHeight);
    }());

    $(document).on('click', '.link-auth', function(){
        $('.fancybox-inner').height(640);
    });

    $('.js-region-notification').on('click', '.btn, .btn--new', function(e){
        if ($(this).is('.js-region-notification-yes')) {
            SebekonHelpers.setCookie(BX.message('COOKIE_PREFIX') + '_USER_CITY_MANUAL', 1);
        }
        $('.js-region-notification').hide();
    });


    // подсказки с html шаблоном
    if ($('.js-tips[data-tips-html]').length) {

        tippy(".js-tips[data-tips-html]", {
            html: document.querySelector('[data-tips-html]').getAttribute('data-tips-html'),
            arrow: true,
            animation: 'fade',
            trigger: 'mouseenter focus',
        });

    }

    // подсказки по атрибуту title
    if ($('.js-tips[title]:not([data-tips-html])').length) {
        tippy('body', {
            target: '.js-tips[title]:not([data-tips-html])',
            arrow: true,
            animation: 'fade',
            trigger: 'mouseenter focus',
            onShow: function () {
                // console.log('show');
            }
        });
    }

    $('.js-field-input-date:not(#account-birthday)').datetimepicker({
        locale: BX.message('LANGUAGE_ID'),
        sideBySide: false,
        format: 'DD.MM.YYYY',
        ignoreReadonly: true,
        useCurrent: true,
        minDate: new Date().setHours(0,0,0,0), // без setHours не работает выбор текущей даты
        tooltips: dateTimePickerTooltips
    });
    // $('.js-field-input-date:not(#account-birthday)').data("DateTimePicker").options({
    //     widgetPositioning: {
    //         vertical: 'auto',
    //         horizontal: 'left'
    //     },
    // });

    // (($(this).attr('name') == "AVAILABILITY_DATE_BEGIN") && ($(window).width() < 340)) ? 'left':'auto'

    if ($('.js-field-input-date').length) {
        $('.js-field-input-date').on('dp.hide', function (e) {
            if ($(this).val()) {
                $(this).removeClass('is-error');
            } else {
                $(this).addClass('is-error');
            }

        });
    }

    var acc = document.getElementsByClassName("js-collapse");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.lastChild;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

    // $('.search .js-field-input-date').datetimepicker({
    //     locale: 'ru',
    //     sideBySide: false,
    //     format: 'DD.MM.YYYY',
    //     ignoreReadonly: true,
    //     useCurrent: false,
    //     minDate: new Date(),
    //     tooltips: dateTimePickerTooltips
    // });
    //
    // $('.search .js-field-input-date[name="date_from"]').on('dp.hide', function (e) {
    //     $('.search .js-field-input-date[name="date_to"]').val("");
    //     $('.search .js-field-input-date[name="date_to"]').data("DateTimePicker").minDate(e.date);
    // });
    // $('.search .js-field-input-date[name="date_to"]').on('dp.change', function () {
    //     $('.search .search__form').submit();
    // });

    // $.validator.addMethod(
    //     "regex",
    //     function(value, element, regexp) {
    //         var re = new RegExp(regexp);
    //         return this.optional(element) || re.test(value);
    //     },
    //     "Please check your input."
    // );


    $.validator.addMethod("legalName", function(value, element, param) {
        return this.optional(element) || /^[a-zA-Zа-яА-Я]+$/.test( value );
    });
    $.validator.setDefaults({
        ignore: ":hidden",
        errorElement: 'span',
        errorPlacement: function(error, element) {
            // console.log(element);
            error.appendTo(element.closest('.js-field').addClass('is-error').find('.js-help').addClass('is-danger'));
            // TODO пофиксить подсветку всех полей при фокусе на одном поле
            // error.insertBefore(element);

            // if (element[0].tagName == "SELECT") {
            //     error.appendTo(element.parent());
            // }

            // if (element.attr("name") == "fname" || element.attr("name") == "lname" ) {
            //     error.insertAfter("#lastname");
            // } else {
            //     error.insertAfter(element);
            // }
        },
        success: function(label) {

        },
        invalidHandler: function(event, validator) {
            // event.appendTo(validator.closest('.js-field').addClass('is-error').find('.js-help').addClass('is-danger'));
            // if (validator.numberOfInvalids() > 0) {
            //     $( "#user-account-btn-submit" ).next().text( validator.numberOfInvalids() + " field(s) are invalid" );
            // } else {
            //     $( "#user-account-btn-submit" ).next().empty();
            // }
        },
        rules: {
            NAME: {
                required: true,
                legalName: true
            },
            LAST_NAME: {
                required: true,
                legalName: true
            },
            PERSONAL_BIRTHDAY: {
                required: true
            },
            UF_FULL_PHONE: {
                required: true
            },
            EMAIL: {
                required: true,
                email: true
            },
            UF_P_COUNTRY_CODE: {
                required: true
            },
            UF_DL_EXP_YEAR: {
                required: true
            },
            UF_NATIONALITY_LIST: {
                required: true
            },
            UF_NATIONALITY: {
                required: function (element) {
                    if ($(element).is(':visible')) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            UF_REGION: {
                required: true
            },
            PROMOCODE: {
                minlength: 10,
                maxlength: 10
            }
        },
        messages: {
            NAME: {
                required: 'Укажите Имя',
                accept: 'Имя может содержать только буквы'
            },
            LAST_NAME: {
                required: 'Укажите Фамилию',
                accept: 'Фамилия может содержать только буквы'
            },
            PERSONAL_BIRTHDAY: {
                required: 'Укажите Дату рождения'
            },
            UF_FULL_PHONE: {
                // required: 'Укажите Телефон',
                required: function (element, validator) {
                    $(validator[0]).closest('.js-field').find('.js-field-confirm').removeClass('active');
                    return 'Укажите телефон'
                }
            },
            EMAIL: {
                required: 'Укажите E-mail',
                email: function (element, validator) {
                    // console.log('---');
                    // console.log(validator);
                    // console.log($(validator));
                    // console.log($(validator[0]));
                    // console.log('---');
                    $(validator[0]).closest('.js-field').find('.js-field-confirm').removeClass('active');
                    return 'Некорректный адрес'
                }
                // depends: function(element) {
                //     return $("#contactform_email").is(":checked");
                // }
            },
            UF_P_COUNTRY_CODE: {
                required: 'Укажите Код страны'
            },
            UF_DL_EXP_YEAR: {
                required: 'Укажите Водительский стаж'
            },
            UF_NATIONALITY_LIST: {
                required: 'Укажите Гражданство'
            },
            UF_NATIONALITY: {
                required: 'Укажите Гражданство'
            },
            UF_REGION: {
                required: 'Укажите Регион прописки'
            },
            PROMOCODE: {
                minlength: 'Минимум 10 символов',
                maxlength: 'Максимум 10 символов'
            }
        }
    });
    var formCreateDealAccount = $("#create-deal-form");
    var formUserAccount = $("#user-account-main form");
    var objValidator = formUserAccount.validate();
    formCreateDealAccount.validate();


    $('#create-deal-form #promocode').on('keyup blur', function (e) {
        var isValidPromocode = formCreateDealAccount.valid();

        if (isValidPromocode) {
            $('#create-deal-form #promocode').closest('.js-field').removeClass('is-error');
            $('#create-deal-form #promocode').closest('.js-field').find('.button').removeAttr('disabled');
        } else {
            $('#create-deal-form #promocode').closest('.js-field').addClass('is-error');
            $('#create-deal-form #promocode').closest('.js-field').find('.button').attr('disabled', 'disabled');
        }

    });

    $('#user-account-main input, #user-account-main select').on('keyup blur', function () {
        var isValidForm = formUserAccount.valid();

        var countNoValid = objValidator.numberOfInvalids();

        // console.log('Результат валидации формы в аккаунте', isValidForm);
        if (isValidForm) {
            $('#user-account-btn-submit').removeAttr('disabled');
        } else {
            $('#user-account-btn-submit').attr('disabled', 'disabled');
        }
        // console.log(objValidator.numberOfInvalids());
        if (countNoValid > 0) {
            var message = countNoValid == 1
                ? 'Вы пропустили 1 поле.'
                : 'Вы пропустили ' + countNoValid + ' полей.';
            $( "#user-account-btn-submit" ).next().text( message );
        } else {
            $( "#user-account-btn-submit" ).next().empty();
        }

        // errorsCount = objValidator.numberOfInvalids();
        // console.log(errorsCount);
        // console.log(errorsCount);
        // if (errorsCount) {
        //     var message = errorsCount == 1
        //         ? 'You missed 1 field. It has been highlighted'
        //         : 'You missed ' + errorsCount + ' fields. They have been highlighted';
        //     $(".field-control span").html(message);
        //     $(".field-control span").show();
        // } else {
        //     $(".field-control span").hide();
        // }
        // if ($('#user-account-main form').valid()) {
        //     $('#user-account-btn-submit').removeAttr('disabled');
        // } else {
        //     $('#user-account-btn-submit').attr('disabled', 'disabled');
        // }

    });
    $('#account-nationality-list').on('select2:select', function (e) {
        var data = e.params.data;



        if (e.params.data.element.dataset.other === 1) {
                // $( "#account-nationality" ).rules( "add", {
                //     required: true,
                //     minlength: 2,
                //     messages: {
                //         required: "Required input",
                //         minlength: jQuery.validator.format("Please, at least {0} characters are necessary")
                //     }
                // });
                // $( "#account-nationality" ).attr('data-rule-required', 'true');
                // $( "#account-nationality" ).attr('data-msg-required', 'Укажите Гражданствоddddddd');
        }

    });

});