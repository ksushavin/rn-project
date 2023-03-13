import React from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

function CommentsPosts({navigation, place, location, state}) {
  return (
      <View style={styles.commentsWrapper}>
            <TouchableOpacity
                style={styles.commentsIcon}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Comments', {state})}>
                <EvilIcons
                    name="comment"
                    size={24}
                    color="#BDBDBD"
                    style={[
                        {
                            transform: [{ rotateY: '-180deg' }, { skewY: '-180deg' }],
                        },
                    ]}>
                </EvilIcons>
                <Text style={styles.commentsCount}>2</Text> 
            </TouchableOpacity>
            
            <TouchableOpacity
                style={styles.mapIcon}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Map', {location})}>
                <Feather name="map-pin" size={18} color="#BDBDBD" /> 
                <Text style={styles.locationTitel}>{place}</Text> 
            </TouchableOpacity>   
        </View>
    )
}

const styles = StyleSheet.create({
    commentsWrapper: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginTop: 7,
    },
    commentsIcon: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    commentsCount: {
        marginLeft: 5,
        fontSize: 16,
    },
    mapIcon: {
        flexDirection: 'row',
        alignItems: 'baseline',
    },
    locationTitel: {
        marginLeft: 8,
        fontSize: 16,
        textDecorationLine: 'underline',
    }
})

export default CommentsPosts;
