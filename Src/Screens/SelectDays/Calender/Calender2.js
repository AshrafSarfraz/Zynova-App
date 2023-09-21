import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { Colors } from '../../../Themes/Colors';
import { Arrow3, Arrow4, C_Bg } from '../../../Themes/Images';
import { Fonts } from '../../../Themes/Fonts';

const CustomCalendar2 = () => {
  const [selectedDate, setSelectedDate] = useState(null);
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
              isDateSelected(dayObj.date) ? styles.selectedDate : null,
              dayObj.isPrevMonth || dayObj.isNextMonth ? styles.prevNextMonthDate : null,
            ]}
            onPress={() => handleDatePress(dayObj.date)}
          >
            <View style={styles.dateContainer}>
              <Text style={[
                styles.dayText,
                isDateSelected(dayObj.date) ? styles.selectedDateText : null,
                dayObj.isPrevMonth || dayObj.isNextMonth ? styles.prevNextMonthDateText : null,
              ]}>
                {dayObj.date.getDate()}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    ));
  };

  const isDateSelected = (date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const handleDatePress = (date) => {
    setSelectedDate(date);
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    setSelectedDate(null);
  };

  return (
    <ImageBackground source={C_Bg} style={styles.container} imageStyle={{ borderRadius: 20 }} >
      <View style={styles.header}>
        {/* Sep 2023 And Image */}
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }} >
          <Text style={styles.monthYear}>
            {monthsOfYear[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </Text>
          <View style={{ flexDirection: 'row' }} >
            <TouchableOpacity onPress={prevMonth} style={styles.navigationButton}>
              <Image source={Arrow3} style={styles.Arrow3} />
            </TouchableOpacity>
            <TouchableOpacity onPress={nextMonth} style={styles.navigationButton}>
              <Image source={Arrow4} style={styles.Arrow3} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Sep 2023 And Image */}
      </View>
      <View style={styles.dayNames}>{renderDaysOfWeek()}</View>
      {renderCalendar()}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 325,
    resizeMode: 'cover',
    padding: "3%"
  },
  header: {
    justifyContent: 'space-between',
    width: '100%'
  },
  navigationButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  monthYear: {
    fontSize: 18,
    fontFamily: Fonts.SF_Medium,
    color: Colors.White,
  },
  dayNames: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '4%',
  },
  dayOfWeek: {
    fontSize: 14,
    width: '14.28%',
    textAlign: "center",
    fontFamily: Fonts.SF_Regular,
    color: Colors.White,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayContainer: {
    flex: 1,
    paddingVertical: '2.7%',
    marginHorizontal:'1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    width: 25,
    height: 25,
    borderRadius: 15, // Half of the width and height for a perfect circle
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontSize: 16,
    color: Colors.White,
  },
  selectedDate: {
    backgroundColor: '#10FF9A',
    borderRadius:25
  },
  selectedDateText: {
    color: 'black',
    fontSize:14,
    fontFamily:Fonts.SF_SemiBold
  },
  prevNextMonthDate: {
    height: 0,
    bottom: '200%'
  },
  prevNextMonthDateText: {
    fontSize: 0,
  },
  Arrow3: {
    width: 20, height: 20
  }
});

export default CustomCalendar2;
