import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import style from './style';
import Header from '../../component/Header';
import images from '../../config/image';

const Handlesingleticket = ({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) => {
  const {ticket} = route.params;

  return (
    <SafeAreaView style={style.areaview}>
      <Header
        image1={images.leftArrow}
        imagestyle={undefined}
        title={'My ticket'}
        titlestyle={undefined}
        headerstyle={undefined}
        onpress={() => navigation.goBack()}></Header>
      <ScrollView>
        <View style={style.mainview}>
          <View style={style.mainsubview}>
            <View style={style.subview}>
              <View>
                <Image source={ticket.poster} style={style.image} />
              </View>

              <View style={style.moviedetail}>
                <Text
                  style={style.title}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {ticket.title}
                </Text>
                <View style={style.imgtextview}>
                  <Image source={images.clockB} />
                  <Text>{ticket.duration}</Text>
                </View>
                <View style={style.imgtextview}>
                  <Image source={images.videoB} />
                  <Text>Action, adventure, sci-fi</Text>
                </View>
              </View>
            </View>

            <View style={style.chaircalenderview}>
              <View style={style.calenderview}>
                <Image source={images.calendarG} />
                <View>
                  <Text>14h15’</Text>
                  <Text>10.12.2022</Text>
                </View>
              </View>

              <View style={style.chairview}>
                <Image source={images.chair} />
                <View>
                  <Text>Section 4</Text>
                  <Text>Seat H7, H8</Text>
                </View>
              </View>
            </View>
            <View style={style.divider} />

            <View style={style.moviedetailview}>
              <View style={style.moneyview}>
                <Image source={images.moneySend} />
                <Text style={style.moneytext}>210.000 VND</Text>
              </View>
              <View style={style.locationmainview}>
                <Image source={images.locationB} />
                <View>
                  <View style={style.locationview}>
                    <Text style={style.locationtext}>Vincom Ocean Park</Text>
                    <Image source={images.locationImage} />
                  </View>

                  <Text style={style.subtext}>
                    4th floor, Vincom Ocean Park, Da Ton, Gia Lam, Ha Noi
                  </Text>
                </View>
              </View>
              <View style={style.qrtextview}>
                <Image source={images.note} />
                <Text style={style.subtext} numberOfLines={2}>
                  Show this QR code to the ticket counter to receive your ticket
                </Text>
              </View>
            </View>
          </View>
          <View style={style.ellipsedividerview}>
            <Image
              source={images.ellipseL}
              resizeMode="contain"
            />
            <View style={style.divider2} />
            <Image
              source={images.ellipseR}
              resizeMode="contain"
            />
          </View>
          <View style={style.barcodeview}>
            <Image
              source={images.barcode}
              style={style.barcode}
            />
            <Text>Oder ID: 78889377726</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Handlesingleticket;
