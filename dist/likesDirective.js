angular.module("musicApp").directive("likesDirective",function(){return{restrict:"E",templateUrl:"templates/playDirective.html",controller:"likesCtrl",link:function(e){getWavesurfer(e)}}});