import React from 'react';
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './../styles.js';

export default class AppartList extends React.Component {
    static navigationOptions = {
        title: 'Your Apparts',
    };

    state = {
        apparts: [
            {
                name: "House",
                products: [
                    {name: "Milk", category: "food", essential: true, status: "buy-soon"},
                    {name: "Bacon", category: "food", essential: false, status: "full"},
                    {name: "Soap", category: "beauty", essential: true, status: "buy"}
                ]
            },
            {
                name: "Mum",
                products: [
                    {name: "Sugar", category: "food", essential: true, status: "buy-soon"},
                    {name: "Apples", category: "food", essential: true, status: "full"}
                ]
            },
            {
                name: "Work",
                products: [
                    {name: "Tea", category: "food", essential: true, status: "full"},
                    {name: "Hand Cream", category: "beauty", essential: false, status: "buy"}
                ]
            }
        ],
        newItem: ''
    };

    addAppart(itemName) {
        this.state.apparts.push({name: itemName});
    }

  render() {
    let pictureHome = {
        uri: 'https://raw.githubusercontent.com/bbc/ptk-components-www/master/docs/img/fonts/home.png?token=AWimg-SLSPLmY3-XmHHdPyxBeOODx-erks5cDsk_wA%3D%3D'
    };
    let picturePlus = {
        uri: 'https://raw.githubusercontent.com/bbc/ptk-components-www/master/docs/img/fonts/plus.png?token=AWimg8XIzrgVALPuulfa3L3hMmwBZVN7ks5cDthiwA%3D%3D'
    };
    return (
      <ScrollView style={styles.container}>
        <View style={styles.cardList}>
            <FlatList
                data={this.state.apparts}
                renderItem={({item}) =>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate("Products", {products: item.products})}
                    >
                        <View style={styles.buttonIcon}>
                            <Image source={pictureHome} style={{height: 20, width: 20}} />
                        </View>
                        <Text style={styles.buttonText}>{item.name}</Text>
                    </TouchableOpacity>
                }
            />
        </View>

        <View style={styles.section}>
            <TextInput
                    style={styles.textInput}
                    onChangeText={(productName) => this.setState({productName})}
                    value={this.state.productName}
                />
            <TouchableOpacity
                style={styles.buttonNew}
                onPress={() => this.addAppart('jhfgkh')}
            >
                <View style={styles.buttonIconNew}>
                    <Image source={picturePlus} style={{height: 20, width: 20}} />
                </View>
                <Text style={styles.buttonText}>Add Appart</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}