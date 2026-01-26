import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { commonStyles } from "../../styles/commonStyles";
const genreIconMap = {
    28: "sword-cross",      // Action
    12: "compass-outline",  // Adventure
    16: "animation",        // Animation
    35: "emoticon-happy",   // Comedy
    80: "gavel",            // Crime
    99: "camera",           // Documentary
    18: "theater",          // Drama
    27: "ghost",            // Horror
    10749: "heart",         // Romance
    878: "rocket-launch",   // Science Fiction
     
};

const GenericChip =({item, onPress})=>{
    console.log(item.iid);
    const label = item.name;
    const iconname  = genreIconMap[item.id] || "movie-open";
    return (
        <TouchableOpacity
            style={commonStyles.genreChip}
            onPress={()=>{onPress(item)}}
            TouchableOpacity = {0.7}

        >
            <Text style={commonStyles.genreText}>{label}
                {item.iso_3166_1?
                    item.iso_3166_1 === 'US' ? '🇺🇸 ' : ''+ item.name:''
                }
                
            </Text>

        </TouchableOpacity>
    );
}

export default GenericChip;