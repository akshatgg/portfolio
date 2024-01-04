import WorldLottie from "./WorldLottie";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic to handle form submission (e.g., sending an email) goes here
  };

  return (
    <div className="h-screen bg-[#040404] flex justify-center align-middle items-center">
      <div className="grid grid-cols-2">
        <div className="cols-start-1 text-white bg-[#151030] p-10">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label><br />
            <input type="text" id="name" name="name" placeholder="Name" className="input" />
            <br /><br /><br />

            <label htmlFor="email">Email</label><span>(required)</span><br />
            <input type="text" id="email" name="email" placeholder="Email" className="input" required />
            <br /><br />

            <br /><label htmlFor="phone">Phone</label><br />
            <input type="text" id="phone" name="phone" placeholder="Phone Number" className="input" />
            <br /><br />

            <br /><label htmlFor="subject">Subject</label><span>(required)</span><br />
            <input type="text" id="subject" name="subject" placeholder="Subject" className="input" required />
            <br /><br />

            <br /><label htmlFor="message">Message</label><span>(required)</span><br />
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" className="input"></textarea>
            <br /><br />

            <button type="submit" id="mailButton">Send</button>
          </form>
        </div>
        <div className="cols-start-2 flex items-center justify-center">
          <WorldLottie />
        </div>
      </div>
    </div>
  );
}

export default Contact;
