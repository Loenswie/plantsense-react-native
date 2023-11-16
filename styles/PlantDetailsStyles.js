import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    PlantDetailsContainer: {
        backgroundColor: '#4B7235',
        padding: 20,
        borderRadius: 8,
        margin: 20,
        color: '#fff',
        width: '85%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Josefin-Slab',
    },
    button: {
        backgroundColor: '#354d28',
        color: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        fontSize: 16,
        width: '95%',
        textAlign: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        width: '95%',
        fontFamily: 'Josefin-Slab',
    },
});

export default styles;