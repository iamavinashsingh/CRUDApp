import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native'
import { FlatList } from 'react-native';


const CreateItems = ({data ,setData}) => {
    const [itemName, setItemName] = useState('');
    const [itemStock, setItemStock] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const addItemHandler = () => {
        if(itemName && itemStock) {
            const newItem = {
                id: Math.random().toString(),   
                name: itemName,
                stock: parseInt(itemStock), 
                unit: 'kg', 
            }
            setData((prevData) => [...prevData, newItem]);
            setItemName('');
            setItemStock('');
            setIsEdit(false);
    }
    }
    const deleteItemHandler = (id) => {
        setData((prevData) => prevData.filter(item => item.id !== id));
    }
    const editItemHandler =(item)=>{
        setIsEdit(true);
        setItemName(item.name);      
        }
    const updateItemHandler = () => {
        if(itemName && itemStock) { 
            setData((prevData) => 
                prevData.map(item => 
                    item.name === itemName ? {...item, stock: parseInt(itemStock)} : item
                )
            );
            setItemName('');
            setItemStock('');
            setIsEdit(false);
        }
    } 
    return (
        <View style={styles.container}>
        <TextInput
            placeholder='Enter Item Name'
            placeholderTextColor={'#563a3ab9'}
            style={styles.inputText}
            value={itemName}
            onChangeText={setItemName}

        />
        <TextInput
            placeholder='Enter Item Quantity'
            placeholderTextColor={'#563a3ab9'}
            style={styles.inputText}
            value={itemStock}
            onChangeText={setItemStock}
            
        />

        <Pressable style={styles.btn} onPress={isEdit ? updateItemHandler : addItemHandler}> 
            <Text style={styles.btnText}>{isEdit ? 'Update Item' : 'Add Item in stock'}</Text>
        </Pressable>
        <View style={styles.headContainer}>
            <Text style={styles.headText}>All Items in Stock</Text>
        </View>
        <FlatList
            data={data}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) => (
                <View style={[styles.itemContainer, item.stock<10 ? {backgroundColor:'#b8b8b8ff'} : {backgroundColor:'pink'}]}>                        
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.stock}</Text>
                    <View style={{flexDirection:'row', gap:10}}>
                        <Pressable onPress={()=> editItemHandler(item)}>
                            <Text style={styles.itemText}>Edit</Text>
                        </Pressable>
                        <Pressable onPress={() => deleteItemHandler(item.id)}>
                            <Text style={styles.itemText}>Delete</Text>
                        </Pressable>
                    </View>
                </View>
            )}
            contentContainerStyle={{gap: 10}} 
        />
        </View>
    )
}

export default CreateItems

const styles = StyleSheet.create({
    container : {
        paddingVertical:'4%',
        gap:10,
    }, 
    inputText:{
        borderWidth:1,
        borderColor:'#563a3aff',
        paddingHorizontal:15,
        paddingVertical:10,
        borderRadius:10,
        color:'#563a3aff',
        fontSize:16,
        marginBottom:10,
        
    }, 
    btn:{
        backgroundColor:'#c4899aff',
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:10,
        alignItems:'center',
        
    },
    btnText:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'800',
    },headContainer: {
        flexDirection: 'row',   
        justifyContent: 'space-between',
        padding: 10,                    
    },
    headText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#563a3aff',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,
    },
    itemText: {
        fontSize: 13,
        color: '#563a3aff',
    }
})