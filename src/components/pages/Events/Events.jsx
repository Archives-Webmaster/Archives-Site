import Dropdown from '../../Dropdown/Dropdown';
import Dropdowns from '../../Dropdown/Dropdowns';
import Background from '../../Background/Background';
import Footer from '../../Footer/Footer';
import './Events.css';

const Events = () => {
    return (
      <Background>
        <div className="events">
          <h1>Events</h1>
          <Dropdowns>
            <Dropdown 
              title="Skule Archives content" 
              content={[<>Coming Soon!</>]} 
              />
            <Dropdown 
              title="Skule Archives content" 
              content={[<>Coming Soon!</>]} 
              />
            <Dropdown 
              title="Skule Archives content" 
              content={[<>Coming Soon!</>]} 
              />
          </Dropdowns>
          
        </div>
        <Footer/>
      </Background>
    );
  }
  
export default Events;
