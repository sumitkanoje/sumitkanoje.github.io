var app = angular.module('IMSApp', [ 'ngMaterial', 'ngAria', 'ngRoute',
		'ngResource', 'datatables' ]);

app.factory('SharedFactory', function($mdSidenav, $mdDialog, $location,
		$resource) {
	return {
		tabs : null,
		AllTabs : [ users = {
			title : 'Users',
			content : 'Tab One Content',
			icon : 'assets/svg/ic_account_circle_white_48px.svg',
			url : 'users'
		}, units = {
			title : 'Units',
			content : 'Tab two Content',
			icon : 'assets/svg/ic_recent_actors_white_48px.svg',
			url : 'units'
		}, invs = {
			title : 'Inventory',
			content : 'Tab three Content',
			icon : 'assets/svg/ic_shopping_cart_white_48px.svg',
			url : 'inventory'
		}, entry = {
			title : 'Entry',
			content : 'Tab four Content',
			icon : 'assets/svg/ic_swap_vert_white_48px.svg',
			url : 'entry'
		}, rec = {
			title : 'Receipts',
			content : 'Tab four Content',
			icon : 'assets/svg/ic_receipt_white_48px.svg',
			url : 'bills'
		}, trs = {
			title : 'Transactions',
			content : 'Inventory update history',
			icon : 'assets/svg/ic_receipt_white_48px.svg',
			url : 'trs'
		}, dl = {
			title : 'Distribution',
			content : 'Distribution of Inventory',
			url : 'dl'
		} ],
		currentTab : null,
		crrentTabIndex : 0,
		selected : [],
		subtoolbar : function() {
			if ($location.path() == '/login')
				return false;
			else
				return true;
		},
		units : $resource('api/units/list').query(),
		heads : [ {
			display : 'ACG',
			value : 'ACG'
		}, {
			display : 'ATG',
			value : 'ATG'
		}, {
			display : 'FP&TG',
			value : 'FPTG'
		}, {
			display : 'ORDNANCE',
			value : 'ORDNANCE'
		}, {
			display : 'SAG',
			value : 'SAG'
		}, {
			display : 'ENGINEER',
			value : 'ENGINEER'
		}, {
			display : '110 (i) E',
			value : '110IE'
		}, {
			display : 'SRE',
			value : 'SRE'
		}, {
			display : 'MI',
			value : 'MI'
		}, {
			display : 'ITG',
			value : 'ITG'
		}, {
			display : 'Misc',
			value : 'MISC'
		} ]
	};
});

