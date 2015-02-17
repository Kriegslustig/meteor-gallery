Meteor.methods({
  insertImage: function (base64FullImage) {
    return insertImage(base64FullImage)
  }
})

insertImage = function (base64FullImage) {
  var currentTime = new Date()
, imageTitle = currentTime.getUTCHours() + ':' + currentTime.getUTCMinutes() + ':' + currentTime.getUTCSeconds() + ', ' + currentTime.getUTCDay() + '.' + currentTime.getUTCMonth() + ' ' + currentTime.getUTCFullYear()
  if(Images.find({title: imageTitle}).count() < 1) {
    var imageBuffer = new Buffer(base64FullImage.base64, 'base64')
    makeThumbNail(imageBuffer, 'png', function(err, smallImageBuffer) {
      if(!err) {
        Images.insert({
          title: imageTitle
        , description: 'Shot from cam'
        , createdAt: currentTime.getSeconds()
        , imageFile: imageBuffer.toString('base64')
        , imageThumbNail: smallImageBuffer.toString('base64')
        , imageType: base64FullImage.type
        })
      }
    })
  } else {
    return false
  }
  return true
}