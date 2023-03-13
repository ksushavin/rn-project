import React from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

function CommentsProfile ({navigation}) {
    return (
        <View style={styles.commentsWrapper}>
            <TouchableOpacity
                style={styles.commentsIcon}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Comments')}>
                    {/* <FontAwesome name="comment" size={24} color="black" /> */}
                <FontAwesome
                    name="comment"
                    size={24}
                    color="#FF6C00"
                    style={[
                        
                        {
                            transform: [{ rotateY: '-180deg' }, { skewY: '-180deg' }],
                        },
                    ]}>
                </FontAwesome>
            </TouchableOpacity>
            <Text style={styles.commentsCount}>2</Text>

            <AntDesign name="like2" size={23} color="#FF6C00" style={styles.likeIcon} />
            <Text style={styles.likeCount}>153</Text> 

            <TouchableOpacity
                style={styles.mapIcon}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Map')}>
                <Feather name="map-pin" size={18} color="#BDBDBD" /> 
                <Text style={styles.locationTitel}>Kyiv</Text> 
            </TouchableOpacity> 
            

              
        </View>
    )
}

const styles = StyleSheet.create({
    commentsWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 9,
    },
    commentsIcon: {
         
    },
    commentsCount: {
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },
    likeIcon: {
        marginLeft: 27,
    },
    likeCount: {
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
    },
    mapIcon: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: 'auto'
    },
    locationTitel: {
        marginLeft: 8,
        fontSize: 18,
        textDecorationLine: 'underline',
        fontFamily: 'Roboto-Regular',
    }
})

export default CommentsProfile;
