import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, View, Text, Dimensions } from "react-native";

interface ConfirmProps {
  viewModal:boolean
  setViewModal: React.Dispatch<React.SetStateAction<boolean>>
  callback : ()=>void
  text : string
}

const {height} = Dimensions.get('window')

export const ConfirmComponent = (props:ConfirmProps)=>{
  return(
    <Modal
      visible={props.viewModal}
      transparent={true}
      animationType="fade"
      onRequestClose={() => props.setViewModal(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>{props.text}</Text>
          <View style={styles.modalButton}>
          <TouchableOpacity
                style={[styles.closeButton,styles.closeColor]}
                onPress={() => props.setViewModal(false)}
              >
                <Text style={styles.closeButtonText}>닫기</Text>
          </TouchableOpacity>
          <TouchableOpacity
                style={[styles.closeButton,styles.confirmColor]}
                onPress={() => {
                  props.setViewModal(false)
                  props.callback()}
                }
              >
                <Text style={styles.closeButtonText}>확인</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems : 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    maxHeight : 300
    
  },
  closeButtonText: {
    fontSize: 16,
    color: '#333',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    // backgroundColor: '#ddd',
    borderRadius: 5,
    width : '45%'
  },
  closeColor : {
    backgroundColor : '#ddd'
  },
  confirmColor : {
    backgroundColor : '#E0CCBE'
  },
  modalText : {
    textAlign : 'center',
    fontSize : 16
  },
  modalButton : {
    flexDirection : 'row',
    justifyContent : 'space-between'
  }
})