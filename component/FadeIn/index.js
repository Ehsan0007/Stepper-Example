import React from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

export default class FadeInView extends React.Component {
    state = {
        visible: false,
        x: new Animated.Value(-50),
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        this.slide();                  // Starts the animation
    }
    slide = () => {
        Animated.spring(this.state.x, {
            toValue: 0,
        }).start();
        this.setState({
            visible: true,
        });
    };

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View
                style={[styles.slideView, {
                    transform: [
                        {
                            translateX: this.state.x
                        }
                    ]
                }]}
            >
                {this.props.children}
                {/* your content, such as this.props.children */}
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    slideView: {
        backgroundColor: '#F5FCFF',
    }
});

