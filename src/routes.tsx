import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import SetVariables from './services/NightMode';

import About from './pages/About';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import UniqueProject from './pages/UniqueProject';

function RoutesComponent() {
	let nightModeExt2 = SetVariables()

	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path='/' element={<Landing iconsColor={nightModeExt2!.iconsColor}/>}/> */}
				<Route path='/' element={<Landing iconsColor={nightModeExt2!.iconsColor}
					fontColor={nightModeExt2!.fontColor}
					mainPageBackgroundColor={nightModeExt2!.mainPageBackgroundColor}
					buttonBackGroundColor={nightModeExt2!.buttonBackGroundColor}
					navBarBackGroundColor={nightModeExt2!.navBarBackGroundColor}
					userProfilePhotoBoxShadow={nightModeExt2!.userProfilePhotoBoxShadow}
					innerImageBlockProjectPage={nightModeExt2!.innerImageBlockProjectPage} 
					defaultBoxShadow={nightModeExt2!.defaultBoxShadow} />}
				/>
				<Route path='/projects' element={<Projects iconsColor={nightModeExt2!.iconsColor}
						fontColor={nightModeExt2!.fontColor}
						mainPageBackgroundColor={nightModeExt2!.mainPageBackgroundColor}
						buttonBackGroundColor={nightModeExt2!.buttonBackGroundColor}
						navBarBackGroundColor={nightModeExt2!.navBarBackGroundColor}
						userProfilePhotoBoxShadow={nightModeExt2!.userProfilePhotoBoxShadow}
						innerImageBlockProjectPage={nightModeExt2!.innerImageBlockProjectPage} 
						defaultBoxShadow={nightModeExt2!.defaultBoxShadow}/>}
					/>
				<Route path='/projects/:id' element={<UniqueProject iconsColor={nightModeExt2!.iconsColor}
						fontColor={nightModeExt2!.fontColor}
						mainPageBackgroundColor={nightModeExt2!.mainPageBackgroundColor}
						buttonBackGroundColor={nightModeExt2!.buttonBackGroundColor}
						navBarBackGroundColor={nightModeExt2!.navBarBackGroundColor}
						userProfilePhotoBoxShadow={nightModeExt2!.userProfilePhotoBoxShadow}
						innerImageBlockProjectPage={nightModeExt2!.innerImageBlockProjectPage} 
						defaultBoxShadow={nightModeExt2!.defaultBoxShadow}/>}
					/>
				<Route path='/about' element={<About iconsColor={nightModeExt2!.iconsColor}
						fontColor={nightModeExt2!.fontColor}
						mainPageBackgroundColor={nightModeExt2!.mainPageBackgroundColor}
						buttonBackGroundColor={nightModeExt2!.buttonBackGroundColor}
						navBarBackGroundColor={nightModeExt2!.navBarBackGroundColor}
						userProfilePhotoBoxShadow={nightModeExt2!.userProfilePhotoBoxShadow}
						innerImageBlockProjectPage={nightModeExt2!.innerImageBlockProjectPage} 
						defaultBoxShadow={nightModeExt2!.defaultBoxShadow}/>}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesComponent;