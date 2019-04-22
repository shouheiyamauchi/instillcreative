import { Animated } from 'react-native'

export interface MenuProps {
  menuBounceValue: Animated.Value
  toggleMenu: () => void
}
