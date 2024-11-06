import React, { useState } from "react";
import { FlatList, Modal, TouchableOpacity, View, Text,StyleSheet } from "react-native";

interface SelectProps {
  options: string[]; // 선택 가능한 옵션 배열
  selectedValue: string; // 현재 선택된 값
  onValueChange: (value: string) => void; // 선택 값 변경 시 호출되는 함수
  label : string
}

export const SelectComponent = (props:SelectProps)=>{
  const [modalVisible, setModalVisible] = useState(false);


  const handleSelect = (item: string) => {
    props.onValueChange(item)
    setModalVisible(false);
  };
  
  
  return(
    <View>
      <Text style={styles.label}>
        {props.label}
      </Text>
      <TouchableOpacity 
        style={styles.selectButton} 
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.selectButtonText}>{props.selectedValue || "옵션 선택"}</Text>
      </TouchableOpacity>

      <Modal 
        visible={modalVisible} 
        transparent={true} 
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={props.options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.optionButton}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>닫기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  label : {
    fontSize : 16
    ,marginBottom : 10
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  selectButton: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  selectButtonText: {
    fontSize: 16,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    maxHeight: 300,
  },
  optionButton: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign : 'center'
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 18,
  },
});