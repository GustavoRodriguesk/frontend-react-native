<<<<<<< HEAD:components/Content.js
import { StyleSheet, Text, View } from 'react-native';
import Logo from './CardAccount'
export default function Main(){
=======
import {View, Text, StyleSheet} from 'react-native'
import CardAccount from './cardAccount'

export default function Content(){
>>>>>>> 6a19cefbed96640f5f8c09c84488b78ccfb0a6bb:components/Main.js
    return (
        <View style={styles.content}>

          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />
          <CardAccount />

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        gap: 10,
        //backgroundColor: "#545656",
        padding: 15
        //justifyContent: 'center',
        //alignItems: 'center'
      }
})