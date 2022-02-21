import { launchCamera, launchImageLibrary, PermissionsAndroid } from 'react-native-image-picker';
import { Alert } from 'react-native'
import Snackbar from 'react-native-snackbar';

export async function getImage() {
    if (requestCameraPermission) {
        return new Promise((resolve) => {
            let options = {
                maxWidth: 3200,
                maxHeight: 3200,
                quality: 0.9
            };
            Alert.alert(
                "Choose Image",
                "",
                [
                    {
                        text: "Cancel", onPress: () => {
                            resolve("");
                        }
                    },
                    {
                        text: "Camera", onPress: () => {
                            launchCamera({ mediaType: 'photo' }, res => {
                                if (res.didCancel) {
                                    resolve("");
                                } else if (res.errorCode) {
                                    resolve("");
                                    showToast(res.errorMessage);
                                }
                                resolve(res);
                            });
                        }
                    },
                    {
                        text: "Gallery", onPress: () => {
                            launchImageLibrary(options, res => {
                                if (res.didCancel) {
                                    resolve("");
                                }
                                resolve(res)
                            });
                        }
                    }
                ],
                { cancelable: false }

            );
        })
    } else {
        alert("Please Allow Camera permission to continue.");
        return "";
    }
}

const requestCameraPermission = async () => {
    return new Promise(async (resolve) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "KTRewards App Needs Camera Permission",
                    message:
                        "KTRewards App needs access to your camera " +
                        "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                resolve(true);
            } else {
                console.log("Camera permission denied");
                resolve(false);
            }
        } catch (err) {
            console.warn(err);
            resolve(false);
        }
    })

};

export function base64toFile(filename, fileData) {
    var arr = fileData.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });

}

export function showToast(message, color = "red") {
    // Toast.showWithGravity(message, Toast.LONG, Toast.BOTTOM);
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: color
    });
}