app.config(function($sceDelegateProvider, $mdDateLocaleProvider,
		$mdThemingProvider, $mdIconProvider, $routeProvider) {
	$sceDelegateProvider.resourceUrlWhitelist( [
	// Allow same origin resource loads.
	'self',
	// Allow loading from our assets domain. Notice the difference between * and
	// **.
	'https://*.githubusercontent.com/**', 'file://**' ]);

	$mdIconProvider.icon("menu", "assets/svg/menu.svg", 24).icon("share",
			"assets/svg/share.svg", 24).icon("exit",
			"assets/svg/ic_exit_to_app_white_48px.svg", 48);

	$mdDateLocaleProvider.formatDate = function(date) {
		return date ? moment(date).format('DD-MMM-YYYY') : '';
	};

	$mdDateLocaleProvider.parseDate = function(dateString) {
		var m = moment(dateString, 'DD-MMM-YYYY', true);
		return m.isValid() ? m.toDate() : new Date(NaN);
	};

	$routeProvider.

	when('/login', {
		templateUrl : 'login.html',
		controller : 'LoginController as Ctrl'

	}).

	when('/prospect', {
		templateUrl : 'views/prospect.html',
		controller : 'ProspectController as Ctrl'

	}).

	when('/dashboard', {
		templateUrl : 'views/dashboard.html',
		controller : 'DashboardController as Ctrl'

	}).
	
	when('/social', {
		templateUrl : 'views/social.html',
		controller : 'SocialController as Ctrl'

	}).


	when(
			'/home/users',
			{
				templateUrl : 'views/users.html',
				controller : 'UserController as showCase',
				resolve : {
					check : function(SharedFactory, $rootScope, $location) {
						if ($rootScope.auth == null)
							$location.path('/login');
						else if (SharedFactory.tabs != null) {
							console.log('tab index',
									SharedFactory.tabs['users']);
							SharedFactory.crrentTabIndex = SharedFactory.tabs
									.indexOf(SharedFactory.tabs.users);
							console.log('currentTabIndex via router:'
									+ SharedFactory.crrentTabIndex);
						}
					}
				}
			}).

	when(
			'/home/units',
			{
				templateUrl : 'views/units.html',
				controller : 'UnitController as showCase',
				resolve : {
					check : function(SharedFactory) {
						SharedFactory.crrentTabIndex = SharedFactory.tabs
								.indexOf(SharedFactory.AllTabs[1]);
						console.log('currentTabIndex via router:'
								+ SharedFactory.crrentTabIndex);
					}
				}
			}).

	when(
			'/home/inventory',
			{
				templateUrl : 'views/inventory.html',
				controller : 'InventoryController as showCase',
				resolve : {
					check : function(SharedFactory) {
						SharedFactory.crrentTabIndex = SharedFactory.tabs
								.indexOf(SharedFactory.AllTabs[2]);
						console.log('currentTabIndex via router:'
								+ SharedFactory.crrentTabIndex);
					}
				}
			}).

	when(
			'/home/entry',
			{
				templateUrl : 'views/entry.html',
				controller : 'EntryController as showCase',
				resolve : {
					check : function(SharedFactory) {
						SharedFactory.crrentTabIndex = SharedFactory.tabs
								.indexOf(SharedFactory.AllTabs[3]);
						console.log('currentTabIndex via router:'
								+ SharedFactory.crrentTabIndex);
					}
				}

			}).

	when(
			'/home/bills',
			{
				templateUrl : 'views/bills.html',
				controller : 'BillsController as showCase',
				resolve : {
					check : function(SharedFactory) {
						SharedFactory.crrentTabIndex = SharedFactory.tabs
								.indexOf(SharedFactory.AllTabs[4]);
						console.log('currentTabIndex via router:'
								+ SharedFactory.crrentTabIndex);
					}
				}

			}).

	when(
			'/home/trs',
			{
				templateUrl : 'views/trs.html',
				controller : 'TrController as showCase',
				resolve : {
					check : function(SharedFactory) {
						SharedFactory.crrentTabIndex = SharedFactory.tabs
								.indexOf(SharedFactory.AllTabs[4]);
						console.log('currentTabIndex via router:'
								+ SharedFactory.crrentTabIndex);
					}
				}

			}).

	when(
			'/home/dl',
			{
				templateUrl : 'views/dl.html',
				controller : 'DlController as showCase',
				resolve : {
					check : function(SharedFactory) {
						SharedFactory.crrentTabIndex = SharedFactory.tabs
								.indexOf(SharedFactory.AllTabs[4]);
						console.log('currentTabIndex via router:'
								+ SharedFactory.crrentTabIndex);
					}
				}

			}).

	otherwise( {
		redirectTo : '/login'
	});

});

