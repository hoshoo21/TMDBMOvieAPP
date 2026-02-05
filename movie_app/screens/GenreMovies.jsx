import React, { useContext, useEffect, useRef } from "react";

import { FlatList,SafeAreaView, StyleSheet, View, Text , TouchableOpacity} from "react-native";
import { commonStyles } from "../styles/commonStyles";
import { MediaContext } from "../context/mediaContext";
import { getMoviesByGenre } from "../context/actions/genreAction";
import { useMediaActions } from "../context/useMediaActions";
import colors from "../styles/colors";
import GenreMovieCard from "./Components/GenreMovieCard";
import { useNavigation } from "@react-navigation/native";
const GenreMovies =({route})=>{
    console.log(route.params);
    const {id, name} = route.params.selected;
    const navigation = useNavigation();
    const {state} = useContext(MediaContext);
    const {getMoviesByGenre} = useMediaActions();
    const pageRef = useRef(1);

    useEffect(()=>{
        getMoviesByGenre(id, pageRef.current);
    },[id,name]);
    
    const handleDetail= (movie)=>{
        navigation.navigate("DetailPage", {item:movie})
    }
    const loadMore = ()=>{
        pageRef.current = pageRef.current+1;
        getMoviesByGenre(id, pageRef.current);
    }
    const allMovies = Object.values(state.genreMovies?.data||[]).flat();
  
    return (
        <View style={styles.container}>
            <Text style={[commonStyles.title,{textAlign: 'center', width: '100%'}]}>{name}  Movies</Text> 
        
            <FlatList
                data = {allMovies}
                numColumns={2}
                keyExtractor={(item) => item?.id?.toString()|| Math.random().toString()} 
                onEndReached={loadMore}
                renderItem={({ item }) => (
                    <GenreMovieCard item={item} onPress={handleDetail} />
                )}
            />
         </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.primary        
      },
      
});
export default GenreMovies;

