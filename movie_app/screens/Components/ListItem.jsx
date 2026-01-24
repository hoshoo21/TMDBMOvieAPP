import React from "react";
import {View, Text,Image, StyleSheet, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
const ListItem = ({item})=>{
    const navigation =useNavigation();
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
        backgroundColor:'#fff',
        borderRadius:8,
        elevation:2,
        shadowColor:'#000',
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
        color :'#11182'
    },
    rating :{
        fontSize:14,
        color: "#F59E0B",

    },
    country:{
        fontSize:12,
        color:"#6B7280"
    }
    
});

export default ListItem;