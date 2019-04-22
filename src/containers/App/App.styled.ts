import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet
} from 'react-native'

export const style = StyleSheet.create({
  column: {
    width: '50%'
  },
  columnContainer: {
    flexDirection: 'row',
    marginTop: 100
  },
  container: {
    flex: 1
  },
  hamburgerContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15
  },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 0,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    width: 200
  },
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  }
})

export const logo = (props: { source: ImageSourcePropType }) =>
  StyleSheet.create({
    style: {
      height:
        (200 / Image.resolveAssetSource(props.source).width) *
        Image.resolveAssetSource(props.source).height,
      width: 200
    }
  })

export const portfolioImage = (props: { source: ImageSourcePropType }) => {
  const width = Dimensions.get('window').width / 2

  return StyleSheet.create({
    style: {
      height:
        (width / Image.resolveAssetSource(props.source).width) *
        Image.resolveAssetSource(props.source).height,
      width
    }
  })
}
