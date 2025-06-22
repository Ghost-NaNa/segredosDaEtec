
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {    
        backgroundColor: "rgba(218, 218, 218, 0.3)", // Roxo translúcido
        borderRadius: 15,
        borderColor: '#fff',
        padding: 20,
        width: 280,
        alignItems: "center",
        justifyContent: 'space-between',
        elevation: 10, // sombra no Android
        shadowColor: "#000", // sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    imagem: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      },
    label: {
        color: "#fff",
        alignSelf: "flex-start",
        marginLeft: 5,
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 10,
      },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ffffff20",
        borderRadius: 10,
        paddingHorizontal: 10,
        width: "100%",
        height: 45,
        marginTop: 5,
      },
    inputIcon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        color: "#fff",
        fontSize: 16,
      },
    botao: {
        backgroundColor: "#4B0082", // roxo escuro
        marginTop: 20,
        width: "100%",
        height: 45,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    botaoTexto: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 10,
      },
})