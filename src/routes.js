import { createAppContainer, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import Gallery from './pages/Gallery';
import Photo from './pages/Photo';
import Video from './pages/Video';

const Routes = () =>
  createAppContainer(
    createBottomTabNavigator({
      Gallery,
      Photo,
      Video
    })
  );

export default Routes