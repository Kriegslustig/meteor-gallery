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
      , image: {
          file: imageBuffer.toString('base64')
        , thumbNail: smallImageBuffer.toString('base64')
        , type: base64FullImage.type
        }
      })
    }
  })
}