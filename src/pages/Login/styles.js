import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    AppScreen: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    loginContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ffffffe6',
        marginHorizontal: 24,
        padding: 16
    },
    button: {
        marginTop: 32,
        paddingHorizontal: 20,
        backgroundColor:'#4caf50'
    },
});