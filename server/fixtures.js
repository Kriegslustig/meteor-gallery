if(Images.find({}).count() <= 0) {
  Assets.getBinary('img/nmapyoo.png', function (err, image) {
    if(!err) {
      var imageBuffer = new Buffer(image)
      Images.insert({
        title: 'A First Image'
      , description: 'adjisgioreweoiceiwmciew'
      , image: imageBuffer.toString('base64')
      , imageType: 'png'
      , createdAt: new Date()
      })
    } else {
      console.log(err)
    }
  })

  Assets.getBinary('img/danger!danger!.png', function (err, image) {
    if(!err) {
      var imageBuffer = new Buffer(image)
      Images.insert({
        title: 'Danger ! Danger !'
      , description: 'Something else'
      , image: imageBuffer.toString('base64')
      , imageType: 'png'
      , createdAt: new Date()
      })
    } else {
      console.log(err)
    }
  })
}