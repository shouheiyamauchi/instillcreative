import React from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  TouchableNativeFeedback,
  View
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import logo from "~assets/images/logo.png";
import * as colors from "~src/styles/colors";

import Menu from "../Menu/Menu";

import * as s from "./App.styled";

const column1 = [
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/sibc/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  }
];

const column2 = [
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/sibc/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  },
  {
    cover: require("~assets/images/portfolio/hp/cover.jpg")
  }
];

class App extends React.Component<{}> {
  public state = {
    menuBounceValue: new Animated.Value(0),
    showMenu: false
  };

  public toggleMenu = () => {
    const toValue = this.state.showMenu ? 0 : Dimensions.get("window").height;
    this.setState({ showMenu: !this.state.showMenu });

    Animated.spring(this.state.menuBounceValue, {
      friction: 8,
      tension: 2,
      toValue,
      velocity: 3
    }).start();
  };

  public testLog = () => {
    console.log("Yesss");
  };

  public render() {
    return (
      <ScrollView>
        <View style={s.style.container}>
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
          <View style={s.style.columnContainer}>
            <View style={s.style.column}>
              {column1.map((item, index) => (
                <Image
                  key={index}
                  source={item.cover}
                  style={s.portfolioImage({ source: item.cover }).style}
                />
              ))}
            </View>
            <View style={s.style.column}>
              {column2.map((item, index) => (
                <Image
                  key={index}
                  source={item.cover}
                  style={s.portfolioImage({ source: item.cover }).style}
                />
              ))}
            </View>
          </View>
        </View>
        <Menu
          menuBounceValue={this.state.menuBounceValue}
          toggleMenu={this.toggleMenu}
        />
      </ScrollView>
    );
  }
}

export default App;
