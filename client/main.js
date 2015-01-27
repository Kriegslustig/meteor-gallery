getSingleImage = function (title) {
  return Images.findOne({title: title})
}