import "./Contact.css";
const Contact = (props) => {
  return (
    <>
      <div className={props.hide}>
        <div className="contactMain">
          <div className="first">
            <h1 style={{ textAlign: "center" }}>Contact Me</h1>
            <form>
              <div>
                <span>Enter Your Name</span>
                <input type="text" placeholder="Abc" />
              </div>
              <div>
                <span>Enter Your Email</span>
                <input type="text" placeholder="abc@gmail.com" />
              </div>
              <div className="msg">
                <span>Enter Your Message</span>
                {/* <br /> */}
                <textarea placeholder="Hello...." cols="40" rows="2"></textarea>
              </div>
              <button>Submit</button>
            </form>
          </div>
          <hr style={{ backgroundColor: "lightgray", height: "0.5px" }} />
          <div className="second">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7440.520496349213!2d79.08393699184072!3d21.181818172023995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c122d77a42c9%3A0x56de36021487c940!2sJaripatka%2C%20Nagpur%2C%20Maharashtra%20440014!5e0!3m2!1sen!2sin!4v1688373148256!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <hr
          style={{ backgroundColor: "lightgray", height: "2px", width: "100%" }}
        />
        <div className="contact">
          <h5 style={{ fontWeight: "700" }}>
            <a
              href="mailto:karan.reel@gmail.com"
              style={{ textDecoration: "none", color: "black" }}
            >
              MAIL: karan.reel@gmail.com
            </a>
          </h5>
          <div></div>
          <h5 style={{ fontWeight: "700" }}>PHONE: 9039273469</h5>
        </div>
      </div>
    </>
  );
};
export default Contact;
