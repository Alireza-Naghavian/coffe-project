import { Button } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
const initialData={
    userName: "",
    email: "",
    subject: "",
    body: "",
}
function ContactDetail() {
  const [contactData, setContactData] = useState(initialData);
  const changeHandler = ({ target }) => {
    const { value, name } = target;
    setContactData({ ...contactData, [name]: value });
  };
  const sumbitHandler =async(e)=>{
    e.preventDefault();
    if(!contactData.userName||!contactData.email||!contactData.subject||!contactData.body)return;
     const data =await axios.post(`http://localhost:4000/messages`,{...contactData});
    if(data.status === 201){
        setContactData(initialData)
    }


  }
  return (
    <div className="container mx-auto pt-5">
      <div className="container ">
        <div className="section-title">
          <h4
            className="text-[2rem]  font-bold text-primary"
            style={{ letterSpacing: "5px" }}
          >
            Contact Us
          </h4>
          <h1 className="text-white text-[2.1rem]  font-bold">
            Feel Free To Contact
          </h1>
        </div>
        <div className="">
          <div className=" px-3 pb-2">
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Address</h4>
              <p>123 Street, New York, USA</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Phone</h4>
              <p>+012 345 6789</p>
            </div>
            <div className="col-sm-4 text-center mb-3">
              <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
              <h4 className="font-weight-bold">Email</h4>
              <p>info@example.com</p>
            </div>
          </div>
          <div className=" grid relative grid-cols-2 grid-flow-row ">
            <div className=" ">
              <iframe
                className="w-full h-full min-h-[300px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                allowFullScreen=""
                aria-hidden="false"
              ></iframe>
            </div>
            <div className="">
              <div className="contact-form w-full h-full !min-h-[300px]">
                <form
                onSubmit={sumbitHandler}
                  name="sentMessage"
                  className="w-full h-full !min-h-[300px]"
                  id=""
                  noValidate="novalidate"
                >
                  <div className="control-group ">
                    <input
                      name="userName"
                      value={contactData.userName}
                      onChange={changeHandler}
                      type="text"
                      className="form-control bg-transparent p-4"
                      id="name"
                      placeholder="Your Name"
                      required="required"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      value={contactData.email}
                      name="email"
                      onChange={changeHandler}
                      type="email"
                      className="form-control bg-transparent p-4"
                      id="email"
                      placeholder="Your Email"
                      required="required"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <input
                      value={contactData.subject}
                      name="subject"
                      onChange={changeHandler}
                      type="text"
                      className="form-control bg-transparent p-4"
                      id="subject"
                      placeholder="Subject"
                      required="required"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                  <div className="control-group">
                    <textarea
                      value={contactData.body}
                      name="body"
                      onChange={changeHandler}
                      className="form-control bg-transparent py-3 px-4"
                      rows="5"
                      id="message"
                      placeholder="Message"
                      required="required"
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div>
                    <Button
                      className="text-white bg-primary mt-8 ml-2 f py-3 px-5"
                      type="submit"
                      id="sendMessageButton"
                    >
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetail;
