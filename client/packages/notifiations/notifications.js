notification = {
  text: 'Notification'
, type: 'message' // error || warning || message
, show: function () {
    var self = this
  , data = {
      text: self.text
    , type: self.type
    }
    Blaze.renderWithData(Template.notification, data, document.body)
  }
}