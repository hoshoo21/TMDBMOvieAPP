import React from "react";
import {View,Text,Image, StyleSheet} from 'react-native';

const DetailPage=({route})=>{
    const {item} = route.params;

    return (
        <View style={{paddingHorizontal:5}}>
            <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                style={styles.poster}
            />
            <Text style={styles.title} >{item.title}</Text>
            <Text style={styles.overview} >{item.overview}</Text>
        </View>

    )
}

const styles =StyleSheet.create({
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
      overview: {
        fontSize: 14,
        color: "#374151",
      },
});
export default DetailPage;

