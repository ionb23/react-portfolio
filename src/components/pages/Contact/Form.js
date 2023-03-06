import React, { useState } from "react";
import "./FormStyle.css";

function Form() {
  // Setting the component's initial state
  const [formData, setFormData] = useState({ firstName: "", email: "", message: "" });

  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    if (name !== "message" || value.length <= 200) {
      // Updating the input's state
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!formData.firstName || !formData.email) {
      alert("Fill out your first name and email, please!");
    } else if (formData.message.length < 20) {
      alert(`Please add more details relating to your request, ${formData.firstName}.`)
    } else {
      // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
      alert(`Hello ${formData.firstName}, your message has been received. You will receive a reply shortly!`);
      setFormData({
        firstName: "",
        email: "",
        message: ""
      });
    }
  };

  // Notice how each input has a `value`, `name`, and `onChange` prop
  return (
    <div>
      <form className="form">
        <input
          value={formData.firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={formData.email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />
        <input
          value={formData.message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Type your message here..."
        />
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
