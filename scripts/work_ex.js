/**
 * Created by abhik.mitra on 24/08/14.
 */

(function(window){

    window.pageController = window.pageController || {};

    function WorkEx(){

        this.id = "#work_ex";

    }
    WorkEx.prototype = (function(){
        function scrolled(){

        }
        var fn = {
            scrolled:scrolled
        };
        return _.extend(fn, window.pageController.utilities.commonModuleFn);
    })();
    window.pageController.workEx = new WorkEx();

})(window);