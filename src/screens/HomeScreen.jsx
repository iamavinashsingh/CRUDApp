import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import AllItems from './AllItems';
import LowItems from './LowItems';
import CreateItems from './CreateItems';



const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState(
    [
  { id: 1, name: 'Wheat', stock: 10, unit: 'kg' },
  { id: 2, name: 'Rice', stock: 25, unit: 'kg' },
  { id: 3, name: 'Sugar', stock: 8, unit: 'kg' },
  { id: 4, name: 'Salt', stock: 15, unit: 'kg' },
  { id: 5, name: 'Oil', stock: 5, unit: 'litre' },
  { id: 6, name: 'Milk', stock: 12, unit: 'litre' },

]
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.button, view === 0 ? {backgroundColor:'white'} : null]} onPress={() => setView(0)}>
          <Text style={[styles.btnText ,view === 0 ? {color:'pink'} : null ]}>All Items</Text>
        </Pressable>
        <Pressable style={[styles.button , view === 1 ? {backgroundColor:'white'} : null]} onPress={() =>setView(1)}>
          <Text style={[styles.btnText , view === 1 ? {color:'pink'} : null]}>Low Items</Text>
        </Pressable>
        <Pressable style={[styles.button , view === 2 ? {backgroundColor:'white'} : null]} onPress={() =>setView(2)}>
          <Text style={[styles.btnText , view === 2 ? {color:'pink'} : null]}>Create Items</Text>
        </Pressable>
      </View>
      <View>
        {view === 0 && <AllItems data={data}/>}
        {view === 1 && <LowItems data={data.filter((item)=>item.stock<10)}/>}
        {view === 2 && <CreateItems data={data} setData={setData}/>}
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
    color:'#ffffff',
    fontSize:24,  
    fontWeight:'bold',
    marginBottom:20,
    marginTop:5,
  },
  button:{
    padding:'1.5%',
    paddingHorizontal:'2.5%',
    borderRadius:50,
    borderWidth:3,
    borderColor:'#fff',
    marginBottom:20,
  },
  btnActivated:{
    backgroundColor:'white',
    color:'black',
  }
  ,
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