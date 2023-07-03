import "./Home.css";
const Home = (props) => {
  return (
    <>
      <div className={props.hide}>
        <div className="main">
          <img
            src={require("../../assets/images/profile.jpg")}
            className="img-profile"
          />
          <div className="homeInfo">
            <h2 style={{ textAlign: "center" }}>LAVNEET SINGH REEL</h2>

            <h4 className="about">
              To obtain knowledge and get exposure towards different situations
              in an organization wherein I contribute to the successful growth
              of an organization using my abilities, Knowledge and Comprehensive
              problem –solving abilities. Always open to new concept/methodology
            </h4>
            <h5 style={{ textAlign: "center" }}>DOB: 20/12/1994</h5>
            <a
              style={{ textAlign: "center" }}
              href={require("../../assets/cv/cv.pdf")}
            >
              <button className="cv">My CV</button>
            </a>
          </div>
        </div>
        <div className="more_info" style={{ marginBottom: "1.5rem" }}>
          <div className="area_interest common">
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Area of Interest
            </h3>
            <div style={{ textAlign: "center" }}>
              <h5>Commerce</h5>
              <h5>Tally ERP</h5>
              <h5>MS Office</h5>
            </div>
          </div>
          <div className="languages common">
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Languages Known
            </h3>
            <div style={{ textAlign: "center" }}>
              <h5>Gurmukhi</h5>
              <h5>English</h5>
              <h5>Hindi</h5>
            </div>
          </div>
          <div className="interest common">
            <h3 style={{ textAlign: "center", textDecoration: "underline" }}>
              Interests
            </h3>
            <div style={{ textAlign: "center" }}>
              <h5>Swimming</h5>
              <h5>Travelling</h5>
              <h5>Playing Sports</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
