/**
 * Main AngularJS Web Application
 */
var app = angular.module('angularjs', ['ngRoute']);

app.controller('MainCtrl', function($scope){
    $scope.onClickScrollBottom = function(){
    	 $("html, body").animate({ scrollTop: $(document).height() }, 1000);
    }

    $scope.onClickScrollTop = function(){
    	 $("html, body").animate({ scrollTop: 0 }, 1000);
    }    

    $scope.onClickNav = function(){
    	var trgtSection = $(document.querySelector(event.target.hash)),
    		activeLink  = $(document.querySelector('#navbar a.active')),
    		domElement  = $(trgtSection),
    	    topOffset   = domElement.offset().top;

		activeLink.removeClass('active');
    	$(event.target).addClass('active');
    	$('html,body').animate({scrollTop: topOffset},1000);
    }    
});
