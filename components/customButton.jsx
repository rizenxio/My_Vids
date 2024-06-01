import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        styles.button,
        containerStyles,
        isLoading ? styles.buttonLoading : null
      ]}
      disabled={isLoading}
    >
      <View style={styles.contentContainer}>
        <Text style={[styles.text, textStyles]}>
          {title}
        </Text>

        {isLoading && (
          <ActivityIndicator
            animating={isLoading}
            color="#fff"
            size="small"
            style={styles.indicator}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#F59E0B', // bg-secondary
    borderRadius: 12,
    minHeight: 62,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonLoading: {
    opacity: 0.5,
  },
  text: {
    color: '#1F2937', // text-primary
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    marginLeft: 8,
  },
});

export default CustomButton;
