import Header from '../components/Header'
import '../styles/Landing.css'
import { FigmaLogo, GithubLogo, LinkedinLogo } from 'phosphor-react'
// import { setVariables } from '../services/NightMode'


interface Props {
  iconsColor?: string,
  fontColor?: string,
  mainPageBackgroundColor?: string,
  backgroundColor?: string,
  buttonBackGroundColor?: string,
  navBarBackGroundColor?: string
  userProfilePhotoBoxShadow?: string
  defaultBoxShadow?: string
  innerImageBlockProjectPage?: string
}

function Landing(props: Props){
  return(
    <div className="landing_page" style={{backgroundColor: props.mainPageBackgroundColor}}>
      <main className='landing_page-main-div'>
        <div className='landing_page-main-div_left'>
          <a target="_blank"href={'https://github.com/Giothh'} rel="noreferrer" className='landing_page-main-div_left-buttons' style={{backgroundColor: props.buttonBackGroundColor, boxShadow: props.defaultBoxShadow}} >
            <GithubLogo size={32} color={props.iconsColor} id="landing_page-main-div_left-buttons-icons"/>
            <p id="landing_page-main-div_left-buttons-p" style={{color: props.fontColor}}>/Giothh</p>
          </a>
          <a target="_blank"href={'https://www.linkedin.com/in/thammer-giovanni-99378b129'} rel="noreferrer" className='landing_page-main-div_left-buttons' style={{backgroundColor: props.buttonBackGroundColor, boxShadow: props.defaultBoxShadow}}>
            <LinkedinLogo size={32} color={props.iconsColor} id="landing_page-main-div_left-buttons-icons"/>
            <p id="landing_page-main-div_left-buttons-p" style={{color: props.fontColor}}>/ThammerGiovanni</p>
          </a>
          <a target="_blank"href={'/'} className='landing_page-main-div_left-buttons' rel="noreferrer" style={{backgroundColor: props.buttonBackGroundColor, boxShadow: props.defaultBoxShadow}}>
            <FigmaLogo size={32} color={props.iconsColor} id="landing_page-main-div_left-buttons-icons"/>
            <p id="landing_page-main-div_left-buttons-p" style={{color: props.fontColor}}>/Gioth</p>
          </a>
        </div>
        <div className='landing_page-main-div_right'>
          <img src={'https://avatars.githubusercontent.com/u/107504188?s=400&u=c10565098bf79f47be29f27cbf6c811b1de408e6&v=4'} alt="user_image" style={{boxShadow: props.userProfilePhotoBoxShadow}}/>
        </div>
      </main>
      <Header navBarBackGroundColor={props.navBarBackGroundColor}
              fontColor={props.fontColor}
              iconsColor={props.iconsColor}
              defaultBoxShadow={props.defaultBoxShadow}
              />
    </div>
  );


}

export default Landing;


// [landingPageBackgroundColor,
//   buttonBackGroundColor,
//   navBarBackGroundColor,
//   iconsColor,
//   fontColor]}