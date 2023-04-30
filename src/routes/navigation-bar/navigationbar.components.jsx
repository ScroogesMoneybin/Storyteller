import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as SiteLogo } from '../../assets/emblem.svg';
import {NavigationContainer, LogoContainer, GreetingsContainer} from './navigationbar.styles.jsx';

const NavigationBar = () => {
    return(
        <Fragment>
            <NavigationContainer>
                
                <LogoContainer to= '/'>
                    <SiteLogo style={{ width: 60, height: 60 }} />
                </LogoContainer>
                <GreetingsContainer>
                    Welcome  to  the  Oracle  of  the  Storyteller
                </GreetingsContainer>
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}

export default NavigationBar;