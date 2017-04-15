//state object

var state = {
//going to need an array item here which consists of shopping list items
	shoppingList: []
};



//functions that modify state
	function addItem(state, item) {
		if (item != '') {
			var newItem = {
			name: item,
			toggle: false
			};
			state.shoppingList.push(newItem);
			console.log(state.shoppingList);
			render();
		}
		
	};

	function toggleItem(item) {
		for (var i=0; i<state.shoppingList.length; i++) {
			if (state.shoppingList[i].name===item) {
				//will set to the opposite of what it currently is
			state.shoppingList[i].toggle = !state.shoppingList[i].toggle;
			};
		};
		render();
	};

	function deleteItem(item) {
		for (var i=0; i<state.shoppingList.length; i++) {
			if (state.shoppingList[i].name===item) {
				state.shoppingList.splice(i, 1);
				console.log(i);
			}
		}
		console.log(state.shoppingList);
		render();
		};


//functions that modify the dom
function render() {
	var li = '<li>' +
        '<span class="shopping-item TOGGLE">ITEM</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'

//this will overwrite everything. Make sure that there is nothing in the UL
    $('.shopping-list').html('');  

//this will make sure all items show up in DOM
    for (var i=0; i<state.shoppingList.length; i++) {
      	if (state.shoppingList[i].toggle) {
      		var toggleClass = 'shopping-item__checked'}
    			 else {
    			 	var toggleClass = '';
    			 };
 //make sure to name the variable below something new
		var curLi = li.replace('TOGGLE', toggleClass).replace('ITEM', state.shoppingList[i].name);
      	$('.shopping-list').append(curLi);
      }

};


//event listeners

//event listener for adding items to the list
$('#js-shopping-list-form').submit(function(event) {
	event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());

	//clear the input
	$('#shopping-list-entry').val('');
});
    //event listener for toggling items from list
	$('.shopping-list').on('click','.shopping-item-toggle', function(event) {
		toggleItem($(this).parent().siblings('span').text());
	});
	//event listener for deleting items from the list
	$('.shopping-list').on('click', '.shopping-item-delete', function(event){
		deleteItem($(this).parent().siblings('span').text());
	});





//event listener for toggling between checked and unchecked items
