import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    FlatList,
    Text
} from 'react-native';


function PostsList({ posts, CommentsPanel, navigation }) {
  

    return (
        <FlatList
            style={styles.list}
            data={posts}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => (
                <View style={styles.imagePostWrapper}>
                    <Image
                        style={styles.postImage}
                        source={{ uri: item.state.photoUri }}
                    />
                    <Text style={styles.imageTitle}>{item.state.title}</Text>
                    <CommentsPanel navigation={navigation} place={item.state.place} location={item.state.location} state={item.state} />
                </View>  
            )}
        />    
    )
}


const styles = StyleSheet.create({
    list: {
        marginTop: 32,
    },

    imagePostWrapper: {
        // marginTop: 28,
        marginBottom: 30,
        justifyContent: "center",
        // alignItems: "center",
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    imageTitle: {
        marginTop: 7,
        fontSize: 16,
        color: '#212121',

    }
})


export default PostsList;
