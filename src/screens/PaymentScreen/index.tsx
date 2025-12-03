import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
import Header from '../../component/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import {Image} from 'react-native';
import {Pressable} from 'react-native';
import images from '../../config/image';
import color from '../../config/colors';

const Handlepayment = ({navigation, route}: {navigation: any; route: any}) => {
  const {item} = route.params;
  console.log('iteam', item);
  const [selectedId, setSelectedId] = useState(null);

  const card = [
    {
      id: '1',
      img1: images.paymentMethod1,
      name: 'Zalo Pay',
      img2: images.rightArrow,
    },
    {
      id: '2',
      img1: images.paymentMethod2,
      name: 'MoMo',
      img2: images.rightArrow,
    },
    {
      id: '3',
      img1: images.paymentMethod3,
      name: 'Shopee Pay',
      img2: images.rightArrow,
    },
    {
      id: '4',
      img1: images.paymentMethod4,
      name: 'ATM Card',
      img2: images.rightArrow,
    },
    {
      id: '5',
      img1: images.paymentMethod5,
      name: 'International payments',
      img2: images.rightArrow,
    },
  ];

  const rendercard = ({item}: {item: any}) => {
    return (
      <View>
        <Pressable
          onPress={() => setSelectedId(item.id)}
          style={[style.card, selectedId === item.id && style.selectedCard]}>
          <View
            style={style.pressableinnerview}>
            <Image source={item.img1}></Image>
            <Text
              style={style.pressabletext}>
              {item.name}
            </Text>
            <View>
              <Image source={item.img2} style={style.pressableimage}></Image>
            </View>
          </View>
        </Pressable>
      </View>
    );
  };
  return (
    <SafeAreaView style={style.areaview}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'Payment'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}></Header>

      <ScrollView style={style.rendermainview}>
        <View style={style.card}>
          <Image source={item.poster} style={style.poster} />
          <View style={style.cardContent}>
            <Text style={style.title}>{item.title}</Text>
            <View style={style.iconview}>
              <Image
                source={images.videoPlay}
                style={style.genreIcon}
              />
              <Text style={style.meta}>{item.genres}</Text>
            </View>
            <View style={style.iconview}>
              <Image
                source={images.locationW}
                style={style.genreIcon}
              />
              <Text style={style.meta}>{item.location}</Text>
            </View>
            <View style={style.iconview}>
              <Image
                source={images.clockW}
                style={style.genreIcon}
              />
              <Text style={style.meta}>{item.date}</Text>
            </View>
          </View>
        </View>
        <View style={style.seatdetailmainview}>
          <View style={style.seatdetailview}>
            <Text style={style.subtext}>Oder ID</Text>
            <Text style={style.subtext}>78889377726</Text>
          </View>
          <View style={style.seatdetailview}>
            <Text style={style.subtext}>Seat</Text>
            <Text style={style.subtext}>H7, H8</Text>
          </View>
        </View>

        <View style={style.card2}>
          <View style={style.card2subview}>
            <Image
              source={images.discount}
              style={style.discounticon}
            />
            <TextInput
              placeholder="Discount code"
              placeholderTextColor={color.nickel}
              style={style.textinput}
            />
          </View>
          <TouchableOpacity style={style.button}>
            <Text style={style.touchabletext}>Apply</Text>
          </TouchableOpacity>
        </View>
        <View style={style.divider} />
        <View>
          <Text style={style.title2}>Payment Method</Text>
        </View>
        <View>
          <FlatList
            data={card}
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={rendercard}
            contentContainerStyle={style.contentContainerStyle}
          />
        </View>
        <View style={style.container}>
          <Text style={style.text}>Complete your payment in</Text>
          <Text style={style.timer}>15:00</Text>
        </View>
        <View>
          <TouchableOpacity style={style.button2}>
            <Text style={style.touchablefont} onPress={() => Alert.alert('seat Booked')}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Handlepayment;
