import React from "react";

import EditTaskModalComponent from "../modal/edit-task-modal.component";

const Task = ({
  title,
  description,
  owner,
  status,
  index,
  deleteTask,
  editTask,
  setEditState,
  handleInputChange,
  taskToEdit
}) => (
  <div>
    <EditTaskModalComponent
      index={index}
      taskToEdit={taskToEdit}
      handleInputChange={handleInputChange}
      editTask={editTask}
    />

    <div className="card m-3 d-flex">
      <div className="card-body">
        <p className="d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-secondary btn-sm edit"
            aria-label="Edit"
            data-toggle="modal"
            data-target="#editTaskModal"
            onClick={() => setEditState({ title, description, owner, status })}
          >
            <span aria-hidden="true">edit</span>
          </button>

          <button
            type="button"
            className="close "
            aria-label="Close"
            onClick={() => deleteTask(index)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </p>

        <p className="d-flex justify-content-between">
          <span>Title:</span>
          <span>{title}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Description:</span>
          <span>{description}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Owner:</span>
          <span>{owner}</span>
        </p>

        <p className="d-flex justify-content-between">
          <span>Status:</span>
          <span>{status}</span>
        </p>
      </div>
    </div>
  </div>
);

export default Task;
