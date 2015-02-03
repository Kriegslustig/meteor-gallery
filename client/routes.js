Router.route('/', {
  name: 'gallery'
, waitOn: function () {
    return Meteor.subscribe('thumbnails')
  }
, action: function () {
    var self = this
    self.render('pageGallery')
  }
})

Router.route('/image/:title', {
  name: 'imageDetail'
, waitOn: function () {
    var self = this
    return Meteor.subscribe('image', self.params.title)
  }
, action: function () {
    var self = this
    self.render('pageImageDetail', {data: getSingleImage(self.params.title)})
  }
})