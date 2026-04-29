document.addEventListener("DOMContentLoaded", () => {
const myToDo = [{description: "Call a client"}, 
				{description: "Send my boss an email"}, 
				{description: "Wash the dishes"}];
// create function buildToDo
function buildToDo(task) {
	const taskList = document.querySelector("#tasks");
	const newTask = document.createElement("li"); //create the new li element

	newTask.textContent = task.description; //add the task as the textContent

	taskList.append(newTask); //append the li element to tasklist
	}
	myToDo.forEach(task => {
		buildToDo(task)
	});

	// add event listener to form
const form = document.querySelector("#create-task-form");

function handleSubmit(event){ 
	event.preventDefault(); //add preventDefault()
	const taskInput = event.target.querySelector("#new-task-description").value; //select the correct target from the event and saving it as taskInput

	const newTask = { //object
		description: taskInput
		};	

	myToDo.push(newTask);
	buildToDo(newTask); //call the function
	//event.target.reset(); //clear the input
	
	//console.log("Task has been submitted");
	//console.log(newTask);
	};

form.addEventListener("submit", (event) => { //add submit for type of event and add arrow function
	handleSubmit(event);
	});
});

