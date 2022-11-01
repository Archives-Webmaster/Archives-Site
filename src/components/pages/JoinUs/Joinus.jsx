import Footer from "../../Footer/Footer";
import Background from "../../Background/Background";
import "./Joinus.css";

const JoinUs = () => {
    return (
      <Background>
        <div className="join-us">
            <div className="section-title">
                  <h1>Newsletter Signup</h1>
            </div>

            <div className="formEmbed">
              <iframe title="formEmbed" src="https://docs.google.com/forms/d/e/1FAIpQLSchUtj1AcZpnZW_fe6Hwg40hJc9tqnsRMQtsbLoKnmHgRZ8-w/viewform" width="100%" height="700" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        <Footer/>
      </Background>
    );
  }
  
export default JoinUs;
