import react, { useState } from "react";
import { EvilIcons } from '@expo/vector-icons';
import { Input, Button, Text } from 'react-native-elements';
import { StyleSheet, View } from "react-native"; 
import { colors } from "../../utils/Constants";
const SearchComponent=({onSearch})=>{
    const [searchContent, setSearchContent]= useState("");

    return (
        <View  style={styles.searchContainer}>
            <View>
                <Input 
                    value={searchContent}
                    onChangeText={setSearchContent}
                    inputStyle={styles.searchText}
                    placeholder="Enter search here" 
                    placeholderTextColor="#9CA3AF"          
                    inputContainerStyle={styles.inputBox}
                    onSubmitEditing={()=>onSearch(searchContent,1)}   
                    rightIcon ={<EvilIcons name="search" size={24} />}
               />
            </View>
           
        </View>
    )



}

const styles = StyleSheet.create({
    searchContainer: {
        padding: 10,
        backgroundColor: "#F5F7FA",
      },
    searchText: {
        fontSize: 16,
        paddingHorizontal: 10,
      },
      inputBox: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderBottomWidth: 0,
        paddingHorizontal: 5,
        marginBottom: 10,
      },
  });
  

export default SearchComponent;

