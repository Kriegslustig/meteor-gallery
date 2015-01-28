makeThumbNail = function (fileBuffer, extenstion, callback) {
  var gmImageRessource = gm(fileBuffer, 'image.' + extenstion)
, newImage = {
    side: 400
  }
, syncSize = function (gmRessource, callback) {
    gmRessource.size(callback)
  }
, imageSize = Meteor.wrapAsync(syncSize)(gmImageRessource)
, imageRatio = {
    width: imageSize.width / imageSize.height
  , height: imageSize.height / imageSize.width
  }
  newImage.size = {
    height: Math.round(newImage.side / imageRatio.height)
  , width: Math.round(newImage.side / imageRatio.width)
  }
  console.log(imageSize)

  newGmImageRessource = gmImageRessource.resize(newImage.size.width, newImage.size.height)

  function syncToBuffer (gmRessource, callback) {
    gmRessource.toBuffer(callback)
  }

  newImageBuffer = Meteor.wrapAsync(syncToBuffer)(newGmImageRessource)
  callback(null, newImageBuffer)
}