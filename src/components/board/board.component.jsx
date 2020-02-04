import React from 'react';

import api from '../../api';

import AddNewTaskModalComponent from '../modal/add-new-task-modal.component';
import BoardSection from '../board-section/board-section.component';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
      task: {
        title: '',
        description: '',
        owner: '',
        status: 'Pending',
      },
      editTaskIndex: 0,
    };
  }

  async componentDidMount() {
    await this.getTasks();
    console.log(this.state.tasks);
  }

  getTasks = async () => {
    const tasks = await api.index('/tasks');
    this.setState({ tasks: tasks.data });
  };

  addTask = async () => {
    const taskToAdd = { ...this.state.task };

    await this.setState(
      state => {
        const tasks = [...state.tasks];
        tasks.push(this.state.task);

        return {
          tasks: tasks,
        };
      },
      () => {
        this.initialTaskState();
      },
    );

    await api.store('/tasks', taskToAdd);

    await this.getTasks();

    console.log(this.state.tasks);
  };

  handleInputChange = (event, propName) => {
    event.persist();

    this.setState(
      state => {
        const task = { ...state.task };
        task[propName] = event.target.value;

        return {
          task: task,
        };
      },
    );
  };

  initialTaskState = () => {
    this.setState(state => {
      const task = { ...state.task };

      task.title = '';
      task.description = '';
      task.owner = '';

      return {
        task: task,
      };
    });
  };

  deleteTask = async index => {
    const taskToDelete = this.state.tasks[index];

    console.log(taskToDelete.id);

    await this.setState(state => {
      let tasks = [...state.tasks];

      tasks = tasks.filter((item, idx) => idx !== index);

      return {
        tasks: tasks,
      };
    });

    await api.destroy('/tasks', taskToDelete.id);
  };

  editTask = async index => {
    const taskToEdit = this.state.tasks[index];

    this.setState(
      state => {
        const tasks = [...state.tasks];

        tasks[index].title = state.task.title;
        tasks[index].description = state.task.description;
        tasks[index].owner = state.task.owner;
        tasks[index].status = state.task.status;

        return {
          tasks: tasks,
        };
      },
      () => {
        this.initialTaskState();
      },
    );

    await api.update('/tasks', taskToEdit.id, this.state.tasks[index]);
  };

  setEditState = editState => {
    this.setState(state => {
      const task = { ...state.task };

      task.title = editState.title;
      task.description = editState.description;
      task.owner = editState.owner;
      task.status = editState.status;

      return {
        task: task,
      };
    });
  };

  render() {
    return (
      <div className="container">
        <AddNewTaskModalComponent
          handleInputChange={this.handleInputChange}
          addTask={this.addTask}
          value={this.state.task}
        />

        <button
          type="button"
          className="btn btn-primary m-2"
          data-toggle="modal"
          data-target="#addNewTaskModal"
        >
          Add Task
        </button>

        <div className="d-flex flex-row row">
          <BoardSection
            boardStatusName="Pending"
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            setEditState={this.setEditState}
            handleInputChange={this.handleInputChange}
            taskToEdit={this.state.task}
            initialTaskState={this.initialTaskState}
          />

          <BoardSection
            boardStatusName="In Progress"
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            setEditState={this.setEditState}
            handleInputChange={this.handleInputChange}
            taskToEdit={this.state.task}
            initialTaskState={this.initialTaskState}
          />

          <BoardSection
            boardStatusName="Done"
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            setEditState={this.setEditState}
            handleInputChange={this.handleInputChange}
            taskToEdit={this.state.task}
            initialTaskState={this.initialTaskState}
          />
        </div>
      </div>
    );
  }
}

export default Board;
