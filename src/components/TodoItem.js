import React from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {

  state = {
    editing: false, 
    updatedText: ""
  }

  handleEditing = () => {
    this.setState({
      editing: true,
      updatedText: this.props.todo.title 
    })
  }

  handleUpdatedText = (e) => {
    let updatedValue = e.target.value;
    this.setState({ updatedText: updatedValue });
  }

  handleUpdatedDone = (event) => {
    if (event.key === "Enter" ) {
      this.setState({ editing: false });
    }
  }

  componentDidMount () {
    this.setState({ updatedText: this.props.todo.title });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.editing !== this.state.editing) {
      if (this.state.editing) {
        console.log("Edit mode activated");
      } else {
        console.log("You are out of the edit mode");
      }  
    }
  }

  componentWillUnmount() {
    alert("Item about to be deleted!");
  }
  
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const { completed, id } = this.props.todo

    let viewMode = {};
    let editMode = {};

    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input 
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {this.state.updatedText}
          </span>
        </div>
        <input 
          type="text" 
          style={editMode} 
          className={styles.textInput} 
          value={this.state.updatedText} 
          onChange={this.handleUpdatedText}
          onKeyDown={this.handleUpdatedDone}
        />
      </li>
    )
  }
}

export default TodoItem