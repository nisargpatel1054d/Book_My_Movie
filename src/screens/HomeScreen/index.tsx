import React, {useEffect, useRef, useState} from 'react';
import style from './style';
import {Button, Dimensions, FlatList, Image, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../component/Header';
import {Icon, IconButton, Searchbar} from 'react-native-paper';
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import images from '../../config/image';
import store from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovie} from './homeSlice';

import {selectMovieList} from './homeSlice';
import {selectMovieLoading} from './homeSlice';
import {selectMovieError} from './homeSlice';
import {
  nowPlaying,
  selectNowplaying,
  selectNowPlayingMovieError,
  selectNowPlayingMovieLoading,
} from './homeplayingSlice';
import { userData } from '../SetNameScreen/nameSlice';

const Handlehome = ({route, navigation}: any) => {

  const [searchQuery, setSearchQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const onChangeSearch = (query: React.SetStateAction<string>) =>
    setSearchQuery(query);

  const clearSearch = () => setSearchQuery('');

  const {width} = Dimensions.get('window');

  const activeIndexRef = useRef(0);

  const moviedata = useSelector(selectMovieList);
  const loading = useSelector(selectMovieLoading);
  const error = useSelector(selectMovieError);

  console.log('movie datataa', moviedata.results);

  const nowplayingmoviedata = useSelector(selectNowplaying);
  const nowplayingloading = useSelector(selectNowPlayingMovieLoading);
  const nowplayingerror = useSelector(selectNowPlayingMovieError);

  console.log('movie datataa', nowplayingmoviedata);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(fetchMovie());
  }, [dispatch]);
  console.log('data comming', fetchMovie());

  const dispatchNowPlaying = useDispatch<any>();
  useEffect(() => {
    dispatch(nowPlaying());
  }, [dispatchNowPlaying]);
  console.log('data comming', nowPlaying());

  const username = useSelector(userData)

  const movies = [
    {
      poster: images.movieimage1,
      title: 'Avengers - Infinity War',
      duration: '2h29m',
      genres: 'Action, adventure, sci-fi',
      rating: 4.8,
      date: '13-10-2020',
      reviews: 1222,
    },
    {
      poster: images.movieimage2,
      title: 'Quantumania',
      duration: '2h6m',
      genres: 'Fantasy, Action, Superhero',
      rating: 4.0,
      date: '25-12-2022',
      reviews: 869,
    },
    {
      poster: images.movieimage3,
      title: 'Avatar',
      duration: '2h',
      genres: 'Action, adventure, sci-fi',
      rating: 4.8,
      date: '20-12-2022',
      reviews: 1222,
    },
    {
      poster: images.movieimage4,
      title: 'Batman VS Superman',
      duration: '2h20m',
      genres: 'Fantasy, Action, Superhero',
      rating: 4.9,
      date: '17-3-2021',
      reviews: 1670,
    },
    {
      poster: images.movieimage6,
      title: 'Shazam',
      duration: '1h59m',
      genres: 'Comedy, Action, Superhero',
      rating: 3.3,
      date: '23-8-2019',
      reviews: 670,
    },
    {
      poster: images.movieimage5,
      title: 'Guardian of Galaxy',
      duration: '2h13m',
      genres: 'Action, Superhero',
      rating: 4.7,
      date: '2-4-2021',
      reviews: 1470,
    },
    {
      poster: images.movieimage7,
      title: 'Shang-Chi',
      duration: '2h30m',
      genres: 'Fantasy, Action, Superhero',
      rating: 3.9,
      date: '16-9-2023',
      reviews: 970,
    },
  ];
  const services = [
    {
      image: images.service1,
      service: '4DX',
    },
    {
      image: images.service2,
      service: 'Retal',
    },
    {
      image: images.service3,
      service: 'Imax',
    },
    {
      image: images.service4,
      service: 'Sweetbox',
    },
    {
      image: images.service1,
      service: 'Retal',
    },
    {
      image: images.service2,
      service: '4DX',
    },
    {
      image: images.service3,
      service: 'Sweetbox',
    },
    {
      image: images.service4,
      service: 'Imax',
    },
  ];

  const news = [
    {
      newsimage: images.news1,
      news: 'When The Batman 2 Starts Filming Reportedly Revealed',
    },
    {
      newsimage: images.news2,
      news: '6 Epic Hulk Fights That Can Happen In The MCUs Future',
    },
    {
      newsimage: images.news1,
      news: 'When The Batman 2 Starts Filming Reportedly Revealed',
    },
    {
      newsimage: images.news2,
      news: '6 Epic Hulk Fights That Can Happen In The MCUs Future',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let nextIndex = (activeIndexRef.current + 1) % movies.length;

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });

      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const rendernowplaying = ({item}: {item: any}) => {
    return (
      <View style={style.renderplayingview}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={style.poster}
        />
        <Text style={style.title}>{item.title}</Text>
        <Text style={style.meta}>
          2h{item.duration} . {item.genres}Action, adventure, sci-fi
        </Text>
        <Text style={style.rating}>
          ⭐ {item.vote_average}{' '}
          <Text style={style.reviews}>({item.vote_count})</Text>
        </Text>
      </View>
    );
  };

  const rendercomingsoon = ({item, index}: {item: any; index: number}) => (
    <View style={style.comingSoonCard}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
        style={style.comingSoonImage}
      />
      <Text style={style.title} numberOfLines={2}>
        {item.title}
      </Text>

      <View style={style.genreRow}>
        <Image source={images.video} style={style.genreIcon} />
        <Text style={style.meta} numberOfLines={2}>
          Coming Soon
        </Text>
      </View>
      <View style={style.dateRow}>
        <Image source={images.calendarW} style={style.genreIcon} />
        <Text style={style.date}>{item.release_date}</Text>
      </View>
    </View>
  );

  const renderservice = ({item, index}: {item: any; index: number}) => (
    <View style={style.serviceCard}>
      <Image source={item.image} style={style.serviceimage} />
      <Text style={style.servicename} numberOfLines={2}>
        {item.service}
      </Text>
    </View>
  );

  const rendernews = ({item, index}: {item: any; index: number}) => (
    <View style={style.newsCard}>
      <Image source={item.newsimage} style={style.newsimage} />
      <Text style={style.news} numberOfLines={2} ellipsizeMode="tail">
        {item.news}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={style.safearea}>
      <KeyboardAvoidingScrollView>
        <Header
          title1={`Hi, ${username} 👋`}
          title2="Welcome back"
          image2={images.bell}
          titlestyle={undefined}
          imagestyle={undefined}
          headerstyle={undefined}
          title={''}></Header>
        <View style={style.mainview}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            icon={() => <Image source={images.search} style={style.icon} />}
            right={
              searchQuery
                ? props => (
                    <IconButton
                      {...props}
                      icon={() => (
                        <Image source={images.error} style={style.icon} />
                      )}
                      onPress={clearSearch}
                    />
                  )
                : undefined
            }
            style={style.searchbar}
          />
          <View style={style.headingview}>
            <Text style={style.banner}>Now playing</Text>

            <View style={style.seeallview}>
              <Text style={style.seeall}>See all</Text>
              <Image source={images.seeall} style={style.image} />
            </View>
          </View>

          <View>
            <FlatList
              ref={flatListRef}
              data={nowplayingmoviedata.results}
              horizontal
              pagingEnabled
              scrollEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={rendernowplaying}
            />
            <View style={style.dotsContainer}>
              {movies.map((_, index) => (
                <View
                  key={index}
                  style={[
                    style.dot,
                    {
                      backgroundColor:
                        activeIndex === index ? '#FFC107' : '#888',
                    },
                  ]}
                />
              ))}
            </View>
          </View>
          <View style={style.headingview}>
            <Text style={style.banner}>Comming soon</Text>

            <View style={style.seeallview}>
              <Text style={style.seeall}>See all</Text>
              <Image source={images.seeall} style={style.image} />
            </View>
          </View>
          <View style={style.imageview}>
            <FlatList
              data={moviedata.results}
              horizontal
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={rendercomingsoon}
              contentContainerStyle={style.contentContainerStyle}
            />
          </View>
          <View style={style.headingview}>
            <Text style={style.banner}>Promo and Discount</Text>

            <View style={style.seeallview}>
              <Text style={style.seeall}>See all</Text>
              <Image source={images.seeall} style={style.image} />
            </View>
          </View>
          <View style={style.imageview}>
            <Image source={images.promo} style={style.promo}></Image>
          </View>
          <View style={style.headingview}>
            <Text style={style.banner}>Service</Text>

            <View style={style.seeallview}>
              <Text style={style.seeall}>See all</Text>
              <Image source={images.seeall} style={style.image} />
            </View>
          </View>
          <View style={style.imageview}>
            <FlatList
              data={services}
              horizontal
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderservice}
              contentContainerStyle={{paddingRight: 8}}
            />
          </View>
          <View style={style.headingview}>
            <Text style={style.banner}>Movie news</Text>

            <View style={style.seeallview}>
              <Text style={style.seeall}>See all</Text>
              <Image source={images.seeall} style={style.image} />
            </View>
          </View>
          <View style={style.imageview}>
            <FlatList
              data={news}
              horizontal
              pagingEnabled={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              renderItem={rendernews}
            />
          </View>
          {/* <Button title="Open Drawer" onPress={() => navigation.toggleDrawer()} />
          </Button> */}

        </View>
      </KeyboardAvoidingScrollView>
    </SafeAreaView>
  );
};
export default Handlehome;
