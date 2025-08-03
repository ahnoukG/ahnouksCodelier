app.config(function ($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: '/templates/home.html'
    })
    .when("/projects", {
        templateUrl: '/templates/projects.html'
    })
    .when("/about", {
        templateUrl: '/templates/about.html'
    })
    .when("/contact", {
        templateUrl: '/templates/contact.html'
    })
    .otherwise({
        templateUrl:"/templates/home.html"
    })
});