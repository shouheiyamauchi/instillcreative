import React from 'react'
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationScreenProp } from 'react-navigation'
import logo from '~assets/images/logo.png'
import * as colors from '~src/styles/colors'

import Menu from '../Menu/Menu'

import * as s from './AppContainer.styled'

class AppContainer extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public state = {
    menuBounceValue: new Animated.Value(0),
    showMenu: false
  }

  public menuItems = [
    {
      name: '.design',
      onPress: () =>
        this.props.navigation.navigate('Project', { projectID: '.design' })
    },
    {
      name: '.illustration',
      onPress: () =>
        this.props.navigation.navigate('Project', {
          projectID: '.illustration'
        })
    },
    {
      name: '.about',
      onPress: () =>
        this.props.navigation.navigate('Project', { projectID: '.about' })
    },
    {
      name: '.contact',
      onPress: () =>
        this.props.navigation.navigate('Project', { projectID: '.contact' })
    }
  ]

  public toggleMenu = () => {
    const toValue = this.state.showMenu ? 0 : Dimensions.get('window').height
    this.setState({ showMenu: !this.state.showMenu })

    Animated.spring(this.state.menuBounceValue, {
      friction: 8,
      tension: 2,
      toValue,
      velocity: 3
    }).start()
  }

  public render() {
    return (
      <ScrollView>
        <View style={s.style.navBar}>
          <Image source={logo} style={s.logo({ source: logo }).style} />
          <View style={s.style.hamburgerContainer}>
            <TouchableNativeFeedback onPress={this.toggleMenu}>
              <Icon name="bars" size={25} />
            </TouchableNativeFeedback>
          </View>
          <View style={s.style.icons}>
            <Icon name="instagram" size={30} color={colors.SOCIAL_ICONS} />
            <Icon name="facebook" size={30} color={colors.SOCIAL_ICONS} />
            <Icon name="linkedin" size={30} color={colors.SOCIAL_ICONS} />
          </View>
        </View>
        {this.props.children}
        <View style={s.style.footer}>
          <Text style={s.style.footerText}>
            {'© Copyright\nInst.ill Creative 2019'}
          </Text>
        </View>
        <Menu
          menuBounceValue={this.state.menuBounceValue}
          menuItems={this.menuItems}
          toggleMenu={this.toggleMenu}
        />
      </ScrollView>
    )
  }
}

export default AppContainer
