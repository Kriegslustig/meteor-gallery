notification = {
  text: 'Notification'
, type: 'message' // error || warning || message
, timeToClose: 3000 // ms
, config: {
    notificationClass: 'notification'
  , notificationRemoveClass: 'notification--remove'
  , closeAnimationTime: 200 // ms
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
    self.setEventListeners()
  }
, close: function () {
    var self = this
    self.notificationElement.className += ' ' + self.config.notificationRemoveClass
    setTimeout(function () {
      self.notificationElement.remove()
    }, self.config.closeAnimationTime)
  }
, setEventListeners: function () {
    var self = this
    self.notificationElement.addEventListener('close', function () {
      self.close()
    })
    setTimeout(function () {
      self.close()
    }, self.timeToClose)
  }
}