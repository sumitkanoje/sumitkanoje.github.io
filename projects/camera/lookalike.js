var app = angular.module('LookALike', [ 'ngMaterial' ]);

app.factory('CamFactory', function($http) {
	return {
		ApiKey : 'a1b8c17cb3dc49ba973ddb7049f32684',
		
	}
});

app.controller('AppController', function($scope, $rootScope, $filter, CamFactory, $http) {

	$scope.msg = 'Result will appear here.';
	
	
	$scope.Process = function(file){
		$scope.msg = 'Face detection started...wait';
		$http({
			url: 'https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true',
			method: 'POST',
			data: file,
			headers: {
				'Content-Type' : 'application/octet-stream',
				'Ocp-Apim-Subscription-Key' : CamFactory.ApiKey
			}
		}).then(function(response){
			console.log('Detect Success',response.data[0]);
			
			var data = response.data[0];
			
			if( !angular.isUndefined(data) )
			{	
			
				$scope.msg = "Face detected..Please wait for similarity match";
				faceId = response.data[0].faceId;
				
				$http({
					url: 'https://api.projectoxford.ai/face/v1.0/findsimilars',
					method: 'POST',
					data: {
						'faceId': faceId,
						'faceListId': 'keybank',
						'maxNumOfCandidatesReturned': 10,
						'mode': 'matchFace'
					},
					headers: {
						'Content-Type' : 'application/json',				
						'Ocp-Apim-Subscription-Key' : CamFactory.ApiKey
					}
				}).then(function(response){
					console.log('similar',response);
					$scope.similar = response.data;
					$scope.msg = 'Please check results';
				}, function(response){
					console.log('similar failed',response);
					$scope.msg = 'Similarity match failed.';
				});
			
			}else{
				$scope.msg = "Face not detected, please retake the snapshot.";
			}		
		}, function(response){
			console.log('Detect Failure',response);
		});
		
	}
	
	$scope.Detect = function(file){
		$http({
			url: 'https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true',
			method: 'POST',
			data: CamFactory.dataURItoBlob(file),
			headers: {
				'Content-Type' : 'application/octet-stream',
				'Ocp-Apim-Subscription-Key' : 'a1b8c17cb3dc49ba973ddb7049f32684'
			}
		}).then(function(response){
			console.log('Success',response);
			return response;
		}, function(response){
			console.log('Failure',response);
			return false;
		});
	}
	
	$scope.Verify = function(faceId,personGroupId,personId){
		$http({
			url: 'https://api.projectoxford.ai/face/v1.0/verify',
			method: 'POST',
			data: {
				'faceId': faceId,
				'personGroupId': personGroupId,
				'personId': personId
			},
			headers: {
				'Content-Type' : 'application/json',
				'Ocp-Apim-Subscription-Key' : 'a1b8c17cb3dc49ba973ddb7049f32684'
			}
		}).then(function(response){
			console.log('Success',response);
		}, function(response){
			console.log('Failure',response);
		});
	}
	
});
		
