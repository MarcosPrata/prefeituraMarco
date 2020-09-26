import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },
    headerContainer: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4caf50',
        padding:14
    },
    headerText: {
        color: '#fff',
        fontSize:16,
        marginStart:16
    },
   
});