app
		.controller(
				'AppController',
				function AppController($scope, $sce, $rootScope, $mdSidenav,
						$location, SharedFactory, $mdDialog) {
					$scope.SharedFactory = SharedFactory;

					$scope.toggleLeft = function() {
						$mdSidenav('left').toggle();
						console.log('toggled-left');
					};

					$scope.toggleTab = function(index) {
						console.log(SharedFactory.tabs);
						SharedFactory.currentTab = SharedFactory.tabs[index];
						SharedFactory.currentTabIndex = index;

						console.log('toggled-tab: '
								+ SharedFactory.currentTabIndex);
						$location.path('/home/' + SharedFactory.currentTab.url);
					};

					$scope.logout = function() {
						$rootScope.auth = null;
						console.log('Logging out....',
								$scope.SharedFactory.auth);
						$location.path('login');
					};

					$scope.showAdvanced = function(ev, action) {
						$mdDialog
								.show( {
									locals : {
										action : action
									},
									controller : DialogController,
									controllerAs : 'ctrl',
									templateUrl : 'views/dialog.html',
									parent : angular.element(document.body),
									targetEvent : ev,
									clickOutsideToClose : false,
									fullscreen : $scope.customFullscreen
								})
								.then(
										function(saveCart) {
											if (action == 'OUT') {
												$scope.status = $sce
														.trustAsHtml('<a class="btn btn-primary" href="http://localhost/imsui/api/print/iv/'
																+ saveCart.data.id
																+ '" target="_blank"><i class="glyphicon glyphicon-print"></i> IV</a>');
											} else {
												var html = '<a class="btn btn-primary" href="http://localhost/imsui/api/print/ran/'
														+ saveCart.data.id
														+ '" target="_blank"><i class="glyphicon glyphicon-print"></i> RAN</a>';
												html += '&nbsp<a class="btn btn-primary" href="http://localhost/imsui/api/print/crv/'
														+ saveCart.data.id
														+ '" target="_blank"><i class="glyphicon glyphicon-print"></i> CRV</a>';
												$scope.status = $sce
														.trustAsHtml(html);
											}

										},
										function() {
											$scope.status = $sce
													.trustAsHtml('You <i>cancelled</i> the entry.');

										});
					};

					function DialogController($timeout, $q, $scope, $filter,
							SharedFactory, $mdDialog, $http, $resource, $log,
							action) {

						var self = this;
						$scope.SharedFactory = SharedFactory;
						$scope.action = action;
						console.log(action);

						self.querySearch = querySearch;
						self.selectedItemChange = selectedItemChange;
						self.searchTextChange = searchTextChange;
						self.isPushValid = isPushValid;
						self.saveCart = saveCart;

						$scope.selectedUnit = null;
						$scope.selectUnit = function(unit) {
							$scope.cart.ounit = unit.code;
							$scope.cart.ostation = unit.station;
						};

						$scope.cart = null;

						(function initController() {
							if (action == 'IN') {
								$scope.cart = {
									type : action,
									iv : 'NA',
									iunit : 'NA',
									istation : 'NA',
									ounit : 'TEO, HQ BEG & Centre',
									ostation : 'Kirkee, Pune-03',
									head : 'ACG',
									items : [],
									item : {},
									total : 0
								};
							} else if (action == 'OUT') {
								$scope.cart = {
									type : action,
									head : 'ACG',
									iunit : 'TEO, HQ BEG & Centre',
									istation : 'Kirkee, Pune-03',
									note1 : 'Not Applicable',
									items : [],
									item : {},
									total : 0
								};
							}
						})();

						// $scope.cart.date =
						// $filter('date')(Date.parse($scope.cart.date),
						// 'yyyy-MM-dd');
						// $scope.cart.date = new Date();
						// $scope.cart.date = new Date().toISOString().slice(0,
						// 10);
						// $scope.cart.insertDate =
						// $scope.cart.date.toISOString().slice(0, 10);
						// $scope.cart.insertDate =
						// $scope.cart.insertDate.toLocaleFormat('%d-%b-%Y');

						$scope.hide = function() {
							$mdDialog.hide();
						};

						$scope.cancel = function() {
							$mdDialog.cancel();
						};

						function saveCart(answer) {
							$http(
									{
										url : 'api/cart/save',
										method : "POST",
										data : $.param($scope.cart),
										headers : {
											'Content-Type' : 'application/x-www-form-urlencoded'
										}
									})
									.then(
											function(response) {
												console.log('scuccess',
														response);
												console.log(response.data.id);
												answer = response.data.id;
												alert('Cart Saved.');
												$mdDialog.hide(response);
											},
											function(response) { // optional
												console.log('failed');
												alert('Something went wrong, check your inputs.');
											});

						}

						function isPushValid() {
							if ($scope.FormCart.lp.$valid
									&& $scope.FormCart.au.$valid
									&& $scope.FormCart.rate.$valid
									&& $scope.FormCart.vat.$valid) {
								return false;
								// console.log($scope.FormCart.amt.$valid);
							} else {
								return true;
								// console.log($scope.FormCart.amt.$valid);
							}
						}

						$scope.cartPush = function(itm) {
							itm.amt = ((itm.rate * ((+itm.vat + 100) / 100)) * itm.qty)
									.toFixed(2);
							if ($scope.cart.items.indexOf(itm) == -1) {
								$scope.cart.items.push(itm);
								$scope.cart.total += parseFloat(itm.amt);
								console.log('Pushed ', itm);
							} else
								alert('duplicate entry');
						};

						$scope.cartPop = function(itm) {
							// $scope.cart.items.push(itm);
							$scope.cart.items = $scope.cart.items
									.filter(function(el) {
										return el.id !== itm.id;
									});
							$scope.cart.total -= parseFloat(itm.amt);
						};

						$scope.answer = function(answer) {
							$mdDialog.hide(answer);
						};

						/**
						 * Search for states... use $timeout to simulate remote
						 * dataservice call.
						 */
						function querySearch(query) {
							return $http(
									{
										method : 'POST',
										url : 'http://localhost/imsui/api/inv/getByName',
										data : $.param( {
											q : query,
											head : $scope.cart.head
										}),
										headers : {
											'Content-Type' : 'application/x-www-form-urlencoded'
										}
									}).then(function(response) {
								return response.data;
							});
						}

						function searchTextChange(text) {
							$log.info('Text changed to ' + text);
						}

						function selectedItemChange(item) {
							$log
									.info('Item changed to '
											+ JSON.stringify(item));
							$scope.cart.item = item;
						}

					}

				});

