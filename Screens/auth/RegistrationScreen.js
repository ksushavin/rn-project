import { useState, useCallback, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

SplashScreen.preventAutoHideAsync();

const initialState = {
    login: "",
    email: "",
    password: ""
}


export default function RegistrationScreen({ navigation }) {
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);
    const [state, setState] = useState(initialState);
    const [dimensions, setDimensions] = useState(Dimensions.get('window').width);
    const [show, setShow] = useState(false);
    const [vissible, setVissible] = useState(true)

    useEffect(() => {
        const onChange = () => {
            const windowWidth = Dimensions.get('window').width;
            setDimensions(windowWidth)
        }
        const subscription = Dimensions.addEventListener("change", onChange)

        return () => subscription.remove();
    }, [])

    const formSubmit= () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        console.log(state);
        setState(initialState)
        navigation.navigate('Home')
    }
    const keyboardHide = () => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
    }

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => keyboardHide()}>
                <ImageBackground
                    source={require("../../assets/images/backgroundAuth.jpg")}
                    style={styles.image}>
                    <KeyboardAvoidingView behavior={'pading'}>
                        <View style={{...styles.form, width: dimensions}} >
                            
                            <Text style={styles.formTitle}>Реєстрація</Text>
                        
                            <TextInput
                                style={styles.input}
                                textAlign={'left'}
                                placeholder="Логін"
                                value={state.login}
                                onFocus={() => { setIsShowKeyboard(true) }}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                                onBlur={() => { setIsShowKeyboard(false) }}
                            />
                            <TextInput
                                style={styles.input}
                                textAlign={'left'}
                                placeholder="Електронна пошта"
                                value={state.email}
                                onFocus={() => { setIsShowKeyboard(true) }}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                                onBlur={() => { setIsShowKeyboard(false) }}
                            />
                            <View style={styles.passwordInputContainer}>
                                <TextInput
                                style={styles.input}
                                textAlign={'left'}
                                placeholder="Пароль"
                                value={state.password}
                                secureTextEntry={vissible}
                                onFocus={() => { setIsShowKeyboard(true) }}
                                onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                                onBlur={() => { setIsShowKeyboard(false) }}
                                />
                                <TouchableOpacity
                                    style={styles.passwordHide}
                                    onPress={() => {
                                        setVissible(!vissible);
                                        setShow(!show)
                                    }}>
                                    <Text style={styles.passwordHideText}>{show ? "Приховати" : "Показати"}</Text>
                                </TouchableOpacity>
                            </View>
                            
                            <TouchableOpacity
                                style={styles.btn}
                                activeOpacity={0.8}
                                onPress={formSubmit}>
                                <Text style={styles.btnTitle}>
                                    Зареєструватися
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={{
                                    ...styles.btnToLogin,
                                    marginBottom: isShowKeyboard ? 32 : 78
                                }}
                                activeOpacity={0.7}
                                onPress={() => navigation.navigate("Login")}>
                                
                                <Text style={styles.btnToLoginTitle}>
                                    Вже є аккаунт? Увійти
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        resizeMode: 'cover',

    },
    form: {
        backgroundColor: '#fff',
        padding: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25

    },
    formTitle: {
        color: '#212121',
        marginBottom: 31,
        fontFamily: 'Roboto-Medium',
        fontSize: 30,
        textAlign: 'center'
        },
    input: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        borderColor: '#E8E8E8',
        borderWidth: 1,
        height: 48,
        borderRadius: 8,
        color: '#212121',
        padding: 16,
        marginBottom: 15
    },
    passwordInputContainer: {
        
    },
    passwordHide: {
        position: 'absolute',
        right: 16,
        top: 12,
    },
    passwordHideText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1B4371',
    },
    btn: {
        backgroundColor: '#FF6C00',
        height: 49,
        marginTop: 27,
        marginBottom: 15,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnTitle: {
        color: '#FFFFFF',
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    btnToLogin: {
        marginBottom: 75,
        marginHorizontal: 93,
    },
    btnToLoginTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#1B4371',
        textAlign: 'center',
    }
});
