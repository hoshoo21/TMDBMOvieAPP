import React ,{useContext, useEffect, useState} from "react";
import { StyleSheet, View, Text,TouchableOpacity, FlatList } from "react-native";
import UniversalList from "./Components/UniversalList";
import { MediaContext } from "../context/mediaContext";
import {getMovieGenres} from "../context/actions/genreAction";
import { useMediaActions } from "../context/useMediaActions";
import { commonStyles } from "../styles/commonStyles";
import GenericChip from "./Components/GenericChip";
import { useNavigation } from "@react-navigation/native";
const ExpandableSections =({genres, countries })=>{

  
}

const HomePage = ()=>{
    const [expandedSection, setExpandedSection]= useState(null);
    const {state} = useContext(MediaContext);
    const {getMovieGenres} = useMediaActions();
    const navigation = useNavigation();
    useEffect(()=>{
        getMovieGenres();
    }, []);
   
    const sections = [
        { id: '1', title: 'Genres', data: state.genre? state.genre: [], type: 'text' },
    
        { id: '2', title: 'Contries', data: state.genre? state.genre: [], type: 'text' },  
    ];
    console.log(sections);
    const toggleSection = (id)=>{
        setExpandedSection(expandedSection == id?null : id);

    
    };
    const renderSection=({item})=>{
        const isOpen  = expandedSection ===item.id;
        
        return (
            <View style={commonStyles.sectionWrapper}>
                <TouchableOpacity 
                activeOpacity={0.7}
                style={[commonStyles.header, isOpen && { backgroundColor: '#f3f4f6' }]}
                onPress={()=>toggleSection(item.id)}
>
                    <Text style={commonStyles.headerText} > {item.title}</Text>
                    <Text style={commonStyles.icon}>{isOpen ? '▲' : '▼' }   </Text>
                </TouchableOpacity>
                {isOpen &&(
                    <View style={commonStyles.content}>
                        <UniversalList
                            data= {item.data.data}
                            horizontal={false}
                            contentContainerStyle={commonStyles.contentContainerStyle}
                                renderItem={({item}) =>{
                               return (
                                <GenericChip
                                    item = {item} 
                                    onPress={(selected)=>{
 
                                        navigation.navigate("GenreMovies", {selected})
                                    }}                               

                                />
                               );
                            }}
                        />
                    </View>
                )}
            </View>
        )
    };
    return (
     <FlatList 
        data={sections}
        renderItem={renderSection}
        keyExtractor={(item)=> item.id.toString()}
        contentContainerStyle={{paddingBottom:20}}   
     />

    )
}

export default HomePage;