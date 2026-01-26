import React, { useContext, useEffect, useRef } from "react";

import { FlatList,SafeAreaView, StyleSheet, View, Text , TouchableOpacity} from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { MediaContext } from "../context/mediaContext";
import { getMoviesByGenre } from "../context/actions/genreAction";
import { useMediaActions } from "../context/useMediaActions";
import colors from "../styles/colors";
import GenreMovieCard from "./Components/GenreMovieCard";
const GenreMovies =({route})=>{
    console.log(route.params);
    const {id, name} = route.params.selected;
    const {state} = useContext(MediaContext);
    const {getMoviesByGenre} = useMediaActions();
    const pageRef = useRef(1);

    useEffect(()=>{
        console.log('fethcing movies by genre')
        getMoviesByGenre(id, pageRef.current);
    },[]);

    const loadMore = ()=>{
        pageRef.current = pageRef.current+1;
        getMoviesByGenre(id, pageRef.current);
    }
    const allMovies = Object.values(state.genreMovies?.data||[]).flat();
  
    return (
     <SafeAreaView style={commonStyles.container}>
        <View style={styles.container}>
            <Text style={ commonStyles.title}>{name}  Movies</Text> 
        
            <FlatList
                data = {allMovies}
                numColumns={2}
                keyExtractor={(item) => item?.id?.toString()|| Math.random().toString()} 
                onEndReached={loadMore}
                renderItem={({ item }) => (
                    <GenreMovieCard item={item} />
                )}
            />
         </View>
    </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
      },
      
});
export default GenreMovies;

