import React from 'react'
import { Animated, Text } from 'react-native'

import { MenuProps } from './Menu.d'
import * as s from './Menu.styled'

class Menu extends React.Component<MenuProps> {
  public render() {
    const { menuBounceValue, toggleMenu } = this.props

    return (
      <Animated.View style={{ ...s.style.overlay, height: menuBounceValue }}>
        <Text style={s.style.closeButton} onPress={toggleMenu}>
          ×
        </Text>
        <Text style={s.style.menuItem}>.design</Text>
        <Text style={s.style.menuItem}>.illustration</Text>
        <Text style={s.style.menuItem}>.about</Text>
        <Text style={s.style.menuItem}>.contact</Text>
      </Animated.View>
    )
  }
}

export default Menu
