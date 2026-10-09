var app = angular.module('CamApp', [ 'ngMaterial' ]);

app.factory('CamFactory', function($http) {
	return {
		tabs : null,
		dataURItoBlob : function(dataURI) {
			// convert base64/URLEncoded data component to raw binary data held in a string
			var byteString;
			if (dataURI.split(',')[0].indexOf('base64') >= 0)
				byteString = atob(dataURI.split(',')[1]);
			else
				byteString = unescape(dataURI.split(',')[1]);
			
			// separate out the mime component
			var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
			
			// write the bytes of the string to a typed array
			var ia = new Uint8Array(byteString.length);
			for (var i = 0; i < byteString.length; i++) {
				ia[i] = byteString.charCodeAt(i);
			}
			
			return new Blob([ia], {type:mimeString});
		},
		keybank : [{
			"personId": "284bfcf9-5b09-4343-b105-c58abb9f83d8",
			"persistedFaceIds": [
			    "6a0c2055-28fd-4c17-9e95-d3562a0b4e72",
				"d99ff4d3-7a22-4b48-a262-941a22885dad",
				"dd0473c9-a8e1-4362-97cf-907a881bc763"
			],
			"name": "Rajender",
			"id": 1,
			"userData": "Rajender"
		},  {
			"personId": "309f5e0a-94ad-4ea8-861d-fa5852329484",
			"persistedFaceIds": [
			    "7d1199d8-e017-4251-af03-3ab92f466d14"
			],
			"name": "Omkar Patil",
			"id": 2,
			"userData": "Omkar"
		},  {
			"personId": "5c2534c5-309d-452b-a982-a8a0e2509e9d",
			"persistedFaceIds": [
			    "9b39e5b0-16c1-441e-b1f7-eeb1b90706a8",
				"ac275e1e-37f9-4936-ba5c-19fa661c9527",
				"d220b4e2-7e47-4def-9ce6-aaf498bc8dbe"
			],
			"name": "Pritam Sahoo",
			"id": 3,
			"userData": "Pritam Sahoo"
		},  {
			"personId": "7e968a7e-e681-4298-87ba-58f34cce3d09",
			"persistedFaceIds": [
			    "6e8b438b-4924-4f07-b633-4c1ba9fb329e",
				"95b765d1-430d-4847-a628-6bb8f5fa1a48",
				"97441eb9-a3d0-4d14-af53-3007581efd1f",
				"ab5f445e-bd72-4da5-9ee9-c552e900388e"
			],
			"name": "Vishal Prabat",
			"id": 4,
			"userData": "Vishal"
		},  {
			"personId": "8115efd0-a3d1-4ab0-9f6e-1525af908d1f",
			"persistedFaceIds": [
			    "11d81e42-d5a0-4f94-9626-46963814edf8",
				"5bda367e-603e-490b-88c7-cabc94f8a215",
				"941ad502-97d4-4a82-ad44-78d6badda385"
			],
			"name": "Darpan Bhalerao",
			"id": 5,
			"userData": "Darpan Bhalero"
		},  {
			"personId": "9ad02cdf-b7ec-43a0-b124-b25b047930f1",
			"persistedFaceIds": [
			    "91685255-ac9b-4a4d-b9bf-14459d2ec439",
				"e95465ad-c4f6-4266-8ecc-471af7755371",
				"ee732f50-6429-4bc7-b874-6a2a6a18d8ff"
			],
			"name": "Pravin Birajdar",
			"id": 6,
			"userData": "Pravin Birajdar"
		},  {
			"personId": "aa03bea0-5282-47ce-aaf9-727a787c3fc5",
			"persistedFaceIds": [      
				"0ceea8ee-332e-4e58-bcbc-9475ce3525ee",
				"471cf194-81be-41a1-a000-6bc0bb79326b",
				"acef4e80-d71c-4cf3-a947-7e8f9014a98f"
			],
			"name": "Snehal Wagh",
			"id": 7,
			"userData": "Snehal"
		},  {
			"personId": "ad45c417-8fbd-448b-b411-5e464863939b",
			"persistedFaceIds": [
			"26650a8d-0da5-4269-b2a1-4f6574a7dc04"
			],
			"name": "Manish Raj",
			"id": 8,
			"userData": "Manish"
		},  {
			"personId": "b6aab9ab-4c4e-45e3-a5d9-773bddd8c594",
			"persistedFaceIds": [
				"2a8d9464-935d-42b2-b985-ce41a8eb2db6",
				"7fc5de47-08ae-4542-a369-e650a5ad7c5a",
				"c6a16870-b643-4ef4-b014-9a35e08f24a0",
				"c967b073-5d4a-4a27-bb55-9de7ed339d8d",
				"f1f424c6-1639-4f8e-b4bd-1d3602f05fe7"
			],
			"name": "Abhishek LNU",
			"id": 532809,
			"userData": "Abhishek is PAT."
		},  {
			"personId": "c760ef22-c994-4b1f-a19c-d6bb54e1535b",
			"persistedFaceIds": [],
			"name": "Sumitkumar Kanoje",
			"id": 532789,
			"userData": "Sumitkumar Shamrao Kanoje"
		},  {
			"personId": "c9430f41-36a5-4b68-b17e-eec0d5550361",
			"persistedFaceIds": [
			    "739fcb9e-3502-4e7d-ba0f-df81d2071371",
				"7b3d1531-9510-4d16-b23a-c228b989610e"
			],
			"name": "Shweta Uikey",
			"id": 10,
			"userData": "Shweta is Programmer Analyst Trainee."
		},  {
			"personId": "ff0e943b-686c-41f8-b039-ae395bf9b53e",
			"persistedFaceIds": [
			    "51e5220e-66cc-421a-be63-ca8162f8972a",
				"ab1edc86-c688-4d56-854e-cb7da1255f03",
				"c37e6ce1-4919-4b97-97ad-3a578fc9080a",
				"ee3502f4-b624-426e-a7b7-42a2b5abe10a"
			],
			"name": "Mayur Dhaye",
			"id": 532819,
			"userData": "Mayur Dhaye is PAT"  
		}]
	}
});

