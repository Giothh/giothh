import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SetVariables from './services/NightMode';

import About from './pages/About';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import UniqueProject from './pages/UniqueProject';

function RoutesComponent() {
	let nightModeExt2 :any = SetVariables()

	// console.log(nightModeExt3)

	// let nightModeExt2 = {
	// 	userProfilePhotoBoxShadow : "0px 0px 35px 1px rgba(204, 219, 222, 0.64)",
	// 	mainPageBackgroundColor : "#2D2D2D",
	// 	buttonBackGroundColor : "#111111",
	// 	navBarBackGroundColor : "#111111",
	// 	iconsColor : "#ffffff",
	// 	fontColor : "#ffffff",
	// 	innerImageBlockProjectPage : "#AFAFAF",
	// 	defaultBoxShadow : "4px 4px 7px 1px rgba(0, 0, 0, 0.55)"
		
	// }

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Landing iconsColor={nightModeExt2.iconsColor}
					fontColor={nightModeExt2.fontColor}
					mainPageBackgroundColor={nightModeExt2.mainPageBackgroundColor}
					buttonBackGroundColor={nightModeExt2.buttonBackGroundColor}
					navBarBackGroundColor={nightModeExt2.navBarBackGroundColor}
					userProfilePhotoBoxShadow={nightModeExt2.userProfilePhotoBoxShadow}
					innerImageBlockProjectPage={nightModeExt2.innerImageBlockProjectPage} 
					defaultBoxShadow={nightModeExt2.defaultBoxShadow} />}
				/>
				<Route path='/projects' element={<Projects iconsColor={nightModeExt2.iconsColor}
						fontColor={nightModeExt2.fontColor}
						mainPageBackgroundColor={nightModeExt2.mainPageBackgroundColor}
						buttonBackGroundColor={nightModeExt2.buttonBackGroundColor}
						navBarBackGroundColor={nightModeExt2.navBarBackGroundColor}
						userProfilePhotoBoxShadow={nightModeExt2.userProfilePhotoBoxShadow}
						innerImageBlockProjectPage={nightModeExt2.innerImageBlockProjectPage} 
						defaultBoxShadow={nightModeExt2.defaultBoxShadow}/>}
					/>
				<Route path='/projects/:id' element={<UniqueProject iconsColor={nightModeExt2.iconsColor}
						fontColor={nightModeExt2.fontColor}
						mainPageBackgroundColor={nightModeExt2.mainPageBackgroundColor}
						buttonBackGroundColor={nightModeExt2.buttonBackGroundColor}
						navBarBackGroundColor={nightModeExt2.navBarBackGroundColor}
						userProfilePhotoBoxShadow={nightModeExt2.userProfilePhotoBoxShadow}
						innerImageBlockProjectPage={nightModeExt2.innerImageBlockProjectPage} 
						defaultBoxShadow={nightModeExt2.defaultBoxShadow}/>}
					/>
				<Route path='/about' element={<About iconsColor={nightModeExt2.iconsColor}
						fontColor={nightModeExt2.fontColor}
						mainPageBackgroundColor={nightModeExt2.mainPageBackgroundColor}
						buttonBackGroundColor={nightModeExt2.buttonBackGroundColor}
						navBarBackGroundColor={nightModeExt2.navBarBackGroundColor}
						userProfilePhotoBoxShadow={nightModeExt2.userProfilePhotoBoxShadow}
						innerImageBlockProjectPage={nightModeExt2.innerImageBlockProjectPage} 
						defaultBoxShadow={nightModeExt2.defaultBoxShadow}/>}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesComponent;