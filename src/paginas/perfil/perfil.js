import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Button } from '@react-navigation/elements';


export default function MeuPerfil() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
      <Button onPress={() => navigation.navigate('Depoimentos recentes')}>Go to Home</Button>
    </View>
  );
}