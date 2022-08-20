import Header from "../components/Header";
import '../styles/About.css'

interface Props {
    iconsColor?: string
    fontColor?: string
    mainPageBackgroundColor?: string
    backgroundColor?: string
    buttonBackGroundColor?: string
    navBarBackGroundColor?: string
    userProfilePhotoBoxShadow?: string
    defaultBoxShadow?: string
    innerImageBlockProjectPage?: string
}


export default function About(props: Props){
    return(
        <div className="about_page" style={{backgroundColor: props.mainPageBackgroundColor}}>
            <main className='about_page-main-div'>
                <div className='about_page-main-div_left'>
                    <div className="about_page-main-div_left-paragraphs" style={{color: props.fontColor}}>
                        <p>Hi There!</p>
                        <br/><br/>
                        <p>My Name is Thammer Giovanni, I'm a full stack web developer</p>
                        <br/><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra sit amet aliquam id diam. Amet nulla facilisi morbi tempus iaculis urna. Facilisis volutpat est velit egestas. Pharetra pharetra massa massa ultricies mi quis. Pharetra sit amet aliquam id. Rhoncus dolor purus non enim.</p>
                        <p>A scelerisque purus semper eget duis at tellus at urna. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Odio ut sem nulla pharetra diam sit. Pretium lectus quam id leo in. </p>
                        <p>Cursus euismod quis viverra nibh. Tortor at risus viverra adipiscing at in tellus. Leo vel orci porta non pulvinar. Risus quis varius quam quisque id diam. Bibendum at varius vel pharetra vel turpis. Sed nisi lacus sed viverra tellus in hac. </p>
                    </div>
                </div>
                <div className='about_page-main-div_right'>
                <img src={'https://avatars.githubusercontent.com/u/107504188?s=400&u=c10565098bf79f47be29f27cbf6c811b1de408e6&v=4'} alt="user_image" style={{boxShadow: props.userProfilePhotoBoxShadow}}/>
                </div>
            </main>
            <Header navBarBackGroundColor={props.navBarBackGroundColor}
                    fontColor={props.fontColor}
                    iconsColor={props.iconsColor}
                    defaultBoxShadow={props.defaultBoxShadow}
                    />
        </div>
    )
}