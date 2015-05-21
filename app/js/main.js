/**
 * Created by rus on 18.05.2015.
 */
$(document).ready(function(){
    $('.slider__list').bxSlider({
        auto:true
    });
    //$(".call__date-select").simpleSelect();
    $('input[type="text"], textarea[type="text"],[type="password"]').blur(function () {
        if ($(this).val().length == 0) {
            $(this)
                .addClass('error show');
            $(this).qtip({

                content: {
                    attr: 'qtip-content'
                },
                show: {
                    event: 'show'
                },
                hide: {
                    event: "keydown hideTooltip click"
                },
                position: {
                    my:'right center',
                    at: 'left center'
                },
                style: {
                    classes: 'qtip-red',
                    tip: {
                        height: 10,
                        width: 16
                    }
                }
            }).trigger('show');
        } else {
            $(this)
                .addClass('not-error');
            console.log("not-error");
        }
    });
    $('input[type="text"], textarea[type="text"],[type="password"]').focus(function () {
        $(this)
            .removeClass('error');
        $('input[type="text"], textarea[type="text"],[type="password"]').qtip('toggle', true);
    });
    $('input[type="submit"]').click(function (event) {
        //	event.preventDefault();
        if ($(".not-error").length == 3) {
            location.reload();
        } else {
            event.preventDefault();
            $('input[type="text"], textarea[type="text"],[type="password"]').addClass('error show');
            console.log("errore");
        }
    });
    $('input[type="reset"]').click(function (){
        $('input[type="text"],textarea[type="text"]')
        .removeClass('error')
        .qtip('toggle', false);
    });
    $('input, textarea').placeholder();
    $('select').styler();
});
