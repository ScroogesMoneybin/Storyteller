import { Fragment } from 'react';
import Storyteller from '../../components/storyteller/storyteller.components.jsx';
import {BackgroundContainer, StorytellingContainer} from './storytelling.styles.jsx';

const Storytelling = () => {


    return (
      <Fragment>
        
        <BackgroundContainer>
          <StorytellingContainer>
            <Storyteller />
          </StorytellingContainer>
        </BackgroundContainer>  
        
      </Fragment>
    );
  }
  
  export default Storytelling;