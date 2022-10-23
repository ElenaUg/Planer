import {Component} from "react";
import notepad from './notepad.png'

export class Planer extends Component {
    state = {
        userInput: '',
        List: []
    }

    changedList(e){
        this.setState({userInput:e})
    }

    addItem(input) {
        if (input === '') {
            alert ("Füllen Sie das Feld aus!")
        } else {
        let listArray = this.state.List
        listArray.push(input)
        this.setState({List:listArray, userInput:''})
    }}

    crossedItem(event) {
      const li = event.target;
      li.classList.toggle("crossed")
    }

    deleteItem() {
        let listArray = []
        this.setState({List:listArray})
    }

    onFormSubmit(e) {
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
            <div className="container">
            <input placeholder="Was sollst du heute machen?"
                   onChange={(e) => {this.changedList(e.target.value)}}
                   value={this.state.userInput}
                   type="text"
            />
            </div>
                <div className="container">
                    <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add</button>
                </div>
                <ul>
                    {this.state.List.map((item, index) => (
                        <li onClick={this.crossedItem} key={index}>
                            <img src={notepad} alt="Notepad" width="40px"/>{item}</li>))}
                </ul>
                <div className="container">
                    <button className="btn delete" onClick={() => this.deleteItem()}>Delete</button>
                </div>

                </form>
            </div>
        )
}
}