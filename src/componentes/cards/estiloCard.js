import { StyleSheet } from "react-native"

const estiloCard = StyleSheet.create({
    card: {
        marginTop: 2,
        flexDirection: 'row',
        padding: 12,
        borderBottomWidth: 0.5,
        borderBottomColor: '#ddd',
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        marginLeft: 12,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    dot: {
        color: 'gray',
        marginHorizontal: 6,
    },
    time: {
        color: 'gray',
        fontSize: 14,
    },
    text: {
        fontSize: 15,
        marginBottom: 8,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 0,
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionText: {
        color: 'gray',
        marginLeft: 6,
        fontSize: 13,
    },
})

export default estiloCard