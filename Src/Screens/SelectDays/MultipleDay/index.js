import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';
import CustomHeader2 from '../../../Components/CustomHeader2/CustomHeader2';
import CustomCalendar from '../Calender/Calender';
import PickupTime from '../../../Components/DropDown/PickupTime';
import ReturnTime from '../../../Components/DropDown/Return';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import { Colors } from '../../../Themes/Colors';
import { Fonts } from '../../../Themes/Fonts';
import spacerStyles from '../../../Components/Spacers/style';

const MultipleDay = ({ navigation }) => {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateSelection = (selectedDate) => {
    if (selectedDates.length === 2) {
      setSelectedDates([selectedDate]);
    } else if (selectedDates.length === 1) {
      const existingDate = selectedDates[0];
      if (selectedDate.isBefore(existingDate)) {
        // Deselect the existing date and select the new one
        setSelectedDates([selectedDate]);
      } else {
        // Deselect both dates if the new date is before the existing one
        setSelectedDates([]);
      }
    } else {
      // Select the date if no date is selected
      setSelectedDates([selectedDate]);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.MainCont}>
      {Platform.OS == 'ios' ? (
        <>
          <View style={spacerStyles.isDefault} />
          <CustomHeader2
            title={'Set Durations'}
            onBackPress={() => {
              navigation.goBack();
            }}
          />
        </>
      ) : (
        <CustomHeader2
          title={'Set Durations'}
          onBackPress={() => {
            navigation.goBack();
          }}
        />
      )}
      <View style={styles.CalenderCont}>
        <CustomCalendar
          selectedDates={selectedDates}
          onDateSelection={handleDateSelection}
        />
      </View>
      <View style={styles.TimePickCont}>
        <Text style={styles.SelectTime}>Select Time</Text>
        <PickupTime />
        <ReturnTime />
      </View>
      <CustomButton
        title={'Continue'}
        onPress={() => {
          navigation.navigate('ReviewSummary');
        }}
      />
    </ScrollView>
  );
};

export default MultipleDay;

const styles = StyleSheet.create({
  MainCont: {
    backgroundColor: Colors.Bg,
    padding: '3%',
  },
  CalenderCont: {
    marginVertical: '5%',
    paddingHorizontal: '1%',
  },
  TimePickCont: {
    backgroundColor: Colors.White,
    borderRadius: 5,
    paddingVertical: '4%',
    paddingHorizontal: '1%',
    elevation: 1,
    marginTop: '2%',
    marginBottom: '20%',
  },
  SelectTime: {
    fontSize: 16,
    fontFamily: Fonts.SF_Medium,
    color: Colors.Black,
    marginLeft: '5%',
    marginBottom: '-2%',
  },
});
