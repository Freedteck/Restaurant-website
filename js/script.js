$(function () {
    
    $("#navbar-toggle").blur(function (event) {
        let screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#navbarSupportedContent").collapse('hide');
        }
    });
    (function (window) {

    let dc = {}
    
    let homeHtml = "snippets/home-snippet.html";
    
    let insertHtml = function (selector, html) {
        let targetElement = document.querySelector(selector);
        targetElement.innerHTML = html;
    };
    
    let showLoading = function (selector) {
        let html = '<div class="text-center">'
        html += '<img src="images/load.gif"></div>'
        insertHtml(selector, html)
    };
    
    $(function () {
    
        showLoading("#main-content");
        $ajaxUtils.sendGetRequest(homeHtml, "#main-content", false)
    });
    
    window.$dc = dc;
})(window);

});

