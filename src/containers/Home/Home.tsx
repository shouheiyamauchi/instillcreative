import * as React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import * as projectsData from '~src/data/projects'

import AppContainer from '../AppContainer/AppContainer'

import * as s from './Home.styled'

// const column1 = [
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/sibc/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   }
// ]
//
// const column2 = [
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/sibc/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   },
//   {
//     cover: require('~assets/images/portfolio/hp/cover.jpg')
//   }
// ]

const column1: Array<
  'hp' | 'allure' | 'commercial' | 'slideSpace' | 'uvPro'
> = ['hp', 'allure', 'commercial', 'slideSpace', 'uvPro']
const column2: Array<
  | 'sibc'
  | 'melanoma'
  | 'allureRefresh'
  | 'allureSocial'
  | 'businessInsider'
  | 'dnWedding'
> = [
  'sibc',
  'melanoma',
  'allureRefresh',
  'allureSocial',
  'businessInsider',
  'dnWedding'
]

class Home extends React.Component<{
  navigation: NavigationScreenProp<any, any>
}> {
  public navigateToProject = (projectID: string) => () => {
    this.props.navigation.navigate('Project', { projectID })
  }

  public render() {
    return (
      <AppContainer navigation={this.props.navigation}>
        <View style={s.style.container}>
          <View style={s.style.column}>
            {column1.map((item) => (
              <TouchableOpacity onPress={this.navigateToProject(item)}>
                <Image
                  key={item}
                  source={projectsData.projects[item].cover}
                  style={
                    s.portfolioImage({
                      source: projectsData.projects[item].cover
                    }).style
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={s.style.column}>
            {column2.map((item) => (
              <TouchableOpacity onPress={this.navigateToProject(item)}>
                <Image
                  key={item}
                  source={projectsData.projects[item].cover}
                  style={
                    s.portfolioImage({
                      source: projectsData.projects[item].cover
                    }).style
                  }
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </AppContainer>
    )
  }
}

export default Home
