import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colors from '../../styles/colors';

const CustomBackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="arrow-back-outline" size={28} color={colors.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'left',
    marginLeft: -5,
  },
  backText: {
    color: colors.text,
    fontSize: 16,
    marginLeft: 5,
  }
});

export default CustomBackButton;