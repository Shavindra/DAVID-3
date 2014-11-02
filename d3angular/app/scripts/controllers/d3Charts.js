'use strict';

/**
 * @ngdoc function
 * @name david3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the david3App
 */

  d3ngApp.controller('d3Charts', function ($scope) {
                $scope.data = [
                    {
                        name: 'Ari',
                        score: 10
                    },
                    {
                        name: 'B',
                        score: 60
                    },
                    {
                        name: 'C',
                        score: 30
                    },
                    {
                        name: 'Q',
                        score: 90
                    },
                    {
                        name: 'B',
                        score: 68
                    },
                    {
                        name: 'C',
                        score: 80
                    },
                    {
                        name: 'Q',
                        score: 57
                    }
    ];
            })