import React from "react";
import { TASK_STATUSES } from "../../constants";

const EditTaskModalComponent = ({
  handleInputChange,
  editTask,
  index,
  taskToEdit
}) => (
  <div
    className="modal fade"
    id="editTaskModal"
    tabIndex="-1"
    role="dialog"
    aria-labelledby="editTaskModalLongTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="editTaskModalLongTitle">
            Modal title
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="inputGroup-sizing-sm-title"
              >
                Title
              </span>
            </div>
            <input
              name="title"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={event => handleInputChange(event, event.target.name)}
              value={taskToEdit.title}
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="inputGroup-sizing-sm-description"
              >
                Description
              </span>
            </div>
            <input
              name="description"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={event => handleInputChange(event, event.target.name)}
              value={taskToEdit.description}
            />
          </div>

          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="inputGroup-sizing-sm-owner"
              >
                Owner
              </span>
            </div>
            <input
              name="owner"
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
              onChange={event => handleInputChange(event, event.target.name)}
              value={taskToEdit.owner}
            />
          </div>

          <div className="dropdown">
            <select
              name="status"
              className="btn"
              onChange={event => handleInputChange(event, event.target.name)}
              value={taskToEdit.status}
            >
              {TASK_STATUSES.map((item, index) => {
                return (
                  <option className="dropdown-item" key={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            data-dismiss="modal"
            onClick={() => editTask(index)}
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default EditTaskModalComponent;
