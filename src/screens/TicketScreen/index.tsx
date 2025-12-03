import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../component/Header';
import style from './style';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {FlatList} from 'react-native';
import images from '../../config/image';

const Handleticket = ({navigation}:{navigation:any}) => {
  const movies = [
    {
      poster: images.movieimage1,
      title: 'Avengers - Infinity War',
      duration: '2h29m',
      date: '13-10-2020',
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage2,
      title: 'Quantumania',
      duration: '2h6m',
      date: '25-12-2022',
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage3,
      title: 'Avatar',
      duration: '2h',
      date: '20-12-2022',
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage4,
      title: 'Batman VS Superman',
      duration: '2h20m',
      date: '17-3-2021',
      location: 'Vincom Ocean Park CGV',
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    return (
     <TouchableOpacity onPress={() => navigation.navigate('handlesingleticket', {ticket: item})}>
        <View style={style.rendermainview}>
          <View style={style.card}>
            <Image source={item.poster} style={style.poster} />
            <View style={style.cardContent}>
              <Text style={style.title}>{item.title}</Text>
              <View style={style.iconview}>
                <Image
                  source={images.clockW}
                  style={style.genreIcon}
                />
                <Text style={style.meta}>
                  {item.duration} • {item.date}
                </Text>
              </View>
              <View style={style.iconview}>
                <Image
                  source={images.locationW}
                  style={style.genreIcon}
                />
                <Text style={style.meta}>{item.location}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.safearea}>
      <Header
        title={'My Ticket'}
        titlestyle={undefined}
        imagestyle={undefined}
        headerstyle={style.titlestyle}></Header>
      <View style={style.mainview}>
        <View>
          <FlatList
            data={movies}
            scrollEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Handleticket;
