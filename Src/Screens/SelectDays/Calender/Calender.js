import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Colors } from '../../../Themes/Colors';
import { Arrow2, Arrow3, Arrow4, C_Bg } from '../../../Themes/Images';
import { Fonts } from '../../../Themes/Fonts';

const CustomCalendar = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthsOfYear = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const renderDaysOfWeek = () => {
    return daysInMonth.map((day, index) => (
      <Text key={index} style={styles.dayOfWeek}>
        {day}
      </Text>
    ));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysCount = getDaysInMonth(year, month);
    const firstDay = new Date(year, month, 1).getDay();
    const lastDay = new Date(year, month, daysCount).getDay();
    const prevMonthDays = getDaysInMonth(year, month - 1);

    const days = [];

    // Add days of the previous month
    for (let i = prevMonthDays - firstDay + 1; i <= prevMonthDays; i++) {
      days.push({ date: new Date(year, month - 1, i), isPrevMonth: true });
    }

    // Add days of the current month
    for (let i = 1; i <= daysCount; i++) {
      days.push({ date: new Date(year, month, i), isPrevMonth: false });
    }

    // // Add days of the next month
    for (let i = 1; i <= 6 - lastDay; i++) {
      days.push({ date: new Date(year, month + 1, i), isNextMonth: true });
    }

    const weeks = [];
    let week = [];

    days.forEach((day, index) => {
      if (day) {
        week.push(day);
      }

      if ((index + 1) % 7 === 0 || index === days.length - 1) {
        weeks.push(week);
        week = [];
      }
    });

    return weeks.map((week, index) => (
      <View key={index} style={styles.weekContainer}>
        {week.map((dayObj, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayContainer,
              isDateInRange(dayObj.date) ? styles.rangeDay : null,
              isStartDate(dayObj.date) ? styles.startDate : null,
              isEndDate(dayObj.date) ? styles.endDate : null,
              dayObj.isPrevMonth || dayObj.isNextMonth ? styles.prevNextMonthDate : null,
            ]}
            onPress={() => handleDatePress(dayObj.date)}
          >
            <Text style={[
              styles.dayText,
              isDateInRange(dayObj.date) ? styles.rangeDayText : null,
              isStartDate(dayObj.date) ? styles.startDateText : null,
              isEndDate(dayObj.date) ? styles.endDateText : null,
              dayObj.isPrevMonth || dayObj.isNextMonth ? styles.prevNextMonthDateText : null,
            ]}>
              {dayObj.date.getDate()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  const isDateInRange = (date) => {
    if (!selectedStartDate || !selectedEndDate) {
      return false;
    }
    return date >= selectedStartDate && date <= selectedEndDate;
  };

  const isStartDate = (date) => {
    return selectedStartDate && date.toDateString() === selectedStartDate.toDateString();
  };

  const isEndDate = (date) => {
    return selectedEndDate && date.toDateString() === selectedEndDate.toDateString();
  };

  const handleDatePress = (date) => {
    if (!selectedStartDate) {
      setSelectedStartDate(date);
    } else if (!selectedEndDate) {
      setSelectedEndDate(date);
    } else {
      setSelectedStartDate(date);
      setSelectedEndDate(null);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedStartDate(null);
    setSelectedEndDate(null);
  };

  const changeYearBack = () => {
    // Implement logic to change the year back here
  };

  const changeYearForward = () => {
    // Implement logic to change the year forward here
  };

  const formatSelectedDateRange = () => {
    if (selectedStartDate && selectedEndDate) {
      return `${monthsOfYear[selectedStartDate.getMonth()].slice(0, 3)} ${selectedStartDate.getDate()} - ${monthsOfYear[selectedEndDate.getMonth()].slice(0, 3)} ${selectedEndDate.getDate()}`;
    }
    return '';
  };

  return (
    <ImageBackground source={C_Bg} style={styles.container} imageStyle={{borderRadius:20}} >
      <Text style={styles.Select} >Select Range</Text>
      <Text style={styles.selectedDateRange}>{formatSelectedDateRange()}</Text>
      <View style={styles.header}>
        {/* Sep 2023 And Image */}
        <View style={{ flexDirection: "row" }} >
          <Text style={styles.monthYear}>
            {monthsOfYear[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Text>
          <TouchableOpacity onPress={changeYearForward} style={styles.yearChangeButton}>
            {/* Use an Image component for the next year button */}
            <Image
            source={Arrow2} style={styles.Arrow3} />
             
          </TouchableOpacity>
        </View>
        {/* Sep 2023 And Image */}
        {/* prev and next month icons */}
        <View style={{ flexDirection: 'row' }}  >
          <TouchableOpacity onPress={prevMonth} style={styles.navigationButton}>
            <Image source={Arrow3} style={styles.Arrow3} />
          </TouchableOpacity>
          <TouchableOpacity onPress={nextMonth} style={styles.navigationButton}>
          <Image source={Arrow4} style={styles.Arrow3} />
          </TouchableOpacity>
        </View>
      </View>
      {/* prev and next month icons */}
      <View style={styles.dayNames}>{renderDaysOfWeek()}</View>
      {renderCalendar()}

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 355,
    resizeMode: 'cover',
    paddingHorizontal:"3%",
    paddingVertical:'2%'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  navigationButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
   
  },
  navigationButtonText: {
  
    fontSize: 16,
  },
  monthYear: {
    fontSize: 16,
   fontFamily:Fonts.SF_Medium,
    color: Colors.White,
  },
  dayNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
    marginTop: '3%',
  
  },
  dayOfWeek: {
    fontSize: 14,
    width:'14.28%',
    textAlign:"center",
    fontFamily:Fonts.SF_Regular,
    color: Colors.White,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   
  },
  dayContainer: {
    flex: 1,
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 16,
    color: Colors.White,
  },
  rangeDay: {
    backgroundColor: '#FFFFFF', // You can customize the color as needed
  },
  rangeDayText: {
    color: 'black', // You can customize the text color as needed
  },
  startDate: {
    backgroundColor: '#10FF9A',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    
  },
  endDate: {
    backgroundColor: '#10FF9A', // You can customize the color as needed
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  startDateText: {
    color: 'black', // You can customize the text color as needed
  },
  endDateText: {
    color: 'black', // You can customize the text color as needed
  },
  prevNextMonthDate: {
     height:0,
     bottom:'200%'
  },
  prevNextMonthDateText: { 
     fontSize:0,
     
  },
  Select:{
    fontSize: 14,
    color: Colors.White,
    textAlign: 'left',
    marginTop: 6,
  
  },
  selectedDateRange: {
    fontSize: 30,
    color: '#FFFFFF',
    fontFamily:Fonts.SF_Medium,
    textAlign: 'left',
    fontWeight:"600",
    lineHeight:36,
    marginTop:"1%"
   
    
  },
  yearChange: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  yearChangeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    backgroundColor: Colors.Greenish,
  },
  yearChangeImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  yearText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: Colors.White,
  },
  Arrow3:{
    width:20,height:20
  }
});

export default CustomCalendar;
