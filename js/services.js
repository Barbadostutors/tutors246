function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and genreate a li
	// element for every one of its items.

		{
			name: 'Skype Homework Assistance',
			price: $20 per hour,
			active:true
		},
    
      {
			name: 'One-On-One Tutoring',
			price: $45 per hour,
			active:false
		},
    
      {
			name: 'Group Tutoring',
			price: $30 per hour,
			active:false
		},
    
      {
			name: 'Essay Writing Service',
			price: $5 perpage  ,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}