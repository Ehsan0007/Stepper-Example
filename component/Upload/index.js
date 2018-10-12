import React from 'react';
import {
    Animated, Text, View, StyleSheet, Button, ScrollView, CameraRoll,
    PixelRatio, TouchableOpacity, PermissionsAndroid, Image, NativeModules, Alert
} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
var ImagePicker = NativeModules.ImageCropPicker;
import HeaderComponent from './Header/index'

export default class Upload extends React.Component {
    constructor() {
        super();
        this.state = {
            image: null,
            images: null,
            photos: [],
            avatarSource: null,
            videoSource: null,
            data: [
                { id: 0 },
                { id: 1 },
                { id: 2 },
                { id: 3 },
                { id: 4 }
            ]

        }
    }

    pickMultiple() {
        ImagePicker.openPicker({
            multiple: true,
            waitAnimationEnd: false,
            includeExif: true,
            forceJpg: true,
        }).then(images => {
            this.setState({
                image: null,
                images: images.map(i => {
                    return { uri: i.path, width: i.width, height: i.height, mime: i.mime };
                })
            });
        }).catch(e => alert(e));
    }


    renderAsset(image) {
        if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
            return this.renderVideo(image);
        }

        return this.renderImage(image);
    }

    handleCross = (image) => {
        let { images } = this.state
        var index = images.indexOf(image)
        if (index != -1) {
            images.splice(index, 1);
            this.setState(images)
        }
    }

    renderImage(image) {
        return (
            <View>
                <Image style={styles.imageCircle} source={image} />
                <TouchableOpacity style={styles.cross} onPress={() => this.handleCross(image)}>
                    <Image source={require('./../../component/cross_circle.png')} style={styles.crossIcon} />
                </TouchableOpacity>
            </View>
        )

    }


    render() {
        return (
            <View>
                <View style={{ width: '100%', flexDirection: 'row' }}>
                    <View style={styles.underlined}>
                    </View>
                    <View style={{ width: '80%', marginLeft: 10 }}>
                        <Text style={{ color: '#000000', fontSize: 20 }}>Upload  <Text style={{ color: '#f8c000', fontSize: 20 }}>Picture</Text></Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this.pickMultiple.bind(this)} >
                    <View style={styles.handleCircle}>
                        <Text>Select</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ width: '80%', alignSelf: 'center', justifyContent: 'space-between' }}>
                    {this.state.images && this.state.images.length > 0 ? <Text></Text> : <Text style={{ marginTop: 20, textAlign: 'center' }}>Take a Picture of your vehicle</Text>}

                </View>
                <View style={{ width: '80%', alignSelf: 'center', flexDirection: 'row', marginBottom: 20, marginTop: 20 }}>
                    <View style={styles.chip}>
                        {this.state.images ? this.state.images.map((i) => {
                            return (
                                <View style={styles.chips} key={i}>
                                    {this.renderAsset(i)}
                                </View>
                            )
                        }) : <View style={{ width: '80%', alignSelf: 'center', height: 100, marginBottom: 20 }}></View>}
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        // borderRadius: 35,
        width: 70,
        height: 70,
        margin: 10,
    },
    avatarCircle: {
        borderRadius: 75,
        width: 150,
        height: 150
    },
    button: {
        backgroundColor: 'blue',
        marginBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    chip: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
    },
    chips: {
        // height: 20,
        alignItems: 'center',
        alignSelf: "center",
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    underlined: {
        width: '17%',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        // marginTop: totalSize(3.4),
        // marginRight: totalSize(1),
        borderLeftColor: 'transparent',
        borderTopColor: '#feb505',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        marginTop: 5,
        marginRight: -5,
        // marginLeft: -5,
        // mar
        // backgroundColor: 'green',
        // width: totalSize(6),
    },
    handleCircle: {
        width: 150,
        height: 150,
        borderWidth: 1,
        borderRadius: 75,
        alignSelf: 'center',
        borderColor: '#CCCCCC',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageCircle: {
        width: 80,
        height: 80,
        // resizeMode: 'contain',
        margin: 5,
        borderWidth: 1,
        borderColor: 'transparent',
        borderRadius: 5,
        backgroundColor: 'white',
    },
    cross: {
        width: 20,
        height: 20,
        position: 'absolute',
        top: 0,
        right: 0,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10
    },
    crossIcon: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: -2,
    }
});