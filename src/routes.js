import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Gallery from './pages/Gallery';
import Photo from './pages/Photo';
import Video from './pages/Video';

import Publish from './components/Publish';


const Routes = () =>
  createAppContainer(
    createBottomTabNavigator({
      Gallery,
      Photo,
      Video,
      Publish
    })
  );

export default Routes