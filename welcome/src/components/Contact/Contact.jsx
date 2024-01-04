import WorldLottie from "./WorldLottie";
import  { useEffect} from 'react';
import "./ContactStyle.css"
import AOS from "aos";
import 'aos/dist/aos.css'
function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission (e.g., sending an email) goes here
  };
  return (
    <div className="h-screen bg-[#040404] flex items-center justify-center ">
    <div className= "text-white bg-[#100D25] p-11 rounded-3xl ml-[300px]  " data-aos="fade-right">
          <form onSubmit={handleSubmit} className="">
            <p>Get in Touch</p>
             <p className="text-white text-[50px] font-extrabold mb-[15%] ">Contact me</p>
            <label htmlFor="name">Name</label><br />
            <input type="text" id="name" name="name" placeholder="Name" className="input h-10 rounded bg-[#151030]" />
            <br /><br /><br />

            <label htmlFor="email">Email</label><span> (required)</span><br />
            <input type="text" id="email" name="email" placeholder="Email" className="input h-10  rounded bg-[#151030]" required />
            <br /><br />

            <br /><label htmlFor="phone">Phone</label><br />
            <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input h-10 bg-[#151030] rounded" />
            <br /><br />

            <br /><label htmlFor="subject">Subject</label><span> (required)</span><br />
            <input type="text" id="subject" name="subject" placeholder="Subject" className="input h-10 bg-[#151030] rounded" required />
            <br /><br />

            <br /><label htmlFor="message">Message</label><span> (required)</span><br />
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="input bg-[#151030] rounded"></textarea>
            <br /><br />

            <button type="submit" className="bg-[#151030]" id="mailButton">Send</button>
          </form>
        </div>
        <div className="cols-start-2 ml-[200px] " data-aos="fade-left">
          <WorldLottie />
        </div>
      </div>
    
  );
}

export default Contact;
