makeThumbNail = function (fileBuffer, extenstion, callback) {
  var gmImageRessource = gm(fileBuffer, 'image.' + extenstion)
, newImage = {
    side: 400
  }

  function syncSize (gmRessource, callback) {
    gmRessource.size(callback)
  }
  var imageSize = Meteor.wrapAsync(syncSize)(gmImageRessource)

  newGmImageRessource = gmImageRessource.resize(400, 400)

  function syncToBuffer (gmRessource, callback) {
    gmRessource.toBuffer(callback)
  }

  newImageBuffer = Meteor.wrapAsync(syncToBuffer)(newGmImageRessource)
  callback(null, newImageBuffer)
}