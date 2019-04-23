import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '~src/containers/Home/Home'
import Project from '~src/containers/Project/Project'

const AppNavigator = createStackNavigator(
  {
    Home,
    Project
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
