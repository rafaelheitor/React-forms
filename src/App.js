import React, {useState} from "react";

export default function App() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", employment: ""})

console.log(formData.employment)
  function handleChange(event){
    const {name, value, type, checked} = event.target 
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  return (
   <form>
     <input 
     type="text" placeholder="First Name"
      name="firstName"
      value={formData.firstName}
      onChange={handleChange}
      />

     <input 
     type="text" placeholder="Last Name"
      name="lastName"
      value={formData.lastName}
      onChange={handleChange}
      />

     <input 
     type="text" placeholder="Email" 
      name="email"
      value={formData.email}
      onChange={handleChange}
      />

      <fieldset>
        <legend>Current employment status</legend>

        <input 
          type="radio" 
          id="unemployed"
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />

        <label htmlFor="unemployed">Unemployed</label>

        <input 
          type="radio" 
          id="part-time"
          name="employment"
          value="part-time"
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />

        <label htmlFor="part-time">Part-time</label>

        <input 
          type="radio" 
          id="full-time"
          name="employment"
          value="full-time"
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
       <label htmlFor="full-time">Full time</label>

      </fieldset>

   </form>
  );
}

