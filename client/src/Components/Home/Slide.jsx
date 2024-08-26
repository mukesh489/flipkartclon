import { Box, styled } from '@mui/material';
import Slide from './Slide';

// Styled components
const Component = styled(Box)`
  display: flex;
  flex-wrap: wrap; /* Ensure components wrap to the next line if needed */
`;

const LeftComponent = styled(Box)`
  flex: 2; /* Adjust based on how much space you want to allocate */
  padding: 10px;
`;

const RightComponent = styled(Box)`
  flex: 1; /* Adjust based on how much space you want to allocate */
  padding: 10px;
  text-align: center;
`;

const MidSlide = ({ products }) => {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Component>
      <LeftComponent>
        <Slide
          data={products}
          title='Deals of the Day'
          timer={true}
          multi={true}
        />
      </LeftComponent>
      <RightComponent>
        <img src={adURL} style={{ width: '100%' }} alt="Promotional Advertisement" />
      </RightComponent>
    </Component>
  );
};

export default MidSlide;
