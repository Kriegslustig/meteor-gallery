Router.route('/', {
  name: 'gallery'
, action: function () {
    var self = this
    self.render('pageGallery')
  }
})