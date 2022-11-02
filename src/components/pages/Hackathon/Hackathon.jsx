import './Hackathon.css';
import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import Footer from '../../Footer/Footer';
import Background from '../../Background/Background';

const tips = {
    "!!Winner!!": {
        "tips": [
            "This submission is really cool"
                ],
        "image": require("../../../assets/images/trophy1.png")
    },
    "Honorable mention": {
        "tips": [
            "This group did well"
                ],
        "image": require("../../../assets/images/trophy2.png")
    },
    "Most Funny Business": {
        "tips": [
            "Third time's the charm"
                ],
        "image": require("../../../assets/images/trophy3.png")
    },
}

const keys = Object.keys(tips);

const Tips = () => {
    return (
      <Background>
        <div className="tips">

          <h1>Hackathon Submissions:</h1>

          <Dropdowns>
            {keys.map((key) => {
              return <Dropdown title={key} content={tips[key].tips} image={tips[key].image}/>
            })}
          </Dropdowns>
          <br/>
          <h3 style={{textAlign: 'center'}}>Look out for the next big hackathon just around the corner.</h3>
          <p style={{textAlign: 'center'}}>Want to contribute further to Skule Archives, please let us know!</p>
        </div>
        <Footer/>
      </Background>
    );
  }
  
export default Tips;
