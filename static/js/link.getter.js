$(document).ready(function() {
    $("#input").on("submit", function(a) {
        a.preventDefault();

        var inputData = $(this).serializeArray();

        function objectifyForm(formArray) {
            var returnArray = {};
            for (var i = 0; i < formArray.length; i++){
                returnArray[formArray[i]['name']] = formArray[i]['value'];
            }
            return returnArray;
        }

        var serializedData = objectifyForm(inputData);
        if (!serializedData.url || !serializedData.url.match(/^http[s]?:\/\/rutracker\.org/)) {
            $("#output").html("<input type='text' value='Invalid URL' name='link_out' autocomplete='off' />");
            return;
        }

        $("#output").html('<div class="span"><div class="typing_loader"></div></div>');
        $("#submit").hide();

        var currentUrl = new URL(location.href);
        currentUrl.searchParams.set('url', serializedData.url);
        location.href = currentUrl.href;
    });
});

$(window).load(function() {
    $('.lazyload').each(function() {
        $(this).attr('src', $(this).attr('data-src'));
    });
});

HTMLDocument.prototype.__defineGetter__("write",function(){return null});
