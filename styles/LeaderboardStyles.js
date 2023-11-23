import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#393f38',
        alignItems: 'center',
        justifyContent: 'start',
        fontSize: 20,
        color: 'white',
        width: '100%',
        height: '80%',
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#fff',
        margin: 25,
        fontFamily: 'Josefin-Slab',
    },
    subtitle: {
        textAlign: 'center',
        color: '#fff',
        marginBottom: 7.5,
        fontSize: 35,
        fontFamily: 'Josefin-Slab',

    },
    listItem: {
        backgroundColor: '#4B7235',
        margin: 6,
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
        width: '85%',
    },
    listItemText: {
        marginRight: 10,
        fontWeight: '800',
        color: '#fff',
        fontFamily: 'Josefin-Slab',
    },
    image: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 100,
        zIndex: -1,
    }
});

export default styles;