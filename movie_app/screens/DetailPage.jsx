import React, { useContext, useEffect, useMemo, useRef } from "react";
import {View,Text,Image, StyleSheet, FlatList,TouchableOpacity} from 'react-native';
import { Badge } from "react-native-elements";
import { MediaContext } from "../context/mediaContext";
import { useMediaActions } from "../context/useMediaActions";
import { searchCast } from "../context/actions/castAction";
import UniversalList from "./Components/UniversalList";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import colors from "../styles/colors";
import GenreMovieCard from "./Components/GenreMovieCard";
const DetailPage=({route})=>{
    const {item} = route.params;
  
    const {state} = useContext(MediaContext);
    const {searchCast,searchSimilar} = useMediaActions();
    const pageRef = useRef(1);
    const navigation = useNavigation();
    useEffect(()=>{
      
      if (!state.movie_details?.cast){
          console.log(item.id);
          searchCast(item.id);
          
          

        }
        console.log('fetching similar movies');
        searchSimilar(item.id,pageRef.current );

     
       
    },[item]);
  
    const genres = state?.genre?.data.filter (genre => item.genre_ids?.includes(genre.id))
                    .map(ele => ele.name).join (" • ");
   
    const loadMore = ()=>{
      pageRef.current =pageRef.current +1;
      searchSimilar(item.id, pageRef.current);
    }
    console.log("geting state of similar movies");
    const similarMovies = Object.values(state.similarMovies?.data||[]).flat();
    console.log("similar movies");
    console.log(state.similarMovies);
    const rawCast =state.movie_details[item.id]?.cast || [];
    const rawCrew = state.movie_details[item.id]?.crew|| [];
    const directors = rawCrew.filter (person => person.known_for_department==="Directing");
    const actors = useMemo(()=>{
      return rawCast.filter (person => person.known_for_department==="Acting");
    },[rawCast]) ;
    const loading = state.movie_details[item.id]?.loading;
    
    return (
      <ScrollView contentContainerStyle={styles.scollContainer}>
            <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={styles.poster}
            />
             <View style={styles.infoSection}>
       
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.overview} >{item.overview}</Text>
             <Text style={styles.title}> {genres} </Text>  
           
            <Text style={styles.releaseDate} >Release Year {new Date(item.release_date).getFullYear()}</Text>
            <UniversalList 
              data = {directors}
              horizontal={true}
              loading={loading}
              renderItem={({item})=>(
                <View style={styles.castAvatar}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={()=>navigation.navigate("ActorDetails", {item})}

                  >
                    <Image 
                      source={{ uri: `https://image.tmdb.org/t/p/w300${item.profile_path}`}}
                      style={styles.image}
                      />
                  </TouchableOpacity> 
                  <TouchableOpacity>  
                   <Text style={styles.name}>{item.name}</Text>
                 
                  </TouchableOpacity>
                </View>
              )}
              >

              </UniversalList>

            <UniversalList 
              data={actors}
              horizontal={true}
              loading={loading}
              //`https://image.tmdb.org/t/p/w500/zSQoqg39mF0x6kZScAdyHbPlniQ.jpg
              renderItem={({item})=>(
                <View style={styles.castAvatar}>
                 <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={()=>navigation.navigate("ActorDetails", {item})}
                 
                 >
                  <Image 
                      source={{ uri: `https://image.tmdb.org/t/p/w300${item.profile_path}`}}
                      style={styles.image}
                      />
                  
                  </TouchableOpacity> 
                     <Text style={styles.name}>{item.name}</Text>
                   <Text style = {styles.character} >as {item.character}</Text>  
                </View>
              )}
              ></UniversalList>
                
          
           </View>
        </ScrollView>
    )
}

const styles =StyleSheet.create({
  badgeStyle: {
    position: 'absolute', // Position the badge over the child component
    right: 10, // Adjust position as needed
    top: 30,
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
    scrollContainer: {
      paddingBottom: 40, 
      backgroundColor: '#fff',
      
    },
    infoSection: {
      paddingHorizontal: 15, // Better alignment for text
    },
    poster: {
        width: "100%",
        height: 400,
        borderRadius: 10,
      },
      title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
      },
      releaseDate: {
        fontSize: 16,
        fontWeight: "bold",
        marginVertical: 10,
      },
      overview: {
        fontSize: 14,
        color: "#374151",
      },
        castAvatar: {
          width: 100,             // Fixed width for each item in the horizontal list
          alignItems: 'center',    // Center text under the image
          marginHorizontal: 8,     // Space between actors
          marginVertical: 10,

      },
      image: {
          width: 80,               // Circular dimensions
          height: 80,
          borderRadius: 40,        // Half of width/height makes it a circle
          backgroundColor: '#e1e1e1', // Placeholder color
          marginBottom: 8,
          borderWidth: 2,
          borderColor: '#fff',     // Optional white border to make it pop
      },
      name: {
          fontSize: 14,
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'center',
      },
      character: {
          fontSize: 12,
          color: '#666',
          textAlign: 'center',
          fontStyle: 'italic',
      }
    });
export default DetailPage;

