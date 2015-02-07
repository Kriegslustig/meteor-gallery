var notification = {
  text: 'Notification'
, type: 'message' // error || warning || message
, show: function () {
    var self = this
  , data = {
      text: self.text
    , type: self.type
    }
    Blaze.renderWithData('notification', data, document.body)
  }
}