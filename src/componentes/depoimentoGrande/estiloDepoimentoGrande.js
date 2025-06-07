import { StyleSheet, Dimensions } from "react-native"

const { tela } = Dimensions.get('window')

const estiloDepoimentoGrande = StyleSheet.create({
  cardContainer: {
    padding: 16,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    height: tela * 0.5,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  dot: {
    marginHorizontal: 6,
    color: 'gray',
  },
  time: {
    color: 'gray',
    fontSize: 14,
  },
  text: {
    fontSize: 16,
    marginVertical: 8,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionText: {
    color: 'gray',
    marginLeft: 4,
  },
})

export default estiloDepoimentoGrande