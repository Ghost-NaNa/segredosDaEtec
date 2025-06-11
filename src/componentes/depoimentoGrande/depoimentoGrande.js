import React from 'react'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'
import estiloDepoimentoGrande from './estiloDepoimentoGrande'

const { height: screenHeight } = Dimensions.get('window')

const CardGrande = ({ conteudo, titulo, avatarUser }) => {
  return (
    <View style={estiloDepoimentoGrande.cardContainer}>
      <View style={estiloDepoimentoGrande.header}>
        <View style={{ marginRight: 12 }}>
          <Avatar.Image size={48} source={{ uri: avatarUser }} />
        </View>
        <Text style={estiloDepoimentoGrande.title}>{titulo}</Text>
      </View>

      <View style={estiloDepoimentoGrande.textContainer}>
        <Text style={estiloDepoimentoGrande.text}>{conteudo}</Text>

        {/* Botões alinhados à direita */}
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', gap: 18, marginTop: 12 }}>
          <TouchableOpacity style={estiloDepoimentoGrande.actionButton}>
            <Feather name="star" size={18} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={estiloDepoimentoGrande.actionButton}>
            <Feather name="alert-circle" size={18} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default CardGrande
