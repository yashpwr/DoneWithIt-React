import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        
        <ImageBackground
            blurRadius={2}
            style={styles.background} 
            source={require('../assets/background.jpg')}
        >
        
        <View style={styles.logoContainer}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')} />
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>

        <View style={styles.buttonContainer}>
            <AppButton title="Login" onPress={ () => console.log("Tapped") } />
            <AppButton title="Register" color="secondary" onPress={ () => console.log("Tapped") } />
        </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    buttonContainer: {
        padding: 20,
        width: "100%",
    },
    logo: {
        width: 100,
        height: 100,
    },
    tagline: {
        color: "grey",
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    },
})

export default WelcomeScreen;