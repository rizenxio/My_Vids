import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eyeHide : icons.eye}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#E5E7EB', // text-gray-100
    fontFamily: 'Poppins-Medium',
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    height: 64,
    paddingHorizontal: 16,
    backgroundColor: '#1F2937', // bg-black-100
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#374151', // border-black-200
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    color: '#FFFFFF', // text-white
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  icon: {
    width: 24, // Adjusted to a more typical icon size
    height: 24, // Adjusted to a more typical icon size
  },
});

export default FormField;
