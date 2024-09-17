import {Text, View } from 'react-native';
import {Link} from 'expo-router';

export default function Page() {
  return (
    <View>
      <Text>THIS IS THE INDEX PAGE</Text>
      <Link href="/home">home</Link>
      <Text>THIS IS THE CHEESE PAGE</Text>
      <Link href="./cheese">cheese</Link>
    </View>
  )
}