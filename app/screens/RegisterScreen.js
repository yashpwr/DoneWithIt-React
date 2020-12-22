import React from 'react';
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from "../components/forms"
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen(props) {

    return (
        <Screen style={styles.container}>

            <AppForm
                initialValues={{name: '', email: '', password: ''}}
                onSubmit={values=> console.log(values)}
                validationSchema={validationSchema} >

                <AppFormField
                    name="name" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="account"
                    keyboardType="default"
                    placeholder="Name"
                />

                <AppFormField
                    name="email" 
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                    
                <AppFormField 
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry={true}
                    textContentType="password"
                />

                <SubmitButton title="Register" />
            </AppForm>

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

export default RegisterScreen;