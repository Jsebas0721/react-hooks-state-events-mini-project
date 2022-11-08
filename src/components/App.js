import React,{useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasksArray, setTasksArray]= useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterCategories, setFilterCategories] = useState(CATEGORIES);


  function handleAddTask(taskObject){
    const newTaskArray = [...tasksArray, taskObject];
    setTasksArray(newTaskArray);
    
  }



  function handleFilterCategories(event){
    
    setSelectedCategory(event.target.textContent);
    const buttons = event.target.parentElement.children;
      for(let i = 1; i<buttons.length; i++){
        
        if(buttons[i].textContent === event.target.textContent){
          buttons[i].className = "selected";
        }else{
          buttons[i].className = ""
        }
      }

              
    }
    
    const updatedTasksArray = tasksArray.filter(task => {
      if(selectedCategory === "All"){     
        return task;
      }else{
        return task.category === selectedCategory;
      }
    });
    
   
  function handleDeleteTask(deletedTask){
    const updatedTaskList = tasksArray.filter(task => task.text !== deletedTask);
    setTasksArray(updatedTaskList);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={filterCategories} onSelectedCategory={handleFilterCategories}/>
      <NewTaskForm categories={filterCategories} onTaskFormSubmit={handleAddTask}/>
      <TaskList tasks={updatedTasksArray} onHandleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