app.controller('AppController', function($scope, $rootScope, $filter, CamFactory, $http) {

	$scope.msg = 'Result will appear here.';
	
	$scope.getEMP = function(id){
        var found = $filter('filter')(CamFactory.keybank, {'id': id}, true);
     if (found.length) {
         $scope.selected = found[0];
		 console.log($scope.selected);
		 return $scope.selected;
     } else {
         $scope.selected = 'Not found';
		 console.log('no');
     }
    };
	
	$scope.Process = function(file){
		$scope.msg = 'Starting face detection...';
		$http({
			url: 'https://api.projectoxford.ai/face/v1.0/detect?returnFaceId=true',
			method: 'POST',
			data: CamFactory.dataURItoBlob(file),
			headers: {
				'Content-Type' : 'application/octet-stream',
				'Ocp-Apim-Subscription-Key' : 'a1b8c17cb3dc49ba973ddb7049f32684'
			}
		}).then(function(response){
			console.log('Detect Success',response.data[0]);
			
			var data = response.data[0];
			
			if( !angular.isUndefined(data) )
			{	
			
			$scope.msg = "Face detected..Please wait for face verification.";
			faceId = response.data[0].faceId;			
			//var persons = CamFactory.keybank;
			//var person = persons.filter({'id' : 532789});
			var empid = parseInt($scope.empid);
			console.log('empid',empid);
			var person = $scope.getEMP(empid);
			console.log('person',person);
			
			$http({
				url: 'https://api.projectoxford.ai/face/v1.0/verify',
				method: 'POST',
				data: {
					'faceId': faceId,
					'personGroupId': 'keybank',
					'personId': person.personId
				},
				headers: {
					'Content-Type' : 'application/json',
					'Ocp-Apim-Subscription-Key' : 'a1b8c17cb3dc49ba973ddb7049f32684'
				}	
			}).then(function(response){
				var isIdentical = response.data.isIdentical;
				if(isIdentical)
					$scope.msg = 'Face verification successfull, ACCESS GRANTED';
				else
					$scope.msg = 'Face verification failed, ACCESS DENIED';
				console.log('Verify Success',response);
			}, function(response){
				console.log(' verify Failure',response);
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
		
