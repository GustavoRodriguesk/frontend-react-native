import { StyleSheet, Text, View } from 'react-native';

export default function Logo(){
    return (
        
        <View style={styles.Logo}>
          <Text style={{color: 'white'}}>Logo</Text>
        </View>
    )
}

const styles = StyleSheet.create(
    {
         Logo: {
            
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red'
          }
    }
)