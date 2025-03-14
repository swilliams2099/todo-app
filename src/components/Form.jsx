import { useState } from "react";

function Form(props) {

    // initial state
    const [name, setName] = useState(""); // useState() returns an array of 2 items
    // 0: current value of state
    // 1: function used to update state
    // ->
    // name = ""
    // setName() is a function to modify name

    function handleSubmit(event) {
        event.preventDefault();
        if (name != "") {
            props.addTask(name); //callback function
        }
        setName(""); // Reset 
    }

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )

}
export default Form;