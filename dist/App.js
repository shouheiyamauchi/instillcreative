import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '~src/containers/Home/Home';
import Illustration from '~src/containers/Illustration/Illustration';
import Project from '~src/containers/Project/Project';
const AppNavigator = createStackNavigator({
    Home,
    Illustration,
    Project
}, {
    headerMode: 'none',
    initialRouteName: 'Home'
});
export default createAppContainer(AppNavigator);
//# sourceMappingURL=App.js.map