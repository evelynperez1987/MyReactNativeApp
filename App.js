import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable, Image, FlatList, Modal } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import AddItem from './src/AddItem';
import ListItem from './src/ListItem';
import CustomModal from './src/CustomModal';


export default function App() {

  const initialState = [
    {id: 1, text: "Leche"},
    {id: 2, text: "Arroz"},
    {id: 3, text: "Queso"},
  ];

  const [userText, setUserText] = useState("");
  const [list, setList] = useState(initialState);
  const [modalVisible, setModalVisible] = useState(false);

  //console.log(text);
  const addItem = () => {
    list.push ({
      id: Math.random(),
      text: userText,
    });

    setList(list); 
    setUserText("");
  };


  const clearList = () => {
    setList([]);
    setUserText("");
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>

{/*<Modal visible= {modalVisible}>
        <View>
          <Text>Estás seguro que quieres eliminar la lista?</Text>

          <Pressable onPress={() =>  clearList()}>
            <Text>SI</Text> 
          </Pressable>

          <Pressable onPress={() => setModalVisible (false)}>
            <Text>NO</Text>
          </Pressable>

        </View>
  </Modal>*/}

      <CustomModal modalVisible={modalVisible} setModalVisible={setModalVisible} clearList={clearList} />

      <Image style={styles.img} source={{uri:"https://cdn-icons-png.flaticon.com/512/4901/4901662.png"}} />
      <Text style={styles.text}>Lista de Compras</Text>
      
{/*******************************************************************************************************
    {/*Paso para AddItem*/}
      {/*<View style={styles.buttonContainer}> 
        <View style={styles.inputContainer}>
          <TextInput  placeholder="Escriba aquí..."
          style={styles.input}
          value= {userText}
          onChangeText = {(value) => setUserText (value)}
          />
        </View>

        <Pressable style= {styles.button} onPress={()=> addItem ()}>
          <AntDesign name="pluscircle" size={24} color="blue" />
        </Pressable>
      </View>*/}

    
    <AddItem userText = {userText} setUserText = {setUserText} addItem = {addItem}/>

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => 

          /* lo agrego a ListItem
          <Text style={styles.list}> {item.text} </Text>*/
          <ListItem item = {item}/>
        }
      />
      <Pressable style= {styles.button} onPress={()=> setModalVisible (true)}>
        <AntDesign name="delete" size={24} color="blue" />
      </Pressable>

      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    borderBottomColor: 'blue',
    borderBottomWidth: 4,
    marginTop: 30,
    fontSize: 30,
  },
  
  img: {
    height: 100,
    width:100,
    marginTop:40,
  },
  button: {
    marginLeft: 15,
  }


  /***************************************************************************************************************
   * en ADDITEM,JS
   */
  /* buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    marginTop: 30,
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 10,
  },
  input: {
    padding: 10,
    fontSize: 20,
    width: 200,
  },

  list: {
    fontSize: 20,
    marginVertical: 1,
    color: 'blue',
  },*/

});



