import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const categoriesArray = categories.filter(category => category !== "All");
  const [taskName, setTaskName] = useState("Pass the tests");
  const [category, setCategory] = useState("Code");

  
  function handleTaskName(event){
    console.log(taskName);
    setTaskName(event.target.value);
  }
  
  function handleCategory(event){
    console.log(category)
    setCategory(event.target.value);
  }
  
  function handleSubmit(event){
    event.preventDefault();
    const taskObject ={
      text: taskName,
      category: category,
    }
    onTaskFormSubmit(taskObject);
    console.log(taskObject);
  }
 
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" onChange={handleTaskName} value={taskName}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategory} value={category}>
          {/* render <option> elements for each category here */}
          {categoriesArray.map(category => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