app.controller('SocialController', function SocialController($rootScope, $scope,
		$location, SharedFactory, $http) {
	this.blog1 = 'http://digitally.cognizant.com/portfolio-journey-bankings-future/';
	this.blog2 = 'http://digitally.cognizant.com/platform-business-models-win-4-reasons-why/';
	this.blog3 = 'http://digitally.cognizant.com/saving-lives-with-insurance-telematics/';
	this.facebook = 'http://www.facebook.com/Cognizant';
	this.twitter = 'https://twitter.com/CognizantBlog';
	this.linkedin = 'https://www.linkedin.com/company/cognizant-digital-works';
	this.images = [{src:1},{src:1},{src:1},{src:1}];
	
	this.submit = submit;
	

	function submit(username, password) {
		console.log('called');
		$location.path('/dashboard');
		
		
	}
});

app.controller('ProspectController', function ProspectController($rootScope, $scope,
		$location, SharedFactory, $http) {
	this.blog1 = 'http://digitally.cognizant.com/portfolio-journey-bankings-future/';
	this.blog2 = 'http://digitally.cognizant.com/platform-business-models-win-4-reasons-why/';
	this.blog3 = 'http://digitally.cognizant.com/saving-lives-with-insurance-telematics/';
	this.facebook = 'http://www.facebook.com/Cognizant';
	this.twitter = 'https://twitter.com/CognizantBlog';
	this.linkedin = 'https://www.linkedin.com/company/cognizant-digital-works';
	
	this.submit = submit;
	

	function submit(username, password) {
		console.log('called');
		$location.path('/dashboard');
		
		
	}
});

