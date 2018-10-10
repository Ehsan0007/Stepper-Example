import React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

export default class FadeInView extends React.Component {
    componentWillMount() {
        this.animatedValue = new Animated.Value(0);
    }

    componentDidMount() {
        Animated.timing(this.animatedValue, {
            toValue: 150,
            duration: 1500
        }).start();
    }


    render() {
        const interpolateColor = this.animatedValue.interpolate({
            inputRange: [0, 150],
            outputRange: ['#CCCCCC', '#f8c000']
        })
        const animatedStyle = {
            backgroundColor: interpolateColor,
            // transform: [
            //     { translateY: this.animatedValue }
            // ]
        }
        return (
            <Animated.View style={[this.props.circle ? styles.box : styles.activeLine, animatedStyle]} >
                {this.props.circle ? <Text>{this.props.vala.id}</Text> : <Text></Text>}
            </Animated.View>

        );
    }
}

const styles = StyleSheet.create({
    slideView: {
        backgroundColor: '#F5FCFF',
    },
    box: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 15,
        backgroundColor: "#f8c000",
        justifyContent: 'center',
        alignItems: 'center',
    },
    activeLine: {
        width: 30,
        height: 10,
        backgroundColor: '#f8c000',
        // justifyContent: 'center',
        alignContent: 'center',

    },
});