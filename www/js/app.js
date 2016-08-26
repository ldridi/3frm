app = angular.module("starter", ["ionic", "ngCordova"])

.run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                // Don't remove this line unless you know what you are doing. It stops the viewport
                // from snapping when text inputs are focused. Ionic handles this internally for
                // a much nicer keyboard experience.
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
    });


    })
    .controller("AppCtrl", function($scope, $ionicPopover, $http, $ionicModal, $state, $ionicPopup) {

        $scope.isOpen = function(){

          $scope.test = document.getElementsByTagName("body")[0];
          if($scope.test.classList.contains("menu-open")){
            document.getElementById("fader").style.display = "block";
            return true;
          }else{
            document.getElementById("fader").style.display = "none";
            return false;
          }
        }

});




// routers
app.config(function($stateProvider, $urlRouterProvider) {
    

    
   

   

    $stateProvider.state('menu.parametre', {
        url: '/parametre',
        views: {
            'side-menu21': {
                templateUrl: 'template/parametre.html'
            }
        }
    });

    $stateProvider.state('menu.favoris', {
        url: '/favoris',
        views: {
            'side-menu21': {
                templateUrl: 'template/favoris.html'
            }
        }
    });

     $stateProvider.state('menu.recette', {
        url: '/recette',
        views: {
            'side-menu21': {
                templateUrl: 'template/recette.html'
            }
        }
    });

    $stateProvider.state('menu.connexion', {
        url: '/connexion',
        views: {
            'side-menu21': {
                templateUrl: 'template/connexion.html'
            }
        }
    });

     $stateProvider.state('menu.inscription', {
        url: '/inscription',
        views: {
            'side-menu21': {
                templateUrl: 'template/inscription.html'
            }
        }
    });


    

    

    $stateProvider.state('menu', {
        url: '/side-menu21',
        abstract: true,
        templateUrl: 'template/menu.html'
    });


   


    $urlRouterProvider.otherwise("menu.connexion");
})