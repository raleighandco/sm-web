(function () {
    angular.module('Home', []);
    angular.module('About', []);
    angular.module('Profile', []);
    angular.module('SwipeWebApp', [
        'Home',
        'About',
        'Profile',
        'ui.router'
    ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'states/home.html'
                })
                .state('About', {
                    url: '/about',
                    templateUrl: 'states/about.html'
                })
                .state('profile', {
                    url: '/profile',
                    templateUrl: 'states/profile.html'
                })
                .state('contact', {
                    url: '/contact',
                    templateUrl: 'states/contact.html'
                })
        });
}());