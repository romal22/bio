/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function Education(){

        this.id = "#education";

    }
    Education.prototype = (function(){
        function scrolled(){

        }
        var fn = {
            scrolled:scrolled
        };
        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();;
    window.pageController.education = new Education();
})(window);