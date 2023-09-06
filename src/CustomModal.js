import { View, Text, Pressable, Modal, StyleSheet } from 'react-native'
import React from 'react'

const CustomModal = ({modalVisible, setModalVisible, clearList}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        shouldCloseOnOverlayClick={true}>

        <View style={[styles.centeredView, styles.modalBackdrop]}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Estás seguro que quieres eliminar la lista?</Text>
            
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => clearList()}>
              <Text style={styles.textStyle}>SI</Text>
            </Pressable>

            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.textStyle}>NO</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalBackdrop: {
    backgroundColor: "rgba(0,0,0,0.75)"
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default CustomModal