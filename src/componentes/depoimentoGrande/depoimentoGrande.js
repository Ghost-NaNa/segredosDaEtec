import { View, Text, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import estiloDepoimentoGrande from './estiloDepoimentoGrande';


const CardGrande = ({
  avatarUrl,
  postTitle,
  time,
  text,
  comments = 0,
  onStarPress = () => {},
  onReportPress = () => {},
}) => {
  return (
    <View style={estiloDepoimentoGrande.cardContainer}>
      <Avatar.Image size={64} source={{ uri: avatarUrl }} />

      <View style={estiloDepoimentoGrande.content}>
        <View style={estiloDepoimentoGrande.header}>
          <Text style={estiloDepoimentoGrande.title}>{postTitle}</Text>
          <Text style={estiloDepoimentoGrande.dot}>•</Text>
          <Text style={estiloDepoimentoGrande.time}>{time}</Text>
        </View>

        <Text style={estiloDepoimentoGrande.text}>{text}</Text>

        <View style={estiloDepoimentoGrande.actions}>
          <TouchableOpacity style={estiloDepoimentoGrande.actionButton}>
            <Feather name="message-circle" size={20} color="gray" />
            <Text style={estiloDepoimentoGrande.actionText}>{comments}</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', gap: 18 }}>
            <TouchableOpacity onPress={onStarPress}>
              <Feather name="star" size={20} color="gray" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onReportPress}>
              <Feather name="alert-circle" size={20} color="gray" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};



export default CardGrande;
