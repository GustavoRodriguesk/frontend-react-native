import { StyleSheet, Text, View } from 'react-native';

export default function Header(){
    return (
        
        <View style={styles.Header}>
          <Text style={{color: 'white'}}>Header</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
         Header: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#927362'
          }
    }
)