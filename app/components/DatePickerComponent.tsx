import React , {useState} from "react";
import { View ,Text,Button, StyleSheet, TouchableOpacity, TextInput, Modal} from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from 'react-native-date-picker'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

interface DatePickerProps{
  value : Date
  onChange : (date:Date)=>void
  label : string
}

export const DatePickerComponent = (props:DatePickerProps)=>{
  // const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    // setSelectedDate(date);
    props.onChange(date)
    hideDatePicker();
  };

  const dateFormat = (date:Date)=>{
    const year= date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    return `${year}-${month.toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`
    
  }
  return(
    <View style={styles.row}>
      <Text style={styles.label}>{props.label}</Text>
      <TouchableOpacity  onPress={showDatePicker}>
        <TextInput
           onPress={showDatePicker}
          style={styles.input}
          value={dateFormat(props.value)}
          editable={false}
        ></TextInput>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        display="spinner"
        locale="ko-KR" 
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        confirmTextIOS="확인"   // iOS 확인 버튼 텍스트를 한국어로
        cancelTextIOS="취소" 
      />
      
    </View>
  )
}

const styles = StyleSheet.create({
  row : {
    marginVertical : 20
  },
  label : {
    fontSize : 16
  },
  modalContainer : {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent : {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    maxHeight : 300
  },
  input : {
    marginTop : 20,
    width : '100%',
    borderRadius : 10,
    color: '#3c2f2f', // 입력 텍스트 색상
    paddingHorizontal: 15,
    height : 50,
    backgroundColor : 'lightgray'
  }
})