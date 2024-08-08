import { StyleSheet, Text, View } from 'react-native';

export default function Footer(){
    return (
      <View style={styles.footer}>
        <Text style={{color: 'white'}}>Footer</Text>
      </View>
    )
}

const styles = StyleSheet.create(
    {
        footer: {
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'yellow', 
          }
    }
)