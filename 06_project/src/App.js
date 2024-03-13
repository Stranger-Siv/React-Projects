import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  function changeHandler(event){
    const {name,value,checked,type} = event.target ;
    setFormData ((prev)=>({...prev,[name]:type === "checkbox"? checked : value }))
  }

  const [formData,setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",
    streetAddress:"",city:"",state:"",postalCode:"",comments:"false",
    candidates:"false",offers:"false"
  })

  function submitHandler(event){
     event.preventDefault()
     console.log(formData);
  }
  return (
    <div className='flex flex-col items-center mt-2'>
      
      <form onSubmit={submitHandler}>
      <label htmlFor='firstName'>First Name</label>
      <br />
        <input 
        type="text"
        placeholder="Sivram"
        name="firstName" 
        id="firstName"
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
        />

<br />

      <label htmlFor='lastName'>Last Name</label>
      <br />
        <input 
        type="text"
        placeholder="Pradhan"
        name="lastName" 
        id="lastName"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
        />
        <br />

      <label htmlFor='email'>Email</label>
      <br />
        <input 
        type="email"
        placeholder="Programmersiv21@gmail.com"
        name="email" 
        id="email"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
        />

<br />

    <label htmlFor='country'>Country</label>
    <br />
    <select 
    id="country"
    name="country"
    value={formData.country}
    onChange={changeHandler}
    className="outline" 
    >

    <option>India</option>
    <option>USA</option>
    <option>Dubai</option>
    <option>England</option>
    </select>
    <br />
   
    <label htmlFor='streetAddress'>Street Address</label>
      <br />
        <input 
        type="text"
        placeholder="Gate no-3, Parul University"
        name="streetAddress" 
        id="streetAddress"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
        />

<br />

<label htmlFor='city'>City</label>
      <br />
        <input 
        type="text"
        placeholder="Vadodara"
        name="city" 
        id="city"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
        />

<br />

<label htmlFor='state'>State / Province</label>
      <br />
        <input 
        type="text"
        placeholder="Gujarat"
        name="state" 
        id="state"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
        />

<br />

<label htmlFor='postalCode'>Postal Code</label>
      <br />
        <input 
        type="text"
        placeholder="391760"
        name="postalCode" 
        id="postalCode"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
        />

<br />

    <fieldset>

      <legend>By Email</legend>
      <div className='flex'>
      <input 
        type="checkbox"
        name="comments" 
        id="comments"
        value={formData.comments}
        onChange={changeHandler}
        className=""
        />
        <div>
          <label htmlFor='comments' className='m-2'>Comments</label>
          <p className='m-2'>Get notified when someone posts a comment on a posting</p>
        </div>
      </div>

       <div className='flex'>
       <input 
        type="checkbox"
        name="candidates" 
        id="candidates"
        value={formData.candidates}
        onChange={changeHandler}
        className=""
        />
        <div>
          <label htmlFor='candidates' className='m-2'>Candidates</label>
          <p className='m-2'>Get notified when someone posts a comment on a posting</p>
        </div>
       </div>

        <div className='flex'>
        <input 
        type="checkbox"
        name="offers" 
        id="offers"
        value={formData.offers}
        onChange={changeHandler}
        className=""
        />
        <div>
          <label htmlFor='offers' className='m-2'>Offers</label>
          <p className='m-2'>Get notified when someone posts a comment on a posting</p>
        </div>
        </div>
    </fieldset>

    <fieldset>
      <legend>Push Notifications</legend>
      <p>This are delivered via sms to you mobile phone</p>

      <input 
      type='radio'
      id='pushEverything'
      name='pushNotification'
      value='Everything' 
      onChange={changeHandler}
      className='mr-2'
      />
       <label htmlFor='pushEverythin'>Everything</label>

      <br />

       <input 
      type='radio'
      id='pushEmail'
      name='pushNotification'
      value='Same as email' 
      onChange={changeHandler}
      className='mr-2'
      />
       <label htmlFor='pushEverythin'>Same as Email</label>

       <br />

       <input 
      type='radio'
      id='pushNothing'
      name='pushNotification'
      value='No push notification' 
      onChange={changeHandler}
      className='mr-2'
      />
       <label htmlFor='pushEverythin'>No Push Notification</label>

    </fieldset>


    <button 
    className='bg-blue-500 text-white font-bold rounded py-2 px-4'>Save</button>
      
     
      </form>
    </div>
  );
}

export default App;
