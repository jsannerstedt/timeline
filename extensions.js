ko.bindingHandlers.scroller = {
    init: function(element, valueAccessor) {
        var timeout;

        var obs = valueAccessor();

        element.onscroll = function(e) {
            if(timeout) {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
                obs(e.srcElement.scrollLeft);
            }, 10);
        };
    }
}