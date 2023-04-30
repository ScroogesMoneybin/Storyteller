import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const NavigationContainer = styled.div`

    position: sticky;
    top: 0;
    height: 60px;
    min-width: 100%; 
    display: flex; 
    justify-content: space-between; 
   
   

    
   
`;




export const LogoContainer = styled(Link)`

    height: 60px; 
    width: 60px; 
     

  
`
export const GreetingsContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: black;
    font-family: Papyrus, Algerian, Kalam;
    font-size: 40px;
    font-weight: bold;
    color: gold;
    text-shadow: 3px 1px silver;
    text-transform: uppercase;

`
