import React from 'react'
import { TextInput, View, Text } from 'react-native'

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex:1
    },
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputStyle: {
        color: 'black',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        height: 35,
        width: 100,
        flex: 2
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 20,
        color: 'red'
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};


const Input = ({ label, placeholder, secureTextEntry, value, onChangeText }) => {
    const {labelStyle, inputStyle, containerStyle} = styles
    
        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    style={inputStyle}
                    />
            </View>
        )};

export {Input}