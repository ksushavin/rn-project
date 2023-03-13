import React, { useState, useEffect } from "react";
import PostsList from "../../../components/PostsList";
import CommentsPosts from "../../../components/CommentsPosts";
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

const DefaultPostsScreen = ({navigation, route}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (route.params) {
        setPosts((prevState) => [...prevState, route.params]);
        }
    }, [route.params]);
    
    return (
        <View style={styles.container}>
            <View style={styles.user}>
                <Image
                    style={styles.avatar}
                    source={require('../../../assets/images/Avatar.png')}
                />   
                <View style={styles.textWrapper}>
                    <Text style={styles.name}>Natali Romanova</Text>
                    <Text style={styles.email}>email@example.com</Text>
                </View>
                
            </View> 
            <PostsList
                posts={posts}
                CommentsPanel={CommentsPosts}
                navigation={navigation}
            />
        </View> 
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
    },
    user: {
        flexDirection: 'row',
        marginTop: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 16,
    },
    textWrapper: {
        marginLeft: 8,
        justifyContent: 'center',
    },
    name: {
        color: '#212121',
        fontFamily: 'Roboto-Medium',
        fontSize: 13,
    },
    email: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
    },
})

export default DefaultPostsScreen;




// (async () => {
      
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();