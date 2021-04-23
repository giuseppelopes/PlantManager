import React, {useState} from 'react';
import { 
    SafeAreaView, 
    Text, 
    Image, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions,
    View } from 'react-native';

import { Feather } from '@expo/vector-icons'

import wateringImage from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts'

export function Welcome(){
    const [visible, setVisible] = useState(true);
    function handleVisibility() {
        setVisible(true);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'} 
                    suas plantas de {'\n'}
                    forma fácil!
                </Text>
                    <Image 
                        source={wateringImage} 
                        style={styles.image}
                        resizeMode={"contain"} />
                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuídamos de lembrar você sempre que precisar!
                </Text>
                <TouchableOpacity 
                    style={styles.button}
                    activeOpacity={0.7}>
                    
                    <Feather 
                    name="chevron-right"
                    style={styles.buttonIcon} />
                    
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 68,
        fontFamily: fonts.heading,
        lineHeight: 34,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingHorizontal: 20,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 18,
        height: 56,
        width: 56,
        paddingHorizontal: 10,
    },
    image: {
        height: Dimensions.get('window').width * 0.7,
    },
    buttonText: {
        color: colors.white,
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white,
    },
});