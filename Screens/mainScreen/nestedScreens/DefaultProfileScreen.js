import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import PostsList from "../../../components/PostsList";
import CommentsProfile from "../../../components/CommentsPosts";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const DefaultProfileScreen = ({navigation}) => {
    return (
    <View style={styles.container}>
        <ImageBackground
            source={require("../../../assets/images/profileBg.png")}
            style={styles.imageBg}>
                <View style={styles.profile}>
                    <Image
                        style={styles.avatar}
                        source={require('../../../assets/images/Avatar.png')}
                    />
                    <TouchableOpacity
                        style={styles.logout}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('Login')}>
                        <MaterialIcons name="logout" size={26} color="#BDBDBD" />
                    </TouchableOpacity>  
                    
                    <Text style={styles.title}>Natali Romanova</Text>

                    <PostsList CommentsPanel={CommentsProfile} navigation={navigation} />
                </View>
        </ImageBackground>
    </View> 
    ) 
}

{/* <ScrollView contentContainerStyle={styles.scrollContentContainer}></ScrollView> */}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContentContainer: {
        paddingBottom: 20,
    },
    imageBg: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        resizeMode: 'contain',

    },
    profile: {
        marginTop: 200,
        backgroundColor: '#FFFFFF',
        width: '100%', 
        paddingLeft: 16,
        paddingRight: 16,
        paddingBottom: 16,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    avatar: {
        position: 'absolute',
        left: 136,
        top: -60,
        height: 120,
        width: 120,
        borderRadius: 16,
    },
    logout: {
        position: 'absolute',
        top: 24,
        right: 20,
    },
    title: {
        fontFamily: 'Roboto-Medium',
        textAlign: 'center',
        fontSize: 30,
        marginTop: 92,
    },
    imagePostWrapper: {
        borderRadius: 8,
        marginTop: 28,
    },
    postImage: {

    },
    imageTitle: {
        marginTop: 7,
        fontSize: 16,
        color: '#212121',
    },
})

export default DefaultProfileScreen;