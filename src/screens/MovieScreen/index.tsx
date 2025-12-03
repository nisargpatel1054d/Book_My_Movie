import React, {useEffect, useState} from 'react';
import style from './style';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import images from '../../config/image';
import color from '../../config/colors';
import {useDispatch, useSelector} from 'react-redux';
import {
  commingSoonMovie,
  selectError,
  selectLoading,
  selectMovie,
} from './movieSlice';
import {
  currentPlaying,
  selectCurrentplaying,
  selectNowPlayingMovieError,
  selectPlayingMovieLoading,
} from './movieplayingSlice';

const Handlemovie = ({navigation}: {navigation: any}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const movieslist = useSelector(selectMovie);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  console.log('movie datataa', movieslist.results);

  const dispatch = useDispatch<any>();
  useEffect(() => {
    dispatch(commingSoonMovie());
  }, [dispatch]);
  console.log('data comming', commingSoonMovie());

  const movieslst = useSelector(selectCurrentplaying);
  const loadingcurrent = useSelector(selectPlayingMovieLoading);
  const errorcurrent = useSelector(selectNowPlayingMovieError);

  console.log('movie datataa', movieslst.results);

  const dispatchCurrentMovie = useDispatch<any>();
  useEffect(() => {
    dispatch(currentPlaying());
  }, [dispatchCurrentMovie]);
  console.log('data comming', currentPlaying());

  const movies = [
    {
      poster: images.movieimage2,
      title: 'Quantumania',
      duration: '2 hour 6 minutes',
      genres: 'Fantasy, Action, Superhero',
      rating: 4.0,
      date: '25-12-2022',
      reviews: 869,
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage3,
      title: 'Avatar',
      duration: '2 hour',
      genres: 'Action, adventure, sci-fi',
      rating: 4.8,
      date: '20-12-2022',
      reviews: 1222,
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage4,
      title: 'Batman VS Superman',
      duration: '2 hour 20 minutes',
      genres: 'Fantasy, Action, Superhero',
      rating: 4.9,
      date: '17-3-2021',
      reviews: 1670,
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage6,
      title: 'Shazam',
      duration: '1 hour 59 minutes',
      genres: 'Comedy, Action, Superhero',
      rating: 3.3,
      date: '23-8-2019',
      reviews: 670,
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage5,
      title: 'Guardian of Galaxy',
      duration: '2 hour 13 minutes',
      genres: 'Action, Superhero',
      rating: 4.7,
      date: '2-4-2021',
      reviews: 1470,
      location: 'Vincom Ocean Park CGV',
    },
    {
      poster: images.movieimage7,
      title: 'Shang-Chi',
      duration: '2 hour 30 minutes',
      genres: 'Fantasy, Action, Superhero',
      rating: 3.9,
      date: '16-9-2023',
      reviews: 970,
      location: 'Vincom Ocean Park CGV',
    },
  ];

  const comingSoonMovies = [
    {
      poster: images.movieimage6,
      title: 'Shazam',
      duration: '1 hour 59 minutes',
      genres: 'Comedy, Action, Superhero',
      rating: 3.3,
      date: '23-8-2019',
      reviews: 670,
    },
    {
      poster: images.movieimage5,
      title: 'Guardian of Galaxy',
      duration: '2 hour 13 minutes',
      genres: 'Action, Superhero',
      rating: 4.7,
      date: '2-4-2021',
      reviews: 1470,
    },
    {
      poster: images.movieimage7,
      title: 'Shang-Chi',
      duration: '2 hour 30 minutes',
      genres: 'Fantasy, Action, Superhero',
      rating: 3.9,
      date: '16-9-2023',
      reviews: 970,
    },
  ];

  const movie = selectedIndex === 0 ? movieslst.results : movieslist.results;

  const renderItem = ({item, index}: {item: any; index: number}) => {
    const isLeftColumn = index % 2 === 0;
    const column = index % 3;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginRight: isLeftColumn ? 8 : 0,
          marginTop: 33,
        }}
        onPress={() => navigation.navigate('handlemoviedetail', {movie: item})}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={style.poster}
        />
        <Text style={style.title}>{item.original_title}</Text>
        <Text style={style.rating}>
          ⭐ {item.vote_average}{' '}
          <Text style={style.reviews}>({item.vote_count})</Text>
        </Text>
        <View style={style.iconview}>
          <Image source={images.clockW} />
          <Text style={style.meta}> 2h{item.duration}</Text>
        </View>
        <View style={style.iconview}>
          <Image source={images.video} />
          <Text style={style.meta} numberOfLines={2}>
            {item.genres}Adventure, Sci-fi
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const rendercomming = ({item, index}: {item: any; index: number}) => {
    const isLeftColumn = index % 2 === 0;
    const column = index % 3;
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          marginRight: isLeftColumn ? 8 : 0,
          marginTop: 33,
        }}
        onPress={() => navigation.navigate('handlemoviedetail', {movie: item})}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
          style={style.poster}
        />
        <Text style={style.title}>{item.original_title}</Text>
        <View style={style.iconview}>
          <Image source={images.calendarW} />
          <Text style={style.meta}>{item.release_date}</Text>
        </View>
        <View style={style.iconview}>
          <Image source={images.video} />
          <Text style={style.meta} numberOfLines={2}>
            {item.genres}Adventure, Sci-fi
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

const renderMovieItem = selectedIndex === 0 ? renderItem : rendercomming;

  return (
    <SafeAreaView style={style.safearea}>
      <View style={style.mainview}>
        <SegmentedControl
          values={['Now playing', 'Coming soon']}
          selectedIndex={selectedIndex}
          onChange={event => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          }}
          backgroundColor={color.cocoBlack}
          sliderStyle={style.segmentsliderStyle}
          fontStyle={style.segmentfont}
          activeFontStyle={style.segmentactiveFontStyle}
          style={style.segmentbutton}></SegmentedControl>

        <FlatList
          data={movie}
          pagingEnabled={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderMovieItem}
          contentContainerStyle={style.flatlistcontentContainerStyle}
          columnWrapperStyle={style.flatlistcolumnWrapperStyle}
        />
        <Text>page under devlopment</Text>
      </View>
    </SafeAreaView>
  );
};
export default Handlemovie;
