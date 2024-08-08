import { StyleSheet, Text, View } from 'react-native';
import Logo from './Logo'
export default function Main(){
    return (
      <View style={styles.Main}>
        <Text style={{color: 'white'}}>Main</Text>
        <Logo />
      </View>
    )
}

const styles = StyleSheet.create(
    {
        Main: {
            flex:2,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'black', 
          }
    }
)