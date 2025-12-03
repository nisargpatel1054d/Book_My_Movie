import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../component/Header';
import style from './style';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import {NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import images from '../../config/image';
import color from '../../config/colors';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = 72;

const Handleseat = ({navigation, route}: {navigation: any; route: any}) => {
  const { item } = route.params || {};

  const row = 'ABCDEFGHIJ'.split('');
  const cols = Array.from({length: 13}, (_, i) => i + 1);
  const allSeats = row.flatMap(row => cols.map(col => `${row}${col}`));

  const [selectedseat, setSelectedseat] = useState<string[]>([]);
  const [selectedTime, setSelectedTime] = useState('14:15');
  const flatListRef = useRef(null);
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(today.format('YYYY-MM-DD'));

  const dates: moment.Moment[] = [];
  for (let i = 0; i < 180; i++) {
    dates.push(moment().add(i, 'days'));
  }

  const timeSlots = ['09:30', '11:05', '14:15', '16:30', '20:00', '22:30'];

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const centerIndex = Math.round(e.nativeEvent.contentOffset.x / ITEM_WIDTH);
    const date = dates[centerIndex];
    if (date) {
      setSelectedDate(date.format('YYYY-MM-DD'));
    }
  };

  const reservedSeats = [
    'D6',
    'D7',
    'D8',
    'D9',
    'D10',
    'E4',
    'E5',
    'E6',
    'E7',
    'E8',
    'E9',
    'E10',
    'E11',
    'F7',
    'F8',
    'F9',
    'F10',
  ];

  const toggleSeat = (seat: string) => {
    if (reservedSeats.includes(seat)) return;

    const isSelected = selectedseat.includes(seat);

    if (isSelected) {
      setSelectedseat(prev => prev.filter(s => s !== seat));
    } else {
      setSelectedseat(prev => [...prev, seat]);
    }
  };

  const renderSeat = ({item: seat}: {item: string}) => {
    const isReserved = reservedSeats.includes(seat);
    const isSelected = selectedseat.includes(seat);
    const textColor = isReserved ? color.silverGray : isSelected ? color.black : color.ironFist;

    return (
      <TouchableOpacity
        onPress={() => toggleSeat(seat)}
        disabled={isReserved}
        style={[
          style.seat,
          isReserved && style.reserved,
          isSelected && !isReserved && style.selected,
        ]}>
        <Text style={[style.text, {color: textColor}]}>{seat}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({item}: {item: moment.Moment}) => {
    const isSelected = item.format('YYYY-MM-DD') === selectedDate;
    return (
      <TouchableOpacity onPress={() => setSelectedDate(item.format('YYYY-MM-DD'))}>
        <View
          style={[style.renderiteammainview,{
            backgroundColor: isSelected ? color.cakepopSorbet : color.umbra,
            
          }]}>
          <Text style={{color: isSelected ? color.black : color.ironFist, fontSize: 16}}>
            {item.format('MMM')}
          </Text>
          <View
            style={[style.renderiteamsubview,{
              backgroundColor: isSelected ? color.black : color.carbon,
              
            }]}>
            <Text
              style={[style.renderiteamtext,{
                color: isSelected ? color.white : color.ironFist,
              }]}>
              {item.format('DD')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderTime = ({item}: {item: string}) => {
    const isSelected = item === selectedTime;

    return (
      <TouchableOpacity
        onPress={() => setSelectedTime(item)}
        style={[style.rendertimetouchable,{
          backgroundColor: isSelected ? color.burntCoffee : color.umbra,
          borderColor: isSelected ? color.cakepopSorbet : 'transparent',
          
        }]}>
        <Text
          style={style.tochabletext}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.areaview}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Select seat'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}
      />


      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={style.divider} />

          <View style={{marginTop: 50}}>
            <FlatList
              data={allSeats}
              keyExtractor={item => item}
              renderItem={renderSeat}
              numColumns={13}
              contentContainerStyle={style.container}
              scrollEnabled={true}
            />
          </View>

          <View
            style={style.threemodemainview}>
            <View style={style.threemodeview}>
              <View style={style.available} />
              <Text style={style.typefont}>Available</Text>
            </View>
            <View style={style.threemodeview}>
              <View style={style.resurve} />
              <Text style={style.typefont}>Reserved</Text>
            </View>
            <View style={style.threemodeview}>
              <View style={style.select} />
              <Text style={style.typefont}>Selected</Text>
            </View>
          </View>

          <View>
            <Text style={style.title}>Select Date & Time</Text>
          </View>

          <View style={style.flatlisttecketselectview}>
            <FlatList
              ref={flatListRef}
              data={dates}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.format('YYYY-MM-DD')}
              renderItem={renderItem}
              snapToInterval={ITEM_WIDTH}
              decelerationRate="fast"
              scrollEventThrottle={16}
              onScroll={onScroll}
              contentContainerStyle={{
                paddingHorizontal: (width - ITEM_WIDTH) / 2,
              }}
              initialScrollIndex={0}
              getItemLayout={(data, index) => ({
                length: ITEM_WIDTH,
                offset: ITEM_WIDTH * index,
                index,
              })}
            />
          </View>

          <View style={style.flatlistview}>
            <FlatList
              data={timeSlots}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderTime}
              keyExtractor={item => item}
              contentContainerStyle={{
                paddingHorizontal: (width - ITEM_WIDTH) / 2,
              }}
            />
          </View>

          <View style={style.divider2} />

          <View
            style={style.ticketdetailview}>
            <View>
              <Text style={style.total}>
                Total
              </Text>
              <Text
                style={style.pricetext}>
                210.000 VND
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate('paymentscreen', {item})}>
                <Text style={style.buytickets}>Buy ticket</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Handleseat;