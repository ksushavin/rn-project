import React from "react";
import {
    StyleSheet,
    Image,
    View,
    Text
} from 'react-native';

const CommentsScreen = ({ route }) => {
    const photoUri = route.params.state.photoUri;
    return (
        <View style={styles.container}>
            <Image
                style={styles.postImage}
                source={{ uri: photoUri }}
            />  
            <Text style={styles.imageTitle}>Comments</Text>
        </View> 
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32,
        paddingBottom: 16,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
})

export default CommentsScreen;