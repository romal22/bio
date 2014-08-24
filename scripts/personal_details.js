/**
 * Created by abhik.mitra on 24/08/14.
 */
(function(window){

    window.pageController = window.pageController || {};

    function PersonalDetails(){

        this.id = "#personal_details";

    }
    PersonalDetails.prototype = (function(){
        function scrolled(){

        }
        var fn = {
            scrolled:scrolled
        };
        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();
    window.pageController.personalDetails = new PersonalDetails();
})(window);