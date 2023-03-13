import React, { useState } from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Camera, CameraType,  } from 'expo-camera';
import { Feather } from '@expo/vector-icons';
import * as Location from 'expo-location';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
    
} from 'react-native';

const initialState = {
  photoUri: null,
  title: '',
  place: null,
  location: null
}

const CreatePostsScreen = ({navigation}) => {
  const [camera, setCamera] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
    const photoUri = photo.uri;
    setState((prevState) => ({ ...prevState, photoUri, location }))
  };

  const sendPhoto = () => {
    setIsShowKeyboard(false);
    setState(initialState);
    Keyboard.dismiss(); 
    navigation.navigate("DefaultPostsScreen", { state });
  };
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => keyboardHide()}>
        <View>
          <Camera
            style={styles.camera}
            ref={setCamera}>
            {state.photoUri && (
              <View style={styles.takePhotoContainer}>
                <Image
                  source={{ uri: state.photoUri }}
                  style={{ height: 100, width: 100 }}
                />
              </View>
            )}
            <TouchableOpacity onPress={takePhoto} style={styles.snapContainer}>
              <Text style={styles.snap}>SNAP</Text>
            </TouchableOpacity>
          </Camera>
            
          {state.photoUri ? <Text style={styles.editPhotoText}>Редагувати зоображення</Text> : <Text style={styles.editPhotoText}>Додати фото</Text>}

          <KeyboardAwareScrollView>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              textAlign={'left'}
              placeholder="Назва"
              value={state.title}
              onFocus={() => { setIsShowKeyboard(true) }}
              onChangeText={(value) => setState((prevState) => ({ ...prevState, title: value }))}
              onBlur={() => { setIsShowKeyboard(false) }}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={{ ...styles.input, position: 'relative', paddingLeft: 28,}}
                textAlign={'left'}
                placeholder="Локація"
                value={state.place}
                onFocus={() => { setIsShowKeyboard(true) }}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, place: value }))}
                onBlur={() => { setIsShowKeyboard(false) }}
              />
              <Feather name="map-pin" size={24} color="#BDBDBD" style={styles.mapIcon} /> 
            </View>
            <TouchableOpacity
              style={{
                ...styles.sendBtn,
                marginBottom: isShowKeyboard ? 15 : 40
              }}
              activeOpacity={0.8}
              onPress={sendPhoto}>
              <Text style={styles.sendBtnTitle}>Опублікувати</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
        </View>
      </TouchableWithoutFeedback>
    </View>  
  ) 
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
  },
  camera: {
    position: 'relative',
    alignItems: "center",
    height: '40%',
    marginTop: 32,
    borderRadius: 8,
    
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    position: 'absolute',
    left:'50%',
    top:'50%',
    marginLeft: -35,
    marginTop: -35,
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
  },
  editPhotoText: {
    marginTop: 8,
    marginBottom: 25,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#BDBDBD',
  },
  input: {
    
    left: 4,
    top: 16,
    height: 50,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderEndColor: '#E8E8E8',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: '#212121',
  },
  mapIcon: {
    position: 'absolute',
    bottom: 13,
  },
  sendBtn: {
    backgroundColor: '#FF6C00',
    height: 49,
    marginTop: 35,
    // marginBottom: 15,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
    },
  sendBtnTitle: {
    color: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    fontSize: 16
  },
})

export default CreatePostsScreen;