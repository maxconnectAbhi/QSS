import React, { Component } from 'react'
import { Text, View, FlatList, SafeAreaView, StyleSheet, Platform, StatusBar, ScrollView } from 'react-native'
import { MenuCard, ShopCard, OfferCard, Header } from '../components/common/Common';
import { verticalScale, scale } from '../components/common/Constants';
import { UserCotext } from '../App';

const offerList = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../assets/dress.png'),
        title: 'Kids Dress',
        rate: '$19'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: require('../assets/cake.png'),
        title: 'Chocolate Cake',
        rate: '$20'
    },
    {
        id: 'bd7acbea-c1b1-aed5-3ad53abb28ba',
        image: require('../assets/sweet.png'),
        title: 'Amrit Sweets',
        rate: '$19'
    },
    {
        id: 'c605-48d3-a4f8-fbd91aa97f63',
        image: require('../assets/ic_img.png'),
        title: "Men's Wear",
        rate: '$20'
    },

]
const menuList = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../assets/ic_img1.png'),
        title: 'Food',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: require('../assets/ic_img2.png'),
        title: 'Clothes',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-',
        image: require('../assets/ic_img3.png'),
        title: 'Travel',
    },
    {
        id: '3ac68afc-c605-a4f8-fbd91aa97f63',
        image: require('../assets/ic_img4.png'),
        title: 'Beauty',
    },
    {
        id: 'c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../assets/ic_img5.png'),
        title: 'Gifts',
    },
]

const shopList = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../assets/sweet.png'),
        title: 'Amrit Sweets',
        subtitle: '2Km Away (562 Reviews)'
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        image: require('../assets/ic_img.png'),
        title: 'Ratanlal Clothes',
        subtitle: '1Km Away (562 Reviews)'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-',
        image: require('../assets/dress.png'),
        title: 'Kids Dress',
        subtitle: '2Km Away (562 Reviews)'
    },
    {
        id: 'c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../assets/ic_img8.png'),
        title: 'Indian Travels',
        subtitle: '2Km Away (562 Reviews)'
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: require('../assets/cake.png'),
        title: 'Bakery Point',
        subtitle: '2Km Away (562 Reviews)'
    },
    {
        id: '3ac68afc-fbd91aa97f63',
        image: require('../assets/ic_img.png'),
        title: 'Ratanlal Clothes',
        subtitle: '1Km Away (562 Reviews)'
    },
];

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            isRefresh: false,
            movieList: [],
            search: '',
        }
    }


    listEmpty = () => {
        return (!this.state.loading &&
            <View style={styles.emptylistview}>
                <Text>No Results Found</Text>
            </View>
        )
    }

    _handleRefresh = () => {
        //  this.setState({ isRefresh: true})
    }


    render() {
        return (
            <UserCotext.Consumer>
                {(context) =>
                    <SafeAreaView style={styles.container}>
                        <StatusBar hidden={false} barStyle='dark-content'/>
                        <Header navigation={this.props.navigation}/>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:'5%'}}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={offerList}
                                renderItem={({ item }) => <OfferCard item={item} navigation={this.props.navigation} />}
                                keyExtractor={item => item.id}
                            />
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={menuList}
                                renderItem={({ item }) => <MenuCard item={item} navigation={this.props.navigation} />}
                                keyExtractor={item => item.id}
                            />
                            <FlatList
                                numColumns={2}
                                data={shopList}
                                contentContainerStyle={{paddingBottom:10}}
                                renderItem={({ item }) => <ShopCard item={item} navigation={this.props.navigation} />}
                                keyExtractor={item => item.id}
                                ListEmptyComponent={this.listEmpty}
                                scrollEnabled={false}
                            />
                        </ScrollView>
                    </SafeAreaView>
                }
            </UserCotext.Consumer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:Platform.OS==='ios'?10 :20
    },
    emptylistview: {
        top: Platform.OS === 'ios' ? verticalScale(200) : 0,
        alignItems: "center",
        justifyContent: "center",
        padding: scale(10)
    },
})