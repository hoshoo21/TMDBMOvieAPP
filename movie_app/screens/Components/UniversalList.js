import React from "react";

import { StyleSheet, FlatList, Text, ActivityIndicator} from "react-native";
const UniversalList =(
    { 
        data, 
        renderItem, 
        horizontal, 
        loading, 
        onLoadMore, 
        ListEmptyComponent 
    }
)=>{
    return(
        <FlatList 
            data=  {data}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id ? `${item.id}-${index}` : index.toString()}
            horizontal={horizontal}
            showsHorizontalScrollIndicator={false}
           // onEndReached={onLoadMore}
            onEndReachedThreshold={0.5}
            contentContainerStyle= {styles.container}
            ListFooterComponent={loading ? <ActivityIndicator size="small" /> : null}
            ListEmptyComponent={ListEmptyComponent || <Text>No items found.</Text>}
        ></FlatList>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 90,
    }
});

export default UniversalList;