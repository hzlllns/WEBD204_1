// ---- GROCERY LIST

var allTasks = document.getElementById('allTasks');
var taskInput = document.getElementById('taskInput');
var addBtn = document.getElementById('addBtn');
var counter = document.getElementById('counter'); 


var TaskObject = function(taskText){
	var self = this;
	self.name = "taskName"; // property of the task
	self.listItem; // external variable, can be accessed anyway

	self.init = function(){

		// create html elements
		self.listItem = document.createElement("li");
		var text = document.createElement("text");
		text.innerText = taskText;
		var deleteBtn = document.createElement("button");
		var assignSelect = document.createElement("select");

		// assign dropdown
		assignSelect.onchange = function() {
		    alert("You assigned this to "+this.value);
		    self.listItem.setAttribute("class", this.value);
		}

		assignSelect.options.add( new Option("", "", true, true) );
		assignSelect.options.add( new Option("Marie", "Marie") );
		assignSelect.options.add( new Option("Bob", "Bob") );

		// delete button
		deleteBtn.setAttribute("class", "deleteBtn");
		deleteBtn.innerHTML = "&times;";
		deleteBtn.onclick = self.deleteMe;

		// combine HTML elements
		self.listItem.appendChild(text);
		self.listItem.appendChild(deleteBtn);
		allTasks.appendChild(self.listItem);
		self.listItem.appendChild(assignSelect);
	}

	self.deleteMe = function(){ // When DELETE button is clicked
		var parent = self.listItem.parentNode;
		parent.removeChild(self.listItem);
	}
}

addBtn.onclick = function(){ // When ADD button is clicked

	if (taskInput.value.length === 0) { // If input field is empty...
		alert("Field cannot be empty");
	} else {
		var newTask = new TaskObject(taskInput.value); // ELSE Put text inside object
		newTask.init();
	}

	listitems = allTasks.getElementsByTagName("li").length; // Get total number of tasks
 	counter.innerHTML = listitems;  

 	var placeholder = document.getElementById('placeholder'); // Hide placeholder
 	placeholder.style.display = "none";
}












