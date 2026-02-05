import React, { useContext } from "react";
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation,StackActions } from "@react-navigation/native";
import { MediaContext } from "../../context/mediaContext";
import colors from "../../styles/colors";
const ListItem = ({item})=>{
    const navigation =useNavigation();
    const {state} = useContext(MediaContext);
    
    const genres = state?.genre?.data.filter (genre => item.genre_ids?.includes(genre.id))
                    .map(ele => ele.name).join (" • ");
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={()=>navigation.navigate("DetailPage", {item})}
        >
            <View style={styles.container}>
            <Image 
                source={
                    item.poster_path
                      ? { uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }
                      : require("../../assets/icon.png") // fallback image
                  }
                  style={styles.poster}
            />
            <View style={styles.infoContainer}> 
                  <Text style={styles.title} numberOfLines={2}>
                    {item.title || item.original_title || ''}
                  </Text>
                  <Text style ={{color:colors.textPrimary}}>
                    {genres}
                  </Text >
                  <Text style={styles.rating}>
                    ⭐{item.vote_average|| 0} 
                  </Text>
                  <Text style={styles.country}>
                    {item.original_language?.toUpperCase() || ''}
                  </Text>
            </View>
        </View>
        </TouchableOpacity>
       
    );
}

const styles = StyleSheet.create({
    container :{
        flexDirection:'row',
        padding :10,
        marginVertical:5,
        backgroundColor: colors.primary,
        borderRadius:8,
        elevation:2,
        shadowColor: colors.secondary,
        shadowOffset:{width:0,height:1},
        shadowOpacity:0.2,
        shadowRadius:2
    },
    poster: {
        width: 80,
        height: 120,
        borderRadius: 5,
      },
    infoContainer:{
        flex: 1,
        marginLeft: 10,
        justifyContent: "space-between",
    },
    title :{
        fontSize:16,
        fontWeight:'bold',
        color : colors.textPrimary
    },
    rating :{
        fontSize:14,
        color: colors.textSecondary,

    },
    country:{
        fontSize:12,
        color:colors.textSecondary
    }
    
});

export default ListItem;