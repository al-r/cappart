import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './../styles.js';

export default class ProductList extends React.Component {
    static navigationOptions = {
        title: 'Your Products',
    };

    addProduct() {
        console.log('TO DO');
    }

    render() {
    let picturePlus = {
        uri: 'https://raw.githubusercontent.com/bbc/ptk-components-www/master/docs/img/fonts/plus.png?token=AWimg8XIzrgVALPuulfa3L3hMmwBZVN7ks5cDthiwA%3D%3D'
    };
    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                style={styles.buttonNew}
                onPress={() => this.addProduct()}
            >
                <View style={styles.buttonIconNew}>
                    <Image source={picturePlus} style={{height: 20, width: 20}} />
                </View>
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
            <View style={styles.cardList}>
                <FlatList
                    data={this.props.navigation.state.params.products}
                    renderItem={({item}) => 
                        <TouchableOpacity
                            style={styles.buttonNew}
                            onPress={() => this.props.navigation.navigate("Product", {product: item})}
                        >
                            <Text style={styles.buttonText}>{item.name} ({item.status})</Text>
                        </TouchableOpacity>
                    }
                />
            </View>
        </ScrollView>
    );
    }
}