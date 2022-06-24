import Header from "../components/Header";
import '../styles/UniqueProject.css'
import { projectsItem } from '../services/fakeApi'
import { useParams } from "react-router-dom";

type UserParams = {
    id?: string | undefined;
}

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



function UniqueProject(props: Props){
    const params = useParams<UserParams>();
    var paramsId: number = +params.id!

    return(
        <div className="unique-project_page" style={{backgroundColor: props.mainPageBackgroundColor}}>
        <main className="unique-project_page-main-div">
            {projectsItem.filter((val) => {
                if (val.id === paramsId) {
                    return val
                } else {
                    return null
                }
            }, {})
            .map(projectsMap => {
                return(
                    <div className="unique-project_page-main-div_span-blocks" style={{backgroundColor: props.buttonBackGroundColor, boxShadow : props.defaultBoxShadow}}>
                        <iframe className="unique-project_page-main-div_span-blocks_images" src={projectsMap.figma_link} allowFullScreen></iframe>
                        {/* <div className="unique-project_page-main-div_span-blocks_images">
                            <img className="unique-project_page-main-div_span-blocks_images_image" src={coverImage} alt={projectsMap.title} />
                            <a target="_blank" 
                                href="https://www.figma.com/file/ituYyiBwi8rRk55d3upPXc/Animelon-Layout-concept?node-id=0%3A1" 
                                className="unique-project_page-main-div_span-blocks_figma-a" 
                                style={{backgroundColor: props.mainPageBackgroundColor}}>

                                <FigmaLogo size={32} color={props.iconsColor}/>
                            </a>
                        </div>
                         */}
                    </div>
                )
            })}

        </main>
        <Header navBarBackGroundColor={props.navBarBackGroundColor}
              fontColor={props.fontColor}
              iconsColor={props.iconsColor}
              defaultBoxShadow={props.defaultBoxShadow}
              />
        </div>
    )
}


export default UniqueProject;