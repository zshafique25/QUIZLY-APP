import React, { useState, useEffect, useRef } from "react";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { useDispatch, useSelector } from "react-redux";
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormData from "form-data";
import { shareAsync } from "expo-sharing";
import * as MediaLibrary from "expo-media-library";
import { COLORS } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";

export function VedioRecord({ optionHandler, question }) {
  let cameraRef = useRef(null);
  const [photoUri, setPhotoUri] = useState(null);
  const [hasPermission, setHasPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission =
        await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
      setHasPermission(cameraPermission.status === "granted");
    })();
  }, []);

  if (hasPermission === undefined) {
    return <Text>Requesting Permissions</Text>;
  } else if (!hasPermission) {
    return <Text>Permissions for camera not granted</Text>;
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri);
      setPhoto(data);
    }
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = async () => {
      // MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      //   setPhoto(undefined);
      // });
      console.log("I am hit");
      await fetchPrediction();
    };

    const fetchPrediction = async () => {
      const formData = new FormData();
      formData.append("image", {
        uri: photo.uri,
        type: "image/jpeg", // Adjust the type based on your image format
        name: "image.jpg", // Provide a name for the image
      });

      console.log("I am hit");
      await fetch("http://192.168.43.7:5000/", {
        method: "POST",
        headers: { "Content-Type": "multipart/form-data" },
        body: formData,
      })
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
          optionHandler(result);
        })
        .catch((err) => console.log(err));
      // .then((response) => response.json())
      // .then((subjects) =>
      //   subjects.map((subject) => dispatch(addSubject(subject)))
      // )
      // .catch((err) => console.log("There has been an error" + err.message));
    };

    return (
      <View
        style={{
          flex: 1,
          position: "absolute",
          marginLeft: 310,
          width: 100,
          height: 100,
          borderRadius: 10,
          zIndex: 1,
        }}
      >
        <Image
          style={styles.preview}
          source={{ uri: "data:image/jpg;base64," + photo.base64 }}
        />
        {hasMediaLibraryPermission ? (
          <TouchableOpacity
            title="Save"
            onPress={savePhoto}
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: "white",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              Predict
            </Text>
          </TouchableOpacity>
        ) : undefined}
        <TouchableOpacity
          title="Discard"
          onPress={() => setPhoto(undefined)}
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: 10,
              color: "white",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Discard
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        position: "absolute",
        marginLeft: 310,
        width: 100,
        height: 100,
        borderRadius: 100,
        zIndex: 1,
        marginTop: 0,
        paddingTop: 0,
      }}
    >
      <Camera style={{ flex: 1 }} type={type} ref={cameraRef} />
      <TouchableOpacity
        onPress={takePicture}
        style={{
          // position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Text
          style={{
            fontSize: 10,
            color: "white",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          Snap
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    backgroundColor: "#fff",
    alignSelf: "flex-end",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
});
