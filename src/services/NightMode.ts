import { useCookies } from "react-cookie";

export default function SetVariables() {
	const [cookies, setCookies] = useCookies(['night-mode']);

	var iconsColor: string,
		fontColor: string,
		mainPageBackgroundColor: string,
		buttonBackGroundColor: string,
		navBarBackGroundColor: string,
		userProfilePhotoBoxShadow: string,
		innerImageBlockProjectPage: string,
		defaultBoxShadow: string

	if (cookies["night-mode"] === 'true' || cookies["night-mode"] === true ) {
		userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(204, 219, 222, 0.64)"
		mainPageBackgroundColor = "#2D2D2D"
		buttonBackGroundColor = "#111111"
		navBarBackGroundColor = "#111111"
		iconsColor = "#ffffff"
		fontColor = "#ffffff"
		innerImageBlockProjectPage = "#AFAFAF"
		defaultBoxShadow = "4px 4px 7px 1px rgba(0, 0, 0, 0.55)"

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

	} else if (cookies["night-mode"] === 'false' || cookies["night-mode"] === false ){
		userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(29, 30, 31, 0.87)"
		mainPageBackgroundColor = "#D1D1D1"
		buttonBackGroundColor = "#DFDFDF"
		navBarBackGroundColor = "#EDEDED"
		iconsColor = "#000000"
		fontColor = "#000000"
		innerImageBlockProjectPage = "#AFAFAF"
		defaultBoxShadow = "4px 4px 3px 1px rgba(29, 30, 31, 0.25)"
		
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

		userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(29, 30, 31, 0.87)"
		mainPageBackgroundColor = "#D1D1D1"
		buttonBackGroundColor = "#DFDFDF"
		navBarBackGroundColor = "#EDEDED"
		iconsColor = "#000000"
		fontColor = "#000000"
		innerImageBlockProjectPage = "#AFAFAF"
		defaultBoxShadow = "4px 4px 3px 1px rgba(29, 30, 31, 0.25)"
		
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
