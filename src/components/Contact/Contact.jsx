import WorldLottie from "./WorldLottie.jsx";
import  { useEffect} from 'react';
import "./ContactStyle.css"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import AOS from "aos";
import 'aos/dist/aos.css'
import Particlesbg from "../Particlesbg.jsx";
function Contact() {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_o3t5lxg', 'template_fgorclf', form.current, 'gpGpva79IfwwFH4Ql')
    .then((result) => {
      console.log('SUCCESS!',result.text);
      
      form.current.reset();

    })
    .catch((error) => {
      console.error('Error sending message:', error);
      // Add code to display an error popup or message
    });
  };





  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 

  return (
    <>
    <Particlesbg />
    <div className="screenw bg-[#040404] flex items-center justify-center ">
    <div className= "ttr text-white bg-[#100D25] p-11 rounded-3xl ml-[10%]   " data-aos="fade-right">
          <form ref={form} onSubmit={sendEmail} className="justify-center">
            <p>Get in Touch</p>
             <p className="text-white text-[50px] font-extrabold mb-[15%] ">Contact me</p>
            <label htmlFor="name">Name</label><br />
            <input type="text" id="name" name="user_name" placeholder="Name" className="input h-10  rounded bg-[#151030]" />
            <br /><br /><br />

            <label htmlFor="email">Email</label><span> (required)</span><br />
            <input type="text" id="email" name="user_email" placeholder="Email" className="input h-10  rounded bg-[#151030]" required />
            <br /><br />

            <br /><label htmlFor="phone">Phone</label><br />
            <input type="text" id="phone" name="user_number" placeholder="Phone Number" className="input h-10  bg-[#151030] rounded" />
            <br /><br />

            <br /><label htmlFor="subject">Subject</label><span> (required)</span><br />
            <input type="text" id="subject" name="subject" placeholder="Subject" className="input h-10  bg-[#151030] rounded" required />
            <br /><br />

            <br /><label htmlFor="message">Message</label><span> (required)</span><br />
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="input  bg-[#151030] rounded"></textarea>
            <br /><br />

            <button type="submit" onClick={sendEmail}  className="bg-[#151030]" id="mailButton">Send</button>
          </form>
        </div>
        <div className="cols-start-2 ml-[200px] " data-aos="fade-left">
          <WorldLottie />
        </div>
      </div>
      </>
  );
}

export default Contact;
