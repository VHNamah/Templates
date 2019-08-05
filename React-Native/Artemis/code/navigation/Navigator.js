/**
 * Author: Vidush H. Namah (2019)
 * 
 * Creates Navigation Stack for the entire application
 * All screens supporting navigation should be linked via
 * a key here.
 */

import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import Main from '../screens/Main';

const IMGHeaderBG = require('../../assets/images/headerbg.png');
const IMGBackBTN = require('../../assets/images/icons/back.png');

const NavigationStack = createStackNavigator(
    {
        Main: { 
            screen: Main,
            navigationOptions: ({ navigation }) => {
                return {
                    title: 'WELCOME TO RN2019',
                    headerLeft: null
                }
            }
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                titleStyle: {
                    fontFamily: Fonts.PrimaryLight,
                },
                headerStyle: {
                    backgroundColor: Colors.Primary,
                    borderBottomWidth: 0
                },
                headerBackground: (
                    <Image source={IMGHeaderBG} style={STYLES.Header} resizeMode="cover" />
                ),
                headerTitleStyle: {
                    color: Colors.White,
                    fontFamily: Fonts.Primary
                },
                headerTintColor: '#222222',
                headerLeft: props => (
                    <TouchableOpacity onPress={ props.onPress } style={ STYLES.HeaderLeft }>
                        <Image source={IMGBackBTN} style={ STYLES.HeaderLeftItem } resizeMode="contain" />
                    </TouchableOpacity>
                )
            }
        }
    }
);

const STYLES = StyleSheet.create({
    Header: {
        flex: 1
    },
    HeaderLeft: {
        padding: 25
    },
    HeaderLeftItem: {
        height: 25
    }
});

export default Navigator = createAppContainer(NavigationStack);