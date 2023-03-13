import React, { useState, useEffect } from "react";
import MapView, { Marker } from 'react-native-maps';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const MapScreen = ({ route }) => {
  
    const location = route.params;
    const latitude = location.location.coords.latitude;
    const longitude = location.location.coords.longitude

    return (
        <View style={styles.container}>
            <MapView style={{flex: 1}} initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.001,
                longitudeDelta: 0.006,
            }}>
            <Marker
                coordinate={{ latitude: latitude, longitude: longitude }}
                title="travel photo"
            />    
        </MapView>
        </View> 
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default MapScreen;