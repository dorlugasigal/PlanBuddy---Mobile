
import React from 'react';
import { ListItem, View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import ProgressCircle from 'react-native-progress-circle'
import moment from "moment";


class ScheduleScreen extends React.Component {
    componentWillMount() {
        this.setState({
            dataSource: {
                id: "5ca512a5eb45be0b842a164d",
                parent_phone: "0542222222",
                full_name: "child1",
                phone: "0542223333",
                schedule: [
                    {
                        name: "Take a Bus",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe9uV7nTxvd0yE0-Db0cTqsJ8L3TUjoPzAr73nka0eK6rvU4OZg",
                        startTime: "04/04/2019 15:00:00",
                        endTime: "04/04/2019 15:20:00",
                        actionList: [
                            "Seatbelt",
                            "Sit up Straight"
                        ],
                        note: null,
                        state: false
                    },
                    {
                        name: "School",
                        image: "http://p5cdn4static.sharpschool.com/UserFiles/Servers/Server_3009193/Image/Migration/elementaryschool.gif",
                        startTime: "04/04/2019 15:20:00",
                        endTime: "04/04/2019 15:40:00",
                        actionList: [
                            "Study",
                            "geography class",
                            "Hello to friends"
                        ],
                        note: null,
                        state: false
                    },
                    {
                        name: "Eat a snack",
                        image: "https://www.milksnack.com/wp-content/uploads/2017/06/produktbilder-kuchensnacks_voll.png",
                        startTime: "04/04/2019 15:40:00",
                        endTime: "04/04/2019 16:00:00",
                        actionList: [
                            "eat Cheetos",
                            "eat Chocolate"
                        ],
                        note: null,
                        state: false
                    },
                    {
                        name: "Play BasketBall",
                        image: "https://townsquare.media/site/668/files/2018/02/Basketball-Hoop2.jpg",
                        startTime: "04/04/2019 16:00:00",
                        endTime: "04/04/2019 16:20:00",
                        actionList: [
                            "win them all",
                        ],
                        note: "Habe Fun!",
                        state: false
                    },
                    {
                        name: "Home work",
                        image: "https://www.westonschools.org/wp-content/uploads/2018/01/homework-icon-1.png",
                        startTime: "04/04/2019 16:20:00",
                        endTime: "04/04/2019 17:00:00",
                        actionList: [
                            "Geography homework",
                            "and mathmatics"
                        ],
                        note: null,
                        state: false
                    }
                ],
            }
        })
    }

    _keyExtractor = (item, index) => item.name;
    getPrecentage = (item) => {
        var today = new Date();

        //use Math.abs to avoid sign
        var q = Math.abs(today - new Date(item.startTime));
        var d = Math.abs(new Date(item.endTime) - new Date(item.startTime));
        return (Math.round((q / d) * 100));
    }
    _renderItem = ({ item }) => (

        (new Date().getTime() > new Date(item.startTime.toString()))
            ?
            <View style={styles.container} >
                <View style={styles.buttonContainer}>
                    <Text>
                        Starts at: {item.startTime.toString().split(' ').join('\n')}
                    </Text>
                    <Text>
                        Ends at: {item.endTime.toString().split(' ').join('\n')}
                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                        {item.name.toString()}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ProgressCircle
                        style={{ marginTop: 300 }}
                        percent={this.getPrecentage(item)}
                        radius={80}
                        borderWidth={10}
                        color="#884b9c"
                        shadowColor="#d6e4ff"
                        bgColor="#fb97fc"
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetailsScreen', { item: item })}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                            >
                            </Image>
                        </TouchableOpacity>
                    </ProgressCircle>
                </View>
            </View>

            :

            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Text>
                        Starts at: {item.startTime.toString().split(' ').join('\n')}
                    </Text>
                    <Text>
                        Ends at: {item.endTime.toString().split(' ').join('\n')}

                    </Text>
                    <Text style={{ fontWeight: "bold" }}>
                        {item.name.toString()}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <ProgressCircle
                        style={{ marginTop: 300 }}
                        percent={0}
                        radius={80}
                        borderWidth={10}
                        color="#884b9c"
                        shadowColor="#d6e4ff"
                        bgColor="#fb97fc"
                    >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('EventDetailsScreen', { item: item })}>
                            <Image
                                style={styles.image}
                                source={{ uri: item.image }}
                            >
                            </Image>
                        </TouchableOpacity>
                    </ProgressCircle>
                </View>
            </View>
    );

    _handleImage = (Image) => {
        if (Image == null) {
            return false;
        }
        else {
            return true;
        }
    }

    render() {
        return (
            <View style={styles.mainStyle}>
                <FlatList
                    data={this.state.dataSource.schedule}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                />
            </View>
        )
    }
};
const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        //marginBottom: 40,
        padding: 20,
        backgroundColor: '#f7e4fe'
    },
    mainStyleDark: {
        flex: 1,
        marginBottom: 40,
        padding: 20,
        backgroundColor: '#60386d'
    },
    bottomStyle: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#999999'
    },
    bottomText: {
        color: 'black',
    },

    item: {
        margin: 20,
        alignItems: 'center',
        // marginBottom: '10%',
        // flexDirection: 'row',
    },
    image: {
        height: 160,
        width: 160,
        margin: 15,
        borderRadius: 80,
    },
    container: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#d696eb',
        borderBottomWidth: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 90,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 0,
        paddingRight: 40,
        backgroundColor: '#f8fcff'

    },
    buttonContainer: {
        flex: 1,
        marginRight: -30,

    }
});
export default ScheduleScreen