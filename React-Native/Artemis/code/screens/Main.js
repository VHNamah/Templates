/**
 * Author: Vidush H. Namah (2019)
 * 
 * Main Screen - currently default template with no purpose
 */

import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
            <View style={STYLES.container}>
                <Text>We are now in MAIN SCREEN!</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});