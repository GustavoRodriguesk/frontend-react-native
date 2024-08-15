import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'expo-image';
import { CgMenuRound } from "react-icons/cg";

export default function Header(){
    return (
        
        <View style={styles.Header}>
          <View style={styles.user}>
          <Image style={styles.avatar}
          source="https://img.a.transfermarkt.technology/portrait/big/225083-1703279938.png?lm=1"/>
          <Text style= {styles.name}>Trunks</Text>
          <CgMenuRound style={styles.menu}/>

          </View>          
        </View>
    )
}

const styles = StyleSheet.create(
    {
         Header: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#927362',
            justifyContent: "space-between",
            paddingHorizontal: '15',
            flexDirection: 'row'
          },
          avatar:{ 
            width: 50,
            height: 50,
            borderRadius: 25
          },
          user:{
            flexDirection: 'row',
            alignItems: 'center', 
            gap: 10
          },
          name: {
            fontWeight: '600',
            fontSize: 18
          },
          menu: {
            width: 25,
            height: 25,
            padding: 10
          }
    }
    

    
)