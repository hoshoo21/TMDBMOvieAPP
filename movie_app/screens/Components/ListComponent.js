import React from "react";
import { View, FlatList, StyleSheet,ActivityIndicator,  Text } from "react-native";
import ListItem from "./ListItem";
import colors from "../../styles/colors";
const ListComponent = ({ movies, loadMore,loading ,style, endReached}) => {
    
    return (
          <FlatList
          data={movies || []}                     // fallback if undefined
          style ={style}
          keyExtractor={(item,index) => index.toString()}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={() => {
            if (loading) return <ActivityIndicator style={{ margin: 15 }} size="large" color={colors.textPrimary} />;
            if (endReached && movies.length > 0) return <Text style={{ textAlign: "center", padding: 10, color: "#888" }}>End of results</Text>;
            return null;
            }}
          renderItem={({ item, index }) => {
           return( <View
              style={[
                styles.listItem,
                { backgroundColor: index % 2 === 0 ? colors.primary:colors.primary },
              ]}
            >
                <ListItem item ={item} />
            </View>)
          }}
          />
      
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 5,
  },
  listItemText: {
    fontSize: 16,
    color: colors.primary,
  },
});

export default ListComponent;
