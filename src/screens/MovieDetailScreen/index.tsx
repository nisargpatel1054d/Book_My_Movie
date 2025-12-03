import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../component/Header';
import style from './style';
import StarRating from 'react-native-star-rating-widget';
import images from '../../config/image';
import color from '../../config/colors';

const Handlemoviedetail = ({navigation, route}: any) => {
  const [rating, setRating] = useState(0);
  const [showmore, setShowmore] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const {movie} = route.params;
  console.log('moviescreen', movie)

  const Director = [
    {
      image: images.director1,
      Fname: 'Anthony',
      Lname: 'Russo',
    },
    {
      image: images.director2,
      Fname: 'Joi',
      Lname: 'Russo',
    },
  ];

  const Actor = [
    {
      image: images.actor1,
      Fname: 'Robert',
      Lname: 'Downey Jr.',
    },
    {
      image: images.actor2,
      Fname: 'Chris',
      Lname: 'Hemsworth',
    },
    {
      image: images.actor3,
      Fname: 'Chris',
      Lname: 'Evans',
    },
    {
      image: images.actor1,
      Fname: 'Robert',
      Lname: 'Downey Jr.',
    },
    {
      image: images.actor2,
      Fname: 'Chris',
      Lname: 'Hemsworth',
    },
  ];

  const cinemas = [
    {
      id: '1',
      name: 'Vincom Ocean Park CGV',
      distance: '4.55 km',
      address: 'Da Ton, Gia Lam, Ha Noi',
      logo: images.locationImage,
    },
    {
      id: '2',
      name: 'Aeon Mall CGV',
      distance: '9.32 km',
      address: '27 Co Linh, Long Bien, Ha Noi',
      logo: images.locationImage,
    },
    {
      id: '3',
      name: 'Lotte Cinema Long Bien',
      distance: '14.3 km',
      address: '7-9 Nguyen Van Linh, Long Bien, Ha Noi',
      logo: images.locationImage,
    },
  ];

  const renderdirector = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        style={style.renderdirecterview}>
        <Image source={item.image} style={style.renderdirectorimage} />
        <View>
          <Text numberOfLines={2} style={style.rendercasttext}>
            {item.Lname}
          </Text>
          <Text numberOfLines={2} style={style.rendercasttext}>
            {item.Fname}
          </Text>
        </View>
      </View>
    );
  };

  const rendercinema = ({item}: {item: any}) => {
    return (
      <View>
        <Pressable
          onPress={() => setSelectedId(item.id)}
          
          style={[style.card, selectedId === item.id && style.selectedCard]}>
          <View style={style.rendercinemasubview}>
            <Text style={style.rendercinemaname}>{item.name}</Text>
            <Text style={style.rendercinamadetails}>
              {item.distance} | {item.address}
            </Text>
          </View>
        </Pressable>
      </View>
    );
  };

  const renderactor = ({item, index}: {item: any; index: number}) => {
    return (
      <View
        style={style.renderactorview}>
        <Image
          source={item.image}
          style={style.actorimage}
        />
        <View>
          <Text numberOfLines={2} style={style.rendercasttext}>
            {item.Lname}
          </Text>
          <Text numberOfLines={2} style={style.rendercasttext}>
            {item.Fname}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={style.mainview}>
        <ScrollView>
      <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} style={style.image}>
        <View style={style.headerview}>
          <Header
            title=""
            image1={images.leftArrow}
            onpress={() => {
              console.log('Arrow pressed');
              navigation.goBack();
            }}
            titlestyle={undefined}
            imagestyle={undefined}
            headerstyle={style.headerstyle}
          />
        </View>

        <View style={style.imagebox}>
          <Text style={style.title}>{movie.title}</Text>
          <Text style={style.moviedetails}>
            {movie.duration}2h • {movie.release_date}
          </Text>

          <View style={style.ratingBox}>
            <Text style={style.reviewtext}>Review</Text>
            <Text style={style.star}> ⭐ </Text>
            <Text style={style.rating}>{movie.vote_average}</Text>
            <Text style={style.reviewCount}>({movie.vote_count})</Text>
          </View>

          <View
            style={style.ratingview}>
            <View style={{flex: 1}}>
              <StarRating
                rating={rating}
                onChange={setRating}
                color={color.vibrantHoney}
                emptyColor={color.stoneCold}
                starSize={32}
                style={style.starrating}
              />
            </View>
            <TouchableOpacity style={style.trailerButton}>
              <Text style={style.trailerText}>▶ Watch trailer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
      <View />
      <View
        style={style.movietypeview}>
        <View>
          <View style={style.typeview}>
            <Text style={style.typetitle}>Movie genre:</Text>
            <Text style={style.typeans}>{movie.genres}Action, Sci-fi</Text>
          </View>

          <View style={style.typeview}>
            <Text style={style.typetitle}>Censorship:</Text>
            <Text style={style.typeans}>13+</Text>
          </View>

          <View style={style.typeview}>
            <Text style={style.typetitle}>Language:</Text>
            <Text style={style.typeans}>English</Text>
          </View>
        </View>
        <View>
          <Text style={style.title}>Storyline</Text>
        </View>
        <View>
          <Text
            numberOfLines={showmore ? undefined : 2}
            style={style.showstyle}>
            {movie.overview}
          </Text>
          <TouchableOpacity onPress={() => setShowmore(!showmore)}>
            <Text style={style.showtext}>
              {' '}
              {showmore ? 'See Less' : 'See All'}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={style.title}>Director</Text>
        </View>

        <View style={style.flatlistview}>
          <FlatList
            data={Director}
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderdirector}
            contentContainerStyle={style.contentContainerStyle}
          />
        </View>

        <View>
          <Text style={style.title}>Actor</Text>
        </View>

        <View style={style.flatlistview}>
          <FlatList
            data={Actor}
            horizontal
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderactor}
            contentContainerStyle={style.contentContainerStyle}
          />
        </View>

         <View>
          <Text style={style.title}>Cinemas</Text>
        </View>

        <FlatList
            data={cinemas}
            pagingEnabled={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={rendercinema}
            contentContainerStyle={style.cinemacontentContainerStyle}
          />
      </View>
       <View style={{padding: 20}}>
          <TouchableOpacity style={style.button} onPress={() => navigation.navigate('bookseatscreen', { item: movie })}>
            <Text style={style.buttontext}>Continue</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    </View>
  );
};

export default Handlemoviedetail;
