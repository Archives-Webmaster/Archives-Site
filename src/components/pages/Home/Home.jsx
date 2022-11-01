import SocialMediaButton from "./SocialMediaButton";
import { InstagramLogoOrange as InstagramLogo, SkulepediaLogo, archivesBanner, EmailLogo } from "../../../assets";
import { setSideBar } from "../../..";
import { useDispatch } from 'react-redux';
import './Home.css';

const Home = () => {
	const dispatch = useDispatch();

    return (
        <>
		<div className="home-banner" onClick={() => dispatch(setSideBar(false))}>
			<div className="home-banner__img">
				<img src={archivesBanner} alt="" />
			</div>
			<div className="home-banner__content">
				<div className="home-banner__content__title">
					<h1>Skule Archives Digital</h1>
				</div>
				<div className="home-banner__content__icons">
					<SocialMediaButton source={SkulepediaLogo} link="https://www.skulepedia.ca"/>
					<SocialMediaButton source={InstagramLogo} link="https://www.instagram.com/skulearchives/"/>
					<SocialMediaButton source={EmailLogo} link="mailto:archivist@skule.ca"/>
				</div>
			</div>
			{/* This is only for the mobile layout. It turns transluscent when mobile layout kicks in. */}
			<div className="home-banner__background"/> 
		</div>
		<div className="somethingelse" onClick={() => dispatch(setSideBar(false))}>
			<div className="home-banner__img">
				<img src={archivesBanner} alt="" />
			</div>
			<div className="home-banner__content">
				<div className="home-banner__content__title">
					<h1>Skule Archives Digital</h1>
				</div>
				<div className="home-banner__content__icons">
					<SocialMediaButton source={SkulepediaLogo} link="https://www.skulepedia.ca"/>
					<SocialMediaButton source={InstagramLogo} link="https://www.instagram.com/skulearchives/"/>
					<SocialMediaButton source={EmailLogo} link="mailto:archivist@skule.ca"/>
				</div>
			</div>
			{/* This is only for the mobile layout. It turns transluscent when mobile layout kicks in. */}
			<div className="home-banner__background"/> 
		</div>

        </>
    );
  }
  
export default Home;
