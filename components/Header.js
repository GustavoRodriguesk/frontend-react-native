import { View, Text, StyleSheet} from 'react-native'
import { Image } from 'expo-image'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function Header(){
    return (
        <View style={styles.header}>
            <View style={styles.user}>
                <Image 
                    style={styles.avatar}
<<<<<<< HEAD
                    source={require('../assets/avatar-renan.jpg')} //Local
                    //source="https://avatars.githubusercontent.com/u/4259630?v=4"
                />
                <Text style={styles.name}>Renan Cavichi</Text>
=======
                    source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Saddam_Hussein_captured_%26_shaven_DD-SD-05-01885.jpg/220px-Saddam_Hussein_captured_%26_shaven_DD-SD-05-01885.jpg"
                />
                <Text style={styles.name}>Gugu Gay teiro</Text>
>>>>>>> 6a19cefbed96640f5f8c09c84488b78ccfb0a6bb
            </View>
            <Ionicons style={styles.menu} name="menu" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        //backgroundColor: "#899986",
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        fontWeight: '600',
        fontSize: 18
    },
    menu: {
        padding: 10
    }
})