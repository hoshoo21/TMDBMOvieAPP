import React, { useContext } from "react";
import { View, StyleSheet, Text,TouchableOpacity, Image } from "react-native";
import colors from "../../styles/colors";
import { MediaContext } from "../../context/mediaContext";
import { commonStyles } from "../../styles/commonStyles";

const GenreMovieCard =({item, onPress})=>{
    const {state} = useContext(MediaContext);
    const imageURL = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
     
  
    const genres = state?.genre?.data.filter (genre => item.genre_ids?.includes(genre.id))
                    .map(ele => ele.name).join (" • ");
    


    return (
        <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
            <Image 
                source={{uri:imageURL}}
                style= {styles.poster}
                resizeMode="cover"
            />    
            <View style={styles.infoContainer}>
                <Text style={styles.title} numberOfLines={1}> {item.title} </Text>
                <Text style={styles.genres} numberOfLines={1}> {genres}</Text>
                <View style={styles.ratingRow}>
                    <Text style={styles.ratingText}>
                        Movie Rate :⭐ {item.vote_average?.toFixed(1)}/10
                    </Text>
                </View>
                <Text style={styles.overview}>
                    {item.overview}
                </Text>

            </View>
            </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    card :{
        width :170, 
        backgroundColor:colors.secondary,
        borderRadius:12,
        margin :10,
        overflow:'hidden',
        elevation:5,
        shadowColor:'#000',
        shadowOffset:{height:2, width:0},
        shadowOpacity:0.3,
        shadowRadius:4
    },
    poster:{
        width:'100%',
        height : 200,

    },
    infoContainer :{
        padding : 10,
    },
    title:{
        color:colors.text,
        fontSize:16,
        fontWeight:'bold',
        marginBottom:2,
    },
    genres:{
        color:colors.textSecondary||'#A1A1AA',
        fontSize:10,
        fontWeight:'600',
        textTransform:'uppercase',
        marginBottom:8,
    },
    ratingRow:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5,

    },
    ratingText :{
        color:colors.text,
        fontSize:12,
        fontWeight:'500'
    },
    overview:{
        color:colors.textSecondary ||'#A1A1AA',
        fontSize:11,
        lineHeight:16,
        fontStyle:'italic'
    },


});

export default GenreMovieCard;