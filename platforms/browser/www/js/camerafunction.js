function onDeviceReady() {
}

function getCameraImage() {
    var coptions={
        quality: 20,
        allowEdit: false,
        destinationType: navigator.camera.DestinationType.DATA_URL,
        saveToPhotoAlbum : true
    };

    navigator.camera.getPicture(onCaptureSuccess, onError, coptions);
}

function onCaptureSuccess(imageData) {
    var smallImage=document.getElementById('cameraImage');

    smallImage.src="data:image/jpeg;base64," + imageData;
}

function onError(message) {
    alert('Error: '+message);
}