camCatcher.callback = function (base64FullImage) {
  var failMessage = Object.create(notification)
  failMessage.type = 'error'
  failMessage.text = 'Insert failed'

  if(base64FullImage) {
    Meteor.call('insertImage', base64FullImage, function (error, returnVal) {
      if(error || !returnVal) {
        failMessage.show()
      } else {
        var successMessage = Object.create(notification)
        successMessage.text = 'Image was added!'
        successMessage.show()
      }
    })
  } else {
    failMessage.text = 'No Camera access.'
    failMessage.show()
  }
}

getSingleImage = function (title) {
  return Images.findOne({title: title})
}