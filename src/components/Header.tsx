import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { Sunglasses } from 'phosphor-react';
import { useState } from 'react';
import { useCookies } from 'react-cookie';


interface Props {
  iconsColor?: string,
  fontColor?: string,
  navBarBackGroundColor?: string,
  defaultBoxShadow?: string
}

interface PropsButton{
  color?: string
}


export function NightModeButton(props: PropsButton) {
  const [cookies, setCookie] = useCookies(['night-mode']);
	const [nightModeConst, setNightModeConst] = useState(false)

  function ChangeAll() {
    setNightModeConst(!nightModeConst)
    setCookie('night-mode', !nightModeConst)
  }
  
	return (
		<div className='header_main-block_nav-bar-right-itens'>
      <button onClick={() => ChangeAll()}>
        <Sunglasses size={25} color={props.color} />
      </button>
    </div>
	)
}

function Header(props: Props) {
  return(
    <div className='header_main-block'>
      <div className='header_main-block_nav-bar' style={{backgroundColor: props.navBarBackGroundColor, boxShadow: props.defaultBoxShadow}}>
        <div className='header_main-block_nav-bar-left-itens'>
          <Link to={'/'} className="header_main-block_nav-bar-left-itens_links" style={{color: props.fontColor}}>Home</Link>
          <Link to={'/projects'} className="header_main-block_nav-bar-left-itens_links" style={{color: props.fontColor}}>Projects</Link>
          <Link to={'/about'} className="header_main-block_nav-bar-left-itens_links" style={{color: props.fontColor}}>about</Link>
        </div>
        <div className='header_main-block_nav-bar-right-itens'>
          <NightModeButton color={props.iconsColor}/>
          {/* <button onClick={() => NightModeButton(!nightModeConst)}>
            <Sunglasses size={25} color={props.iconsColor} />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
