# cs628-pe03-Mrunali
# Input

The ToDo List App accepts user input through a text field. The user types a task description into the input box and clicks the “Add Task” button. Each task entered by the user becomes part of the ToDo list. The app also accepts user interaction through the “Delete” button next to each task.

# Process

The application uses React state management with the useState hook. One state variable stores the current text typed in the input field, and another state variable stores the list of ToDo tasks. When the user clicks “Add Task,” the program checks that the input is not empty, creates a new task object with an id and text, and updates the ToDo list using the spread operator. The map function dynamically renders each task. When the user clicks “Delete,” the filter function removes the selected task from the list.

# Output

The output is a dynamic ToDo list displayed on the screen. After a task is added, it immediately appears in the list with a Delete button. When a task is deleted, the displayed list updates automatically. If no tasks exist, the app shows a message saying no tasks have been added yet.
