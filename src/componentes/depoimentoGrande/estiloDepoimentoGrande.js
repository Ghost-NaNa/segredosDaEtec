import { StyleSheet, Dimensions } from "react-native"

const { width, height } = Dimensions.get('window')

const estiloDepoimentoGrande = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    justifyContent: 'flex-start',
  },

  titleContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    lineHeight: 22,
  },
})

export default estiloDepoimentoGrande;
