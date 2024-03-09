import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  // const [firstName,setFirstName] = useState("")
  // const [lastName,setLastName] = useState("")


  // function changeFirstnameHandler(event){
  //   setFirstName(event.target.value)
  // }

  // function changeLastnameHandler(event){
  //   setLastName(event.target.value)
  // } 


  const [formData , setFormData] = useState({firstName:"" , lastName:"",email:"",comment:"",isVisible:"true",mode:"",favCar:""})

  function changeHandler(event){
    const {name,value,checked,type} = event.target;
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
         [name]: type ==="checkbox" ? checked :value


      }
    } )
  }

  function submitHandler(event){
    event.preventDefault()
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
      <br></br>
        <input 
          type="text"
          placeholder="First Name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br></br>
        <br></br>

        <input 
          type="text"
          placeholder="Last Name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br></br>
        <br></br>

        <input 
          type="email"
          placeholder="Enter your email"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />  

        <br></br>
        <br></br>

        <textarea 
          type="text"
          placeholder="Enter your comments"
          onChange={changeHandler}
          name="comment"
          value={formData.comment}
        />  
        <br></br>
        <br></br>

        <input 
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          id="isVisible"
          checked={formData.isVisible}
        /> 
        <label htmlFor='isVisible'>Am I visible ?</label>


        <br></br>
        <br></br>

        <fieldset>
        <legend>Mode:</legend>

        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Online-Mode"
          id="Online-Mode"  
          checked={formData.mode === "Online-Mode"}
        /> 
        <label htmlFor='Online-Mode'>Online Mode</label>

        <input 
          type="radio"
          onChange={changeHandler}
          name="mode"
          value="Offline-Mode"
          id="Offline-Mode"
          checked={formData.mode === "Offline-Mode"}
        /> 
        <label htmlFor='Offline-Mode'>Offline Mode</label>

        </fieldset>

        <label htmlFor='favCar'>Tell me your Favourite car </label>

        <select 
        name="favCar"
        id="favCar"
        value={formData.favCar}
        onChange={changeHandler}>
        
        <option value="scorpio">Scorpio</option>
        <option value="thar">Thar</option>
        <option value="xuv700">xuv700</option>
        <option value="fortuner">Fortuner</option>
        <option value="mustang">Mustang</option>
        </select>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
