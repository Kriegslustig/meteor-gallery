camCatcher.callback = function (base64FullImage) {
  Meteor.call('insertImage', base64FullImage)
}

getSingleImage = function (title) {
  return Images.findOne({title: title})
}