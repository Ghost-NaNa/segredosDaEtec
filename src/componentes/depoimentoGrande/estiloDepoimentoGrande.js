import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const estiloDepoimentoGrande = StyleSheet.create({
  cardContainer: {
    marginTop: 2,
    flexDirection: 'column',
    padding: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
    backgroundColor: 'white',
    borderRadius: 8,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,  
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left',
  },

  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginBottom: 4,
    padding: 8 
  },

  text: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    textAlign: 'left',
  },

  actionButton: {
    flexDirection: 'row',
    justifyContent: "flex-end",
  },
});

export default estiloDepoimentoGrande;
