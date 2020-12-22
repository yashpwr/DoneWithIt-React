import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native'
import { Formik } from "formik";

import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen'
import AppButton from '../components/AppButton'

function LoginScreen(props) {

    //const [email, setEmail] = useState();
    //const [password, setPassword] = useState();

    return (
        <Screen style={styles.container}>
            <Image 
            style={styles.logo}
            source={require("../assets/logo-red.png")} />

            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values=> console.log(values)}
            >
                { ({handleChange, handleSubmit}) => (
                    <>
                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            // onChangeText={text => setEmail(text)}
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />

                        <AppTextInput 
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            //onChangeText={text => setPassword(text)}
                            onChangeText={handleChange("password")}
                            placeholder="Password"
                            secureTextEntry={true}
                            textContentType="password"
                        />

                        <AppButton 
                            title="Login" 
                            //onPress={() => console.log(email, password)} 
                            onPress={handleSubmit} 
                        />
                    </>
                ) }
            </Formik>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
})

export default LoginScreen;