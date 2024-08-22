import { ScrollView, StyleSheet } from 'react-native'
import Header from './components/Header'
import Footer from './components/Footer'
<<<<<<< HEAD
import Content from './components/Content'
=======
import Main from './components/Main'
>>>>>>> 6a19cefbed96640f5f8c09c84488b78ccfb0a6bb


export default function App() {
  return (
      <ScrollView style={styles.container}>
        
        <Header />
<<<<<<< HEAD
        <Content />
=======
        <Main />
>>>>>>> 6a19cefbed96640f5f8c09c84488b78ccfb0a6bb
        <Footer />
      
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})