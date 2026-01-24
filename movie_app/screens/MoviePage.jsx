import React, { useContext, useEffect, useRef, useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import SearchComponent from "./Components/SearchComponent";
import ListComponent from "./Components/ListComponent";
import { MediaContext } from "../context/mediaContext";
import { useMediaActions } from "../context/useMediaActions";
const MoviePage =(props)=>{
    const [query,setQuery]= useState("");
    const {state,dispatch} = useContext(MediaContext);
    const {searchAction,resetSearch} = useMediaActions();

    const totalPages = state.search_results.total_pages || 1;
    const loading = state.search_results.loading;

    const pageRef = useRef(1);
   
    const allMovies = Object.values(state.search_results.data).flat();

    // 2. Iterate to show titles
    allMovies.forEach(movie => {
        console.log(movie.title);
    });

    const search_results = Object.keys(state.search_results.data)
    .sort((a, b) => Number(a) - Number(b)) // Forces numerical order: 1, 2, 3...
    .flatMap((pageKey) => state.search_results.data[pageKey]);
    console.log("result updated");
    
    const endReached = pageRef.current >= totalPages;
 
    const handleSearch =async (content)=>{
        setQuery(content);
        pageRef.current =1;
        resetSearch();
        
        await searchAction(content, 1);
        
    }
    const loadMore =()=>{
        // 1. Prevent overlapping calls or empty searches
        if (!query || loading || pageRef.current >= totalPages) return;
        
        // 2. Check if we actually have more pages to fetch
        if (pageRef.current >= totalPages) return;

        // 3. Increment the ref BEFORE the call to "lock" this page
        const nextPage = pageRef.current + 1;
        pageRef.current = nextPage;

        console.log(`Fetching page ${nextPage} of ${totalPages}`);
        searchAction(query, nextPage);
            
    
    }
    return(
        <View style={styles.pageContainer}>
            <SearchComponent onSearch={handleSearch}/>
            {
             search_results.length>0?   
                <ListComponent  
                    movies = {search_results} endReached={endReached} loadMore={loadMore} loading={loading}
                    style ={{flex:1}}
                />
                :<View></View>                
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer:{
        flex:1,
        marginTop:5,
        padding:5
    }
});
export default MoviePage;