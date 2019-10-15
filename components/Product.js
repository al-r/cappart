import React from 'react';
import { Button, FlatList, ScrollView, Switch, Text, TextInput, View } from 'react-native';
import { Header, CheckBox } from 'react-native-elements';
import styles from './../styles.js';

export default class Product extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        categoryList: [
            {value: 'food', text: 'Food'}, 
            {value: 'beauty', text: 'Beauty'},
            {value: 'homeware-and-cleaning', text: 'Homeware and Cleaning'},
            {value: 'clothing', text: 'Clothing'}
        ],
        statusList: [
            {value: 'full', text: 'Full'},
            {value: 'buy-soon', text: 'Buy Soon'},
            {value: 'buy', text: 'Buy'}
        ],
        productName: this.props.navigation.state.params.product.name,
        productEssential: this.props.navigation.state.params.product.essential,
        productStatus: this.props.navigation.state.params.product.status, 
        productCategory: this.props.navigation.state.params.product.category
      };
    }

    toggleItem(item) {
        item = !item;
        console.log("To Do toggleItem()", item);
    }

    static navigationOptions = {
        title: 'Product'
        // headerTitle: <Header
        //     leftComponent={{ icon: 'menu', color: '#fff' }}
        //     centerComponent={{ text: 'Product', style: { color: '#fff' } }}
        //     rightComponent={{ icon: 'home', color: '#fff' }}
        // />
    };

    save() {
        console.log('To Do save()');
    }

    render() {
    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.textInput}
                onChangeText={(productName) => this.setState({productName})}
                value={this.state.productName}
            />

            <View style={styles.section}>
                <View style={styles.checkboxInput}>
                    <Switch
                        onValueChange = {(productEssential) => this.setState({productEssential})}
                        trackColor={{false: '#d3d6d8', true: '#99badb'}}
                        thumbColor='#0054a6'
                        value = {this.state.productEssential}
                    />
                    <Text style={styles.checkboxLabel}>Essential</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Status</Text>
                <FlatList
                    data={this.state.statusList}
                    renderItem={({item}) => 
                        // <CheckBox
                        //     title={item.text}
                        //     checkedIcon='check'
                        //     uncheckedIcon='times'
                        //     checkedColor='#0054a6'
                        //     checked={this.state.productStatus === item.value}
                        // />
                        <View style={styles.checkboxInput}>
                            <Switch
                                onValueChange = {(productStatus) => this.setState({productStatus: item.value})}
                                trackColor={{false: '#d3d6d8', true: '#99badb'}}
                                thumbColor='#0054a6'
                                value = {this.state.productStatus === item.value}
                            />
                            <Text style={styles.checkboxLabel}>{item.text}</Text>
                        </View>
                    }
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Category</Text>
                <FlatList
                    data={this.state.categoryList}
                    renderItem={({item}) =>
                        <View style={styles.checkboxInput}>
                            <Switch
                                onValueChange = {(productCategory) => this.setState({productCategory: item.value})}
                                trackColor={{false: '#d3d6d8', true: '#99badb'}}
                                thumbColor='#0054a6'
                                value = {this.state.productCategory === item.value}
                            />
                            <Text style={styles.checkboxLabel}>{item.text}</Text>
                        </View>
                    }
                />
            </View>

            <View style={styles.section}>
                <Button
                    title='Save'
                    color='#0054a6'
                    onPress={() => this.save()}
                >
                </Button>
            </View>
        </ScrollView>
    );
    }
}