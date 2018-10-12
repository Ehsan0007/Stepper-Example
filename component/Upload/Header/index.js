import * as React from "react";
import { Image, View, Text, TouchableOpacity ,StyleSheet} from "react-native";
import { totalSize, width } from 'react-native-dimension'
// import styles from "./styles";

export default class HeaderComponent extends React.PureComponent {
    render() {
        return (
            <View style={styles.vehicleListHeader}>
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <TouchableOpacity onPress={() => this.props.back()} style={styles.back}>
                            <Image style={styles.filterIconStyle} source={this.props.icon} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.pageTitle}>{this.props.headerText}</Text>
                    </View>
                    <View style={styles.sortContainer}>
                        {this.props.sortIcon &&
                            <View style={styles.sort}>
                                <View style={{ width: width(5) }}>
                                    <TouchableOpacity onPress={() => this.props.modalVisibleAction()} style={styles.sortOpen}>
                                        <Image style={styles.filterIconStyle} source={this.props.sortIcon} />
                                    </TouchableOpacity>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={() => this.props.openDrawerRight()} style={styles.sortOpen}>
                                        <Image style={styles.filterIconStyle} source={this.props.filterIcon} />
                                    </TouchableOpacity>
                                </View>
                            </View>}
                    </View>
                </View >
            </View >
        );
    }
}


const styles: any = StyleSheet.create({
    headerContainer: {
        width: width(50),
        alignItems: 'center',
        alignSelf: 'center',
    },
    iconContainer: {
        alignSelf: 'center',
        width: width(20),
    },
    sortContainer: {
        alignSelf: 'center',
        width: width(20),
    },
    header: {
        width: width(90),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    vehicleListHeader: {
        backgroundColor: '#f8c000',
        padding: totalSize(2.2),
    },
    pageTitle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: totalSize(1.8),
        fontFamily: 'Raleway-Bold'
    },
    sort: {
        width: width(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
    },
    filterIconStyle: {
        height: totalSize(1.8),
        width: totalSize(1.8)
    },
    getBody: {
        flex: 1
    },
    back: {
        height: totalSize(4),
        justifyContent: 'center',
    },
    sortOpen: {
        height: totalSize(4),
        width: width(5),
        justifyContent: 'center',
    }
});