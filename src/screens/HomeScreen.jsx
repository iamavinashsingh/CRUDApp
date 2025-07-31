import { Pressable, StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>All Item</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Low Item</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.btnText}>Create Item</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
    padding:'5%',

    backgroundColor:'pink',
  }
  ,
  title:{
    color:'red',
    fontSize:24,  
    fontWeight:'bold',
    marginBottom:20,
    marginTop:5,
  },
  button:{
    padding:'1.5%',
    borderRadius:50,
    borderWidth:3,
    borderColor:'#fff',
  },
  buttonContainer:{
    flexDirection:'row',
    gap:10,
  },
  btnText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
  }
})