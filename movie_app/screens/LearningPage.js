import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const LearningPage= () => {
  const { width } = Dimensions.get('window')

  console.log(width);
  return (

   <View>
        <Text style={{ padding: 40 }}>row (default)</Text>
      <View style={{ backgroundColor:'green', flexDirection: 'row', width, height: width, }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <Text style={{ padding: 10 }}>flex-start</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <Text style={{ padding: 10, marginTop: 10 }}>center</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <Text style={{ padding: 10 }}>stretch (default)</Text>
      <View style={{ alignItems: 'stretch', backgroundColor: 'whitesmoke' }}>
        <View style={{ height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <Text style={{ padding: 10, marginTop: 10 }}>flex-start</Text>
      <View style={{ alignItems: 'flex-start',  backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <Text style={{ padding: 10, marginTop: 10 }}>center</Text>
      <View style={{ alignItems: 'center', backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
      <Text style={{ padding: 10, marginTop: 10 }}>flex-end</Text>
      <View style={{ alignItems: 'flex-end', backgroundColor: 'whitesmoke' }}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    </View>
  );
}

export default LearningPage;