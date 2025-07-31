import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native' 

const AllItems = ({data}) => {
    return (
        <View>
            <View style={styles.headContainer}>
                <Text style={styles.headText}>Item</Text>
                <Text style={styles.headText}>Quantity</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item)=> item.id}
                renderItem={({item}) => (
                    <View style={[styles.itemContainer, item.stock<10 ? {backgroundColor:'#b8b8b8ff'} : {backgroundColor:'pink'}]}>                        
                        <Text style={styles.itemText}>{item.name}</Text>
                        <Text style={styles.itemText}>{item.stock}</Text>
                    </View>
                )}
                contentContainerStyle={{gap: 10}} 
            />
            
        </View>
        
    )
}

export default AllItems

const styles = StyleSheet.create({
    headContainer: {
        flexDirection: 'row',   
        justifyContent: 'space-between',
        padding: 10, 
        marginBottom: 10,                       
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