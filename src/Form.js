import React from 'react'

export default function form() {

  return (
    <div className="container">
      <div className="heading">
        <p><span>Book Appointment</span></p>
        <p>Check out our availability and book the date and time that works for you</p>
      </div>
      <div className="details">
        <div className="title">
          <p>Patients Details</p>
        </div>
        <div className="patients-info">
          <div className="info">
            <label htmlFor="">First Name<span>*</span></label>
            <input type="text" required />
          </div>
          <div className="info">
            <label htmlFor="">Last Name<span>*</span></label>
            <input type="text" required />
          </div>
          <div className="info">
            <label htmlFor="">Phone Number<span>*</span></label>
            <input type="tel" required />
          </div>
          <div className="info">
            <label htmlFor="">Email<span>*</span></label>
            <input type="email" required />
          </div>
          <div className="info">
            <label htmlFor="">PatientId<span>*</span></label>
            <input type="text" required />
          </div>
          <div className="info">
            <label htmlFor="">Gender<span>*</span></label>
            <select name="" id="" required>
              <option value="" selected>Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
      </div>
      

      <div className="slot">
        <div className="title">
          <p>Check Availability</p>
        </div>
      </div>
    </div>
  )
}
