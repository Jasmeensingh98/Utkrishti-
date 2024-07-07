import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e9895ca7-e911-4902-9d92-d9e570d18a4e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };



  return (
   <section className="contact">
    <form onSubmit={onSubmit}>
    <h2 className="form-heading">Info Form</h2>
      <div className="input-box">
        {/* <label classname="label-special"><strong>Fullname</strong></label> */}
        <input type="text" className="field" placeholder="Enter Your Name" name='name' required/>
      </div>
      <div className="input-box">
        {/* <label classname="label-special"><strong>Email Address</strong></label> */}
        <input type="email" className="field" placeholder="Enter Your email" name = 'email'required/>
      </div>
      <div className="input-box">
        {/* <label classname="label-special"><strong>Your Message</strong></label> */}
        <textarea name= "message" id ="" className="field mess" placeholder="Enter Your Message" required></textarea>
     </div>
     <button type="submit">Send Message</button>
    </form>
    <div class="socil_item_inner d-flex">
                                  <li><a href="https://www.facebook.com/groups/1650576969081923/"><i class="fab fa-facebook-square"></i></a></li>
                                  <li><a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a></li>
                                  <li><a href="https://twitter.com/intent/tweet"><i class="fab fa-twitter"></i></a></li>
                               </div>
    <div class="contact_info_sec">
                        <h4>Contact Info</h4>
                        <div class="d-flex info_single align-items-center">
                            <i class="fas fa-headset"></i>
                            <span>+91 8009 054294</span>
                        </div>
                        <div class="d-flex info_single align-items-center">
                            <i class="fas fa-envelope-open-text"></i>
                            <span>chitkarauniversity@gmail.com</span>
                        </div>
                        <div class="d-flex info_single align-items-center">
                            <i class="fas fa-map-marked-alt"></i>
                            <span>
                              "Get in touch with us for all things about events - whether you have questions, feedback, or just want to stay connected!"</span>
                        </div>
        
                    </div>
   </section>
   
  )
  
}

export default Contact