app.controller('DashboardController', function DashboardController($rootScope, $scope,
		$location, SharedFactory, $http) {
	this.name = 'Sumit';
	this.address = 'Pune';
	this.org = 'Cognizant';
	this.determinateValue = 70;
	this.red = 50;
	this.accent = 70;
	this.submit = submit;

	function submit(username, password) {
		console.log('called');
		$location.path('/social');
		
		
	}
});

				
app.controller('LoginController', function LoginController($rootScope, $scope,
		$location, SharedFactory, $http) {
	this.login = login;

	function login(username, password) {

		var credentials = {
			'username' : username,
			'password' : password
		};
		$location.path('/home/prospect');
		$http( {
			url : 'api/login',
			method : "POST",
			data : $.param(credentials),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			if (response.data.length == 1) {
				$rootScope.auth = response.data[0];
				if ($rootScope.auth.role == 'ADMIN') {
					console.log('Admin logged in');
					SharedFactory.tabs = angular.copy(SharedFactory.AllTabs);
					// SharedFactory.currentTab = SharedFactory.tabs[0];
					// console.log('tabs',SharedFactory.tabs);
					$location.path('/home/users');
				} else if ($rootScope.auth['role'] == 'LEDGER') {
					console.log('Ledger logged in');
					console.log('tabs unassigned', SharedFactory.tabs);
					SharedFactory.tabs = angular.copy(SharedFactory.AllTabs);
					SharedFactory.tabs.splice(3, 1);
					SharedFactory.tabs = SharedFactory.tabs.slice(2, 4);
					// SharedFactory.currentTab = SharedFactory.tabs[0];
					console.log('tabs assigned', SharedFactory.tabs);
					console.log('current tab', SharedFactory.tabs[0]);
					// $location.path('/home/'+SharedFactory.currentTab.url);
					$location.path('/home/inventory');
				} else if ($rootScope.auth['role'] == 'ENTRY') {
					console.log('Entry logged in');
					console.log('tabs unassigned', SharedFactory.tabs);
					SharedFactory.tabs = angular.copy(SharedFactory.AllTabs);
					SharedFactory.tabs = SharedFactory.tabs.splice(2, 4);
					SharedFactory.currentTab = SharedFactory.tabs[0];
					console.log('tabs assigned', SharedFactory.tabs);
					console.log('current tab', SharedFactory.tabs[0]);
					$location.path('/home/' + SharedFactory.currentTab.url);
				} else
					console.log('User Role not Defined', SharedFactory.auth);
			} else {
				alert('Login Failed');
			}
		}, function(response) { // optional
			console.log('login failed');
		});

	}
});

