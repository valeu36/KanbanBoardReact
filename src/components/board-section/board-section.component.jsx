import React from "react";

import Task from "../task/task.component";

const BoardSection = ({
  boardStatusName,
  tasks,
  deleteTask,
  editTask,
  setEditState,
  handleInputChange,
  taskToEdit
}) => {
  const convertString = stringToConvert => {
    return stringToConvert
      .toLowerCase()
      .split(" ")
      .join("");
  };

  return (
    <div className="col-4">
      <h3>{boardStatusName}</h3>

      {tasks.map((task, index) => {
        const convertedBoardStatusName = convertString(boardStatusName);
        const convertedTaskStatusName = convertString(task.status);

        if (convertedBoardStatusName === convertedTaskStatusName) {
          return (
            <Task
              title={task.title}
              description={task.description}
              owner={task.owner}
              status={task.status}
              index={index}
              deleteTask={deleteTask}
              editTask={editTask}
              setEditState={setEditState}
              handleInputChange={handleInputChange}
              taskToEdit={taskToEdit}
              key={index}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default BoardSection;
