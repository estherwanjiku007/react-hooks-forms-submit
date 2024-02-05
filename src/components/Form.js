import React, { useState } from "react";

function Form(props) {
  const [errors,setErrors]=([])
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData,setSubmittedData]=useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault()
    if(firstName>0){
  const formData={
    firstName :firstName,
    lastName  :lastName
  }
  const allArrays=[...formData,submittedData]
  setSubmittedData(allArrays)
  setFirstName("")
  setLastName("")
  setErrors([])
}
else{
  setErrors(["firstName is required"])
}
  }
 const allSubmissions=submittedData.map((data,index)=>{
  return (
    <div key={index}>{data.firstName} {data.lastName}</div>
  )
 })
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
    {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
    <h3>{allSubmissions}</h3>
    </div>
    );
}

export default Form;
