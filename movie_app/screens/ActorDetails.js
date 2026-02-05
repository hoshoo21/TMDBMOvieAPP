import React, { useContext, useEffect, useRef } from "react";
import {  View, StyleSheet, Text, Image, ScrollView } from "react-native";
import UniversalList from "./Components/UniversalList";
import { MediaContext } from "../context/mediaContext";
import { useMediaActions } from "../context/useMediaActions";
import { searchActor } from "../context/actions/actorAction";
import { commonStyles } from "../styles/commonStyles";
import colors from "../styles/colors";
import ListItem from "./Components/ListItem";
const ActorDetails=({route})=>{
    const{item} = route.params;
    const {searchActor} = useMediaActions();
    const {state} = useContext(MediaContext);
    const pageRef = useRef(1);
    useEffect(()=>{
        if (!state.actor_detail[item.id]) {
            console.log("Fetching new actor data for ID:", item.id);
            searchActor(item.name, item.id, pageRef.current);
        }
    }, []);
    console.log(item.id);
   
   
    
    const details = state.actor_detail[item.id];
    const renderHeader = ()=>(
        <View style={{paddingBottom:40}}>
        <Image style ={commonStyles.poster}
            source= {{uri:`https://image.tmdb.org/t/p/w300${details.details.profile_path}`}}
            />  
        <Text style={commonStyles.headerText} >{details.details.name } </Text>
        <Text style={commonStyles.bodyText}> {details.details.biography}  </Text>
        <Text style={{ color:colors.textPrimary, fontWeight: 'bold', marginTop: 20 }}>Known for</Text>
        </View>
   
    )
    return (
          
        <View style={{ flex: 1, backgroundColor:colors.primary}}>
                  
                                
                {details?
                         
                                 <UniversalList 
                                data={details.movies.results[0]["known_for"]}
                                horizontal={false}
                              
                                ListHeaderComponent = {renderHeader}
                                renderItem={({ item }) => (

                                       <ListItem item={item}/>// Replace with your Movie Card
                                )}
                            />  
                    
                    
                        
                    : <View ><Text>Loading...</Text></View>
                }
       
                </View>
    )


}

const styles =StyleSheet.create({
    infoSection: {
        paddingHorizontal: 15, // Better alignment for text
      },
})
export default ActorDetails;