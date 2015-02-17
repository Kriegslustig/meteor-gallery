camCatcher = {
  init: function (videoElem) {
    var self = this
    self.vidoElem = videoElem
    navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia ||navigator.mozGetUserMedia || navigator.msGetUserMedia)
    if(navigator.getUserMedia) {
      navigator.getUserMedia({
        video: true
      , audio: false
      }
    , function (localMediaStream) {
        if(localMediaStream) {
          self.vidoElem.src = URL.createObjectURL(localMediaStream)
          self.vidoElem.play()
        }
      }
    , function (err) {
        console.log(err)
      })
    }
  }
, catchFrame: function () {
    var self = this
    if(!self.vidoElem.src) return false
    var shotImage = self.captureBase64FromFromVideoElem(self.vidoElem, 400, 400)
  , shotImageSplit, shotImageType, shotImageBase64

    shotImageSplit = shotImage.split(';')
    shotImageType = shotImageSplit[0].split('image/')[1]
    shotImageBase64 = shotImageSplit[1].split('base64,')[1]
    return {
      base64: shotImageBase64
    , type: shotImageType
    }
  }
, captureBase64FromFromVideoElem: function (videoElement, height, width) {
    var self = this
  , thisCanvas = document.createElement('canvas')
    thisCanvas.getContext('2d').drawImage(videoElement, 0, 0, width, height)
    return thisCanvas.toDataURL()
  }
}

Template.blockCamCatcher.rendered = function () {
  var self = this
  camCatcher.init(self.find('.camCatcher__video'))
}

Template.blockCamCatcher.events({
  'click .camCatcher__trigger': function () {
    if(camCatcher.callback) {
      camCatcher.callback(camCatcher.catchFrame())
    } else {
      console.log('No Callback provided')
      console.log(camCatcher.catchFrame())
    }
  }
})