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
              title="Commuter Directorship x Raptors 905" 
              content={[
                <>
                  Skule Commuters is collaborating with RAPTORS 905 event and hosting an event next semester!
                  In order to move forward with planning this, we would like you to fill the form in linktree OR 
                  the link attached to the end of this caption as it’ll help us gauge interest and know how 
                  many people would be attending!
                  All the details are going to be released later once we’re done and you’ll have 
                  all the instructions if you would like to attend.
                  If you have any questions, feel free to reach out to the exec team.
                  Feel free to share this with all your friends, its open to ALL UofT students!!
                  &nbsp;
                  Here is a link to <a href="https://forms.gle/4bKZZTJg1Xfpv2Tq6" style={{color: "blue"}}>Apply</a>
                </>
              ]} 
              />
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