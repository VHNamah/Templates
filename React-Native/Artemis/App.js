import React from 'react';
import { StatusBar, StyleSheet, Text, View, UIManager } from 'react-native';
import { AppLoading, Font } from 'expo';
import { Provider } from 'react-redux';

import Store from './code/reducers/Store';
import Colors from './code/constants/Colors';
import Navigator from './code/navigation/Navigator';

export default class App extends React.Component {
  state = {
    LoadingComplete: false
  };

  componentDidMount() {
    console.disableYellowBox = true;
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  LoadResourcesAsync = async() => Promise.all([
    Font.loadAsync({
      'ubuntu-regular': require('./assets/fonts/Ubuntu-Regular.ttf'),
      'ubuntu-bold': require('./assets/fonts/Ubuntu-Bold.ttf'),
      'ubuntu-bedium': require('./assets/fonts/Ubuntu-Medium.ttf'),
      'ubuntu-bight': require('./assets/fonts/Ubuntu-Light.ttf'),
    })
  ]);

  HandleLoadingError = (error) => {
    console.warn(error);
  };

  HandleFinishLoading = () => {
    this.setState({ LoadingComplete: true });
  }

  render() {
    if (!this.state.LoadingComplete) {
      return (
        <AppLoading
          startAsync={this.LoadResourcesAsync}
          onError={this.HandleLoadingError}
          onFinish={this.HandleFinishLoading}
        />
      );
    }

    return (
      <Provider store={Store}>
        <View style={STYLES.container}>
          <StatusBar barStyle='light-content' backgroundColor={Colors.Bluish} />
          <Navigator/>
        </View>
      </Provider>
    );
  }
}

const STYLES = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
