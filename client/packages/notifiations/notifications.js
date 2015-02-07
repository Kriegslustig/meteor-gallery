notification = {
  text: 'Notification'
, type: 'message' // error || warning || message
, config: {
    notificationClass = 'notification'
  , notificationRemoveClass = 'notification--removed'
  , closeAnimationTime = 200 // ms
  }
, show: function () {
    var self = this
  , allNotifications = []
  , data = {
      text: self.text
    , type: self.type
    }
    Blaze.renderWithData(Template.notification, data, document.body)
    allNotifications = document.querySelectorAll('.' + self.config.notificationClass)
    self.notificationElement = allNotifications[allNotifications.length - 1]
  }
, close: function () {
    var self = this
    self.notificationElement.addClass(self.config.notificationRemoveClass)
    setTimeout(function () {
      self.notificationElement.remove()
    }, self.config.closeAnimationTime)
  }
}