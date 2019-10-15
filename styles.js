import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: 'flex',
        padding: 10
    },
    h1: {
        color: '#0054a6',
        fontSize: 18
    },
    label: {
        fontWeight: 'bold'
    },
    textInput: {
        backgroundColor: '#eee',
        borderBottomColor: '#999',
        borderBottomWidth: 3,
        color: '#0054a6',
        fontSize: 18,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
    },
    checkboxInput: {
        display: 'flex',
        flexDirection: 'row'
    },
    checkboxLabel: {
        flex: 3
    },
    buttonNew: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderRadius: 0,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    button: {
        backgroundColor: '#fff',
        borderColor: '#0054a6',
        borderRadius: 0,
        borderWidth: 1,
        color: '#0054a6',
        display: 'flex',
        flexDirection: 'row',
        margin: 10
    },
    buttonIconNew: {
        backgroundColor: '#ddd',
        padding: 10
    },
    buttonIcon: {
        backgroundColor: '#0054a6',
        padding: 10
    },
    buttonText: {
        padding: 10
    },
    cardList: {
        display: 'flex',
        flexDirection: 'row'
    },
    section: {
        marginBottom: 20,
    }
});