import React from 'react'
import './Form.css'
// import Layout from '../Layout/Layout'
import Footer from '../Footer/Footer'

function Form() {
  return (
    <div className='form-page-background'>
      <h1 className='form-title'> Chirp Submission</h1>
      <div className='form-div'>
      <h2 className='form-name'>Create a Chirp!!</h2>
      <form >
        <input type="text" placeholder='Name'/><br/>
        <input type="text" placeholder='Status'/><br/>
        <input type="text" placeholder='Profile Picture'/><br/>
        <textarea name="" id="" cols="16" rows="5" placeholder='Comments...'></textarea><br/>
        <button className='sub-button'>Submit</button>
      </form>
      </div>
      <Footer />
    </div>
  )
}

export default Form
