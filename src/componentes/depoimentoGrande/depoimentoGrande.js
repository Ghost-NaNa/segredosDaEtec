import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import estiloDepoimentoGrande from './estiloDepoimentoGrande'

const { height: screenHeight } = Dimensions.get('window')

const CardGrande = ({ conteudo, titulo }) => {
  return (
    <View style={[estiloDepoimentoGrande.cardContainer, { minHeight: screenHeight * 0.4 }]}>
      <View style={estiloDepoimentoGrande.titleContainer}>
        <Text style={estiloDepoimentoGrande.title}>{titulo}</Text>
      </View>
      <View style={estiloDepoimentoGrande.textContainer}>
        <Text style={estiloDepoimentoGrande.text}>{conteudo}</Text>
      </View>
    </View>
  )
}

export default CardGrande
