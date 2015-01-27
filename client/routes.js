Router.route('/', {
  name: 'gallery'
, action: function () {
    var self = this
    self.render('pageGallery')
  }
})

Router.route('/image/:title', {
  name: 'imageDetail'
, action: function () {
    var self = this
    self.render('pageImageDetail', {data: getSingleImage(self.params.title)})
  }
})