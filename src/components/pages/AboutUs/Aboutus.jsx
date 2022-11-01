import './Aboutus.css';
import Member from './Member';
import Background from '../../Background/Background';
import Card from '../../Card/Card.jsx';
import Cards from '../../Card/Cards.jsx';
import { Carmelle, Angelina, Mariel, Celin, Youssef} from '../../../assets';
import Footer from '../../Footer/Footer';

const AboutUs = () => {
    return (
      <Background>

        <div className="about-us">

          <div className="about-us__header">
              <div className="section-title">
                <h1>About Us</h1>
              </div>

              <Cards>
                <Card 
                  title="Our Mission" 
                  content="
        The Skule Archives are a collection of stored documents, media, and other paraphernalia that tell the story of our history - which goes back well beyond 100 years. Our legacy as the oldest engineering school in Canada is pretty cool, and we aim to learn more about it and share it with all of you!
To see what we’re currently up to, check out our current projects & events page!
        "
                />
                <Card 
                  title="Why We Care" 
                  content="
        Skule culture is constantly evolving. As F!rosh, we are introduced to the chants, spirit heads, and mascots who are all symbols of our community, and reflect the high value we place on our history and tradition. As we move forward, it’s important to be able to learn from and reflect on our past, both the good and the bad, and strive to make the Skule Community a safe space for everyone. We care because we can celebrate and learn from our history, and there is value in knowing what came before us.
        "
                />
              </Cards>
          </div>  
          
          <div className="section-title">
            <h1>Meet Our Team</h1>
          </div>
          <div className="about-us__team">
            <Member 
              name="Carmelle" 
              discipline="CHEM 2T2 + PEY" 
              role="Archivist" 
              pronouns=""
              image={Carmelle}
              funfact={<>
                  Did you know that SUDS used to be called the Duke of Skule?
              </>}
              linkedin=""
              instagram=""
            />
            <Member 
              name="Angelina" 
              discipline="ECE 2T4 + PEY" 
              role="Vice-Archivist" 
              pronouns=""
              image={Angelina}
              funfact={<> I heard from a grad that the reason the SF water fountains in the hallways are so low is because the designer didn't specify the units, so it was built using centimeters instead of inches as the designer intended. Also I'm learning to play the theremin.</>}
              linkedin=""
              instagram=""
              github=""
            />
            <Member 
              name="Celin" 
              discipline="MECH 2T5" 
              role="Research Director" 
              pronouns=""
              image={Celin}
              funfact={<>My arms are double jointed.</>}
              linkedin=""
              github=""
            />
            <Member 
              name="Mariel" 
              discipline="CHEM 2T2 + PEY" 
              role="Social Media and Events Director" 
              pronouns=""
              image={Mariel}
              funfact={<>We've had 8 cannons before our current Yo Old Mighty Skule Cannon.</>}
              instagram=""
            />
            <Member 
              name="Youssef" 
              discipline="ENGSCI 2T5" 
              role="WebMaster" 
              pronouns=""
              image={Youssef}
              funfact={<>Skulepedia supports wiki racing games!</>}
              instagram=""
            />
          </div>

        </div>
        <Footer/>
      </Background>
    );
  }
  
export default AboutUs;
