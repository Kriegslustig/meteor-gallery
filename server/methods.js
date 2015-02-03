Meteor.methods({
  insertImage: function (base64FullImage) {
    insertImage(base64FullImage)
  }
})

insertImage = function (base64FullImage) {
  var imageBuffer = new Buffer(base64FullImage.base64, 'base64')
  makeThumbNail(imageBuffer, 'png', function(err, smallImageBuffer) {
    if(!err) {
      Images.insert({
        title: 'Shot from cam'
      , description: 'Shot from cam'
      , createdAt: new Date()
      , imageFile: imageBuffer.toString('base64')
      , imageThumbNail: smallImageBuffer.toString('base64')
      , imageType: base64FullImage.type
      })
    }
  })
}