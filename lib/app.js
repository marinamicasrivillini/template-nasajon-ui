var app = angular.module('main', ['ui.router', 'ui.router.state', 'ngAnimate', 'ui.bootstrap', 'nasajon-ui']);

app.controller('IndexController', ['$scope', function ($scope) {

    $scope.configPage = {
        "busy": false,
        "to_load": 0,
        "finished": true
    };

    $scope.fieldsConfig = [
        {
            value: 'nome',
            label: 'Nome',
        },
        {
            value: 'extintor',
            label: 'Escolha',
            type: 'boolean'
        }
    ];

    $scope.fields = [
        {
            nome: "Ronaldo",
            extintor: true
        },
        {
            nome: "Marina",
            extintor: false
        }
    ];

    $scope.hasMorePage = () => false;

    $scope.imagesCarousel = [
        {src: 'https://storage.googleapis.com/shawee-production.appspot.com/shawee/profilepictures/82a37842-c711-4e28-9781-2953e19ecc93.jfif', link:'https://storage.googleapis.com/shawee-production.appspot.com/shawee/profilepictures/82a37842-c711-4e28-9781-2953e19ecc93.jfif'}
    ];

}]);