app.controller('BillsController', function BillsController($scope,
		SharedFactory, $resource, $http, DTOptionsBuilder, DTColumnDefBuilder) {

	var vm = this;
	vm.bills = $resource('api/bills/list').query();
	vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType(
			'full_numbers');
	vm.dtColumnDefs = [ DTColumnDefBuilder.newColumnDef(0),
			DTColumnDefBuilder.newColumnDef(1),
			DTColumnDefBuilder.newColumnDef(2),
			DTColumnDefBuilder.newColumnDef(3),
			DTColumnDefBuilder.newColumnDef(4),
			DTColumnDefBuilder.newColumnDef(5),
			DTColumnDefBuilder.newColumnDef(6).notSortable(),
			DTColumnDefBuilder.newColumnDef(7).notSortable() ];

	vm.removebill = removebill;

	function removebill(index, bill) {
		if (confirm('Are you sure?') == false) {
			console.log('Bill deletion cancelled');
		} else {
			console.log('Remove Bill clicked');
			$http( {
				method : 'POST',
				url : 'http://localhost/imsui/api/bills/delete',
				data : $.param( {
					'id' : bill.id
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(function(response) {
				console.log('scuccess', response);
				vm.bills.splice(index, 1);

			}, function(response) { // optional
				alert('failed');
			});
		}

	}

});
app.controller('EntryController', function($scope, $location, SharedFactory,
		$mdDialog) {

});
app.controller('InventoryController', function InventoryController($scope,
		SharedFactory, $resource, $http, $mdSidenav, DTOptionsBuilder,
		DTColumnDefBuilder) {

	var vm = this;
	vm.invs = $resource('api/inv/list').query();
	vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType(
			'full_numbers');
	vm.dtColumnDefs = [ DTColumnDefBuilder.newColumnDef(0),
			DTColumnDefBuilder.newColumnDef(1),
			DTColumnDefBuilder.newColumnDef(2),
			DTColumnDefBuilder.newColumnDef(3),
			DTColumnDefBuilder.newColumnDef(4),
			DTColumnDefBuilder.newColumnDef(5),
			DTColumnDefBuilder.newColumnDef(6),
			DTColumnDefBuilder.newColumnDef(7),
			DTColumnDefBuilder.newColumnDef(8).notSortable() ];

	vm.inv2Add = null;
	vm.addinv = addinv;
	vm.modifyinv = modifyinv;
	vm.removeinv = removeinv;
	vm.toggleRight = toggleRight;
	vm.selected = null;

	function toggleRight(index, inv) {
		if (inv != null) {
			inv.index = index;
			SharedFactory.selected = inv;
			console.log(SharedFactory.selected);
			$mdSidenav('invs').toggle();
			console.log('toggled');
		} else {
			$mdSidenav('invs').toggle();
			console.log(vm.selected);
		}
	}

	function addinv() {
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/inv/add',
			data : $.param(vm.inv2Add),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('scuccess', response);
			vm.inv2Add.id = response.data;
			vm.invs.push(angular.copy(vm.inv2Add));
			vm.inv2Add = null;
		}, function(response) { // optional
			alert('failed');
		});
	}

	function modifyinv(inv) {
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/inv/update',
			data : $.param(inv),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('scuccess', response);
			vm.invs.splice(index, 1, angular.copy(inv));

		}, function(response) { // optional
			alert('failed');
		});

	}
	function removeinv(index, inv) {
		if (confirm('Are you sure?') == false) {
			console.log('Bill deletion cancelled');
		} else {
			$http( {
				method : 'POST',
				url : 'http://localhost/imsui/api/inv/delete',
				data : $.param( {
					'id' : inv.id
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(function(response) {
				console.log('scuccess', response);
				vm.invs.splice(index, 1);

			}, function(response) { // optional
				alert('failed');
			});
		}
	}

});
app.controller('UnitController', function UnitController($scope, SharedFactory,
		$resource, $http, $mdSidenav, DTOptionsBuilder, DTColumnDefBuilder) {

	var vm = this;
	vm.units = $resource('api/units/list').query();
	vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType(
			'full_numbers');
	vm.dtColumnDefs = [ DTColumnDefBuilder.newColumnDef(0),
			DTColumnDefBuilder.newColumnDef(1),
			DTColumnDefBuilder.newColumnDef(2),
			DTColumnDefBuilder.newColumnDef(3),
			DTColumnDefBuilder.newColumnDef(4).notSortable() ];

	vm.unit2Add = null;
	vm.addunit = addunit;
	vm.modifyunit = modifyunit;
	vm.removeunit = removeunit;
	vm.toggleRight = toggleRight;
	vm.selected = null;

	function toggleRight(index, unit) {
		if (unit != null) {
			unit.index = index;
			SharedFactory.selected = unit;
			console.log(SharedFactory.selected);
			$mdSidenav('units').toggle();
			console.log('toggled');
		} else {
			$mdSidenav('units').toggle();
			console.log(vm.selected);
		}
	}

	function addunit() {
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/units/add',
			data : $.param(vm.unit2Add),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('scuccess', response);
			vm.unit2Add.id = response.data;
			vm.units.push(angular.copy(vm.unit2Add));
			vm.unit2Add = null;
		}, function(response) { // optional
			alert('failed');
		});

	}
	function modifyunit(unit) {
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/units/update',
			data : $.param(unit),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('scuccess', response);
			vm.units.splice(index, 1, angular.copy(unit));

		}, function(response) { // optional
			alert('failed');
		});

	}
	function removeunit(index, unit) {
		if (confirm('Are you sure?') == false) {
			console.log('Bill deletion cancelled');
		} else {
			$http( {
				method : 'POST',
				url : 'http://localhost/imsui/api/units/delete',
				data : $.param( {
					'id' : unit.id
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(function(response) {
				console.log('scuccess', response);
				vm.units.splice(index, 1);

			}, function(response) { // optional
				alert('failed');
			});
		}
	}

});

app.controller('UserController', function UserController($scope, SharedFactory,
		$resource, $http, $mdSidenav, DTOptionsBuilder, DTColumnDefBuilder) {

	var vm = this;
	// vm.users = $resource('assets/data/data.json').query();
	vm.users = $resource('api/users/list').query();
	vm.roles = [ {
		display : 'Admin',
		value : 'ADMIN'
	}, {
		display : 'Ledger',
		value : 'LEDGER'
	}, {
		display : 'Entry',
		value : 'ENTRY'
	} ];
	vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType(
			'full_numbers');
	vm.dtColumnDefs = [ DTColumnDefBuilder.newColumnDef(0),
			DTColumnDefBuilder.newColumnDef(1),
			DTColumnDefBuilder.newColumnDef(2),
			DTColumnDefBuilder.newColumnDef(3),
			DTColumnDefBuilder.newColumnDef(4).notSortable() ];
	// vm.user2Add = _builduser2Add(1);
	vm.user2Add = null;
	vm.adduser = adduser;
	vm.modifyuser = modifyuser;
	vm.removeuser = removeuser;
	vm.toggleRight = toggleRight;
	vm.selected = null;

	function toggleRight(index, user) {
		if (user != null) {
			user.index = index;
			SharedFactory.selected = user;
			console.log(SharedFactory.selected);
			$mdSidenav('right').toggle();
			console.log('toggled');
		} else {
			$mdSidenav('right').toggle();
			console.log(vm.selected);
		}
	}

	function adduser() {
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/users/add',
			data : $.param(vm.user2Add),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('scuccess', response);
			vm.user2Add.id = response.data;
			vm.users.push(angular.copy(vm.user2Add));
			vm.user2Add = null;
		}, function(response) { // optional
			alert('failed');
		});

	}
	function modifyuser(user) {
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/users/update',
			data : $.param(user),
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('scuccess', response);
			vm.users.splice(index, 1, angular.copy(user));

		}, function(response) { // optional
			alert('failed');
		});

	}
	function removeuser(index, user) {
		if (confirm('Are you sure?') == false) {
			console.log('Bill deletion cancelled');
		} else {
			$http( {
				method : 'POST',
				url : 'http://localhost/imsui/api/users/delete',
				data : $.param( {
					'id' : user.id
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).then(function(response) {
				console.log('scuccess', response);
				vm.users.splice(index, 1);

			}, function(response) { // optional
				alert('failed');
			});
		}
	}
});

app.controller('TrController', function TrController($scope, SharedFactory,
		$resource, $http, $mdSidenav, DTOptionsBuilder, DTColumnDefBuilder) {

	var vm = this;
	// vm.users = $resource('assets/data/data.json').query();
	vm.getInv = getInv;
	
	vm.trs = $resource('api/transactions/list').query();
	vm.units = $resource('api/units/list').query();
	vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType(
			'full_numbers');
	vm.dtColumnDefs = [ DTColumnDefBuilder.newColumnDef(0),
			DTColumnDefBuilder.newColumnDef(1),
			DTColumnDefBuilder.newColumnDef(2),
			DTColumnDefBuilder.newColumnDef(3),
			DTColumnDefBuilder.newColumnDef(4).notSortable() ];
	
	function getInv(unit) {
		$http(
				{
					method : 'POST',
					url : 'http://localhost/imsui/api/inv/getByName',
					data : $.param( {
						head: unit.code
					}),
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					}
				}).then(function(response) {
			vm.invs = response.data;
		});
	}

});

app.controller('DlController', function DlController($scope, SharedFactory,
		$resource, $http, $mdSidenav, $q, $timeout, $log) {

	var self = this;
	
	self.querySearch = querySearch;
	self.selectedItemChange = selectedItemChange;
	self.searchTextChange = searchTextChange;
	self.getDl = getDl;
	// vm.users = $resource('assets/data/data.json').query();
	self.invs = $resource('api/inv/list').query();
	
	function getDl(inv){
		console.log('getDl');
		//$scope.dls = 'Hi'+id;
		$http( {
			method : 'POST',
			url : 'http://localhost/imsui/api/dl/get/'+inv.id,
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded'
			}
		}).then(function(response) {
			console.log('dl get scuccess', response);
			$scope.dls = response.data;
			
		}, function(response) { // optional
			console.log('dl get failed');
		});
		
	};
	
	function querySearch(query) {
		return $http(
				{
					method : 'POST',
					url : 'http://localhost/imsui/api/inv/getByName',
					data : $.param( {
						q : query
					}),
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					}
				}).then(function(response) {
			return response.data;
		});
	}

	function searchTextChange(text) {
		$log.info('Text changed to ' + text);
	}

	function selectedItemChange(item) {
		$log
				.info('Item changed to '
						+ JSON.stringify(item));
		$scope.cart.item = item;
	}
	

});
