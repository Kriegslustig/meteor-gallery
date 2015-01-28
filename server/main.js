makeThumbNail = function (fileBuffer, extenstion, callback) {
  var gmImageRessource = gm(fileBuffer, 'image.' + extenstion)
, newImage = {
    side: 400
  }

  function syncSize (gmRessource, callback) {
    gmRessource.size(callback)
  }
  var imageSize = Meteor.wrapAsync(syncSize)(gmImageRessource)
  if(imageSize.width < imageSize.height) {
    newImage.width = newImage.side
    newImage.height = null
  } else {
    newImage.height = newImage.side
    newImage.width = null
  }

  newGmImageRessource = gmImageRessource.resize(newImage.width, newImage.height).crop(newImage.side, newImage.side, 0, 0)

  function syncToBuffer (gmRessource, callback) {
    gmRessource.toBuffer(callback)
  }

  newImageBuffer = Meteor.wrapAsync(syncToBuffer)(newGmImageRessource)
  callback(null, newImageBuffer)
}