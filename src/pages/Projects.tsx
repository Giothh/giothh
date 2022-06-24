import React from "react";
import Header from "../components/Header";
import '../styles/Projects.css'
<<<<<<< HEAD
=======
import coverImage from '../images/covers/animelon.png'
>>>>>>> parent of ba245c7c (Updates)
import { Link } from "react-router-dom";
import { projectsItem } from '../services/fakeApi'

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

export default function Projects(props: Props){
    return(
        <div className="project_page" style={{backgroundColor: props.mainPageBackgroundColor}}>
        <main className="project_page-main-div">
            {projectsItem.filter((val) => {
                if (val.id <= 1) {
                    return val
                } else {
                    return null
                }
            }, {})
            .map(projectsMap => {
				const newImage = require(`../images/covers/${projectsMap.images.name}.png`)
                return(
                    <div className="project_page-main-div_span-blocks" key={projectsMap.id}>
                        <Link to={`/projects/${projectsMap.id}`} className="project_page-main-div_span-blocks_images" style={{backgroundColor: props.buttonBackGroundColor, boxShadow : props.defaultBoxShadow }}>
                            {/* <img className="project_page-main-div_span-blocks_images_image" src={`../images/covers/${projectsMap.images.name}.png`} alt={projectsMap.title} /> */}
                            {/* <img className="project_page-main-div_span-blocks_images_image" src={require(`../images/covers/${projectsMap.images.name}`).default} alt={projectsMap.title} /> */}
                            <img className="project_page-main-div_span-blocks_images_image" src={newImage} alt={projectsMap.title} />
                        </Link>
                        <Link to={`/projects/${projectsMap.id}`} className="project_page-main-div_span-blocks_description" style={{color: props.fontColor, backgroundColor: props.buttonBackGroundColor, boxShadow : props.defaultBoxShadow}}>
                            <p>{projectsMap.title}</p>
                        </Link>
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