Meteor.publish('thumbnails', function () {
  return Images.find({}, {fields: {imageFile: false}})
})

Meteor.publish('image', function (title) {
  return Images.find({title: title})
})