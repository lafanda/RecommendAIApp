import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LinearGradient  style={styles.linearGradient} colors={['#150c25', '#222222', 'black']}>
            <Image style={styles.image} source={require('../../assets/Logo.png')} />
            <View  style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username or Email"
                    placeholderTextColor = '#696969'
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password"
                    placeholderTextColor = '#696969'
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.signup}>
                <Text  style={styles.signupgrey}>Don't have an account?<Text style={styles.signupwhite}> Sign up </Text></Text>
            </TouchableOpacity>
        </LinearGradient>
    );
}

export default Login;


const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    inputView:{
        width: 300,
        alignItems: "center",
        justifyContent: "center",
    },

    TextInput: {
        color: "white",
        width: '100%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',

    },
    signup:{
      paddingTop: 50
    },
    signupgrey:{
        color:  "#989898"
    },
    signupwhite:{
      color: "white"
    },
    image: {
        width: 120,
        resizeMode: 'contain',
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "white",
    },
    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#FF1493",
    },
});