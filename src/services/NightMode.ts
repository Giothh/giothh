import { useCookies } from "react-cookie";

export default function SetVariables() {
	const [cookies, setCookies] = useCookies(['night-mode']);

	// var iconsColor: string,
	// 	fontColor: string,
	// 	mainPageBackgroundColor: string,
	// 	buttonBackGroundColor: string,
	// 	navBarBackGroundColor: string,
	// 	userProfilePhotoBoxShadow: string,
	// 	innerImageBlockProjectPage: string,
	// 	defaultBoxShadow: string

	if (cookies["night-mode"] === 'true') {
		var userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(204, 219, 222, 0.64)"
		var mainPageBackgroundColor = "#2D2D2D"
		var buttonBackGroundColor = "#111111"
		var navBarBackGroundColor = "#111111"
		var iconsColor = "#ffffff"
		var fontColor = "#ffffff"
		var innerImageBlockProjectPage = "#AFAFAF"
		var defaultBoxShadow = "4px 4px 7px 1px rgba(0, 0, 0, 0.55)"

		var newNightMode = {
			iconsColor,
			fontColor,
			mainPageBackgroundColor,
			buttonBackGroundColor,
			navBarBackGroundColor,
			userProfilePhotoBoxShadow,
			innerImageBlockProjectPage,
			defaultBoxShadow
		}
		return newNightMode 

	} else if (cookies["night-mode"] === 'false'){
		var userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(29, 30, 31, 0.87)"
		var mainPageBackgroundColor = "#D1D1D1"
		var buttonBackGroundColor = "#DFDFDF"
		var navBarBackGroundColor = "#EDEDED"
		var iconsColor = "#000000"
		var fontColor = "#000000"
		var innerImageBlockProjectPage = "#AFAFAF"
		var defaultBoxShadow = "4px 4px 3px 1px rgba(29, 30, 31, 0.25)"
		
		var newNightMode = {
			iconsColor,
			fontColor,
			mainPageBackgroundColor,
			buttonBackGroundColor,
			navBarBackGroundColor,
			userProfilePhotoBoxShadow,
			innerImageBlockProjectPage,
			defaultBoxShadow
		}
		return newNightMode 

	} else {
		setCookies('night-mode', false, { path:'/' })

		var userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(29, 30, 31, 0.87)"
		var mainPageBackgroundColor = "#D1D1D1"
		var buttonBackGroundColor = "#DFDFDF"
		var navBarBackGroundColor = "#EDEDED"
		var iconsColor = "#000000"
		var fontColor = "#000000"
		var innerImageBlockProjectPage = "#AFAFAF"
		var defaultBoxShadow = "4px 4px 3px 1px rgba(29, 30, 31, 0.25)"
		
		var newNightMode = {
			iconsColor,
			fontColor,
			mainPageBackgroundColor,
			buttonBackGroundColor,
			navBarBackGroundColor,
			userProfilePhotoBoxShadow,
			innerImageBlockProjectPage,
			defaultBoxShadow
		}
		return newNightMode 
	}

}
