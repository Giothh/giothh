import { useCookies } from "react-cookie";

interface Props {
	iconsColor: string;
	fontColor: string;
	mainPageBackgroundColor: string;
	buttonBackGroundColor: string;
	navBarBackGroundColor: string;
	userProfilePhotoBoxShadow: string;
	innerImageBlockProjectPage: string;
	defaultBoxShadow: string;
}

export default function SetVariables() {
	const [cookies, setCookie] = useCookies(['night-mode']);

	if (cookies["night-mode"] === undefined) {
		setCookie("night-mode", false)
	}

	var iconsColor: string,
		fontColor: string,
		mainPageBackgroundColor: string,
		buttonBackGroundColor: string,
		navBarBackGroundColor: string,
		userProfilePhotoBoxShadow: string,
		innerImageBlockProjectPage: string,
		defaultBoxShadow: string

	if (cookies["night-mode"] === 'true') {
		userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(204, 219, 222, 0.64)"
		mainPageBackgroundColor = "#2D2D2D"
		buttonBackGroundColor = "#111111"
		navBarBackGroundColor = "#111111"
		iconsColor = "#ffffff"
		fontColor = "#ffffff"
		innerImageBlockProjectPage = "#AFAFAF"
		defaultBoxShadow = "4px 4px 7px 1px rgba(0, 0, 0, 0.55)"

		var newNightMode : Props = {
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
		userProfilePhotoBoxShadow = "0px 0px 35px 1px rgba(29, 30, 31, 0.87)"
		mainPageBackgroundColor = "#D1D1D1"
		buttonBackGroundColor = "#DFDFDF"
		navBarBackGroundColor = "#EDEDED"
		iconsColor = "#000000"
		fontColor = "#000000"
		innerImageBlockProjectPage = "#AFAFAF"
		defaultBoxShadow = "4px 4px 3px 1px rgba(29, 30, 31, 0.25)"
		
		newNightMode = {
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
