if(Images.find({}).count() <= 0) {
  console.log('Creating fixtures')
  Assets.getBinary('img/nmapyoo.png', function (err, image) {
    if(!err) {
      var imageBuffer = new Buffer(image)
      makeThumbNail(imageBuffer, 'png', function(err, smallImageBuffer) {
        if(!err) {
          Images.insert({
            title: 'A First Image'
          , description: 'adjisgioreweoiceiwmciew'
          , createdAt: new Date()
          , imageFile: imageBuffer.toString('base64')
          , imageThumbNail: smallImageBuffer.toString('base64')
          , imageType: 'png'
          })
        }
      })
    } else {
      console.log(err)
    }
  })

  Assets.getBinary('img/danger!danger!.png', function (err, image) {
    if(!err) {
      var imageBuffer = new Buffer(image)
      makeThumbNail(imageBuffer, 'png', function(err, smallImageBuffer) {
        if(!err) {
          Images.insert({
            title: 'Danger ! Danger !'
          , description: 'Something else'
          , createdAt: new Date()
          , imageFile: imageBuffer.toString('base64')
          , imageThumbNail: smallImageBuffer.toString('base64')
          , imageType: 'png'
          })
        }
      })
    } else {
      console.log(err)
    }
  })

  Assets.getBinary('img/kannstemachen.png', function (err, image) {
    if(!err) {
      var imageBuffer = new Buffer(image)
      makeThumbNail(imageBuffer, 'png', function(err, smallImageBuffer) {
        if(!err) {
          Images.insert({
            title: 'Kannste machen'
          , description: 'Das kannste schon so machen, aber dann isses halt kacke'
          , createdAt: new Date()
          , imageFile: imageBuffer.toString('base64')
          , imageThumbNail: smallImageBuffer.toString('base64')
          , imageType: 'png'
          })
        }
      })
    } else {
      console.log(err)
    }
  })

  Assets.getBinary('img/me.png', function (err, image) {
    if(!err) {
      var imageBuffer = new Buffer(image)
      makeThumbNail(imageBuffer, 'png', function(err, smallImageBuffer) {
        if(!err) {
          Images.insert({
            title: 'Me'
          , description: 'Ugly motherfucker'
          , createdAt: new Date()
          , imageFile: imageBuffer.toString('base64')
          , imageThumbNail: smallImageBuffer.toString('base64')
          , imageType: 'png'
          })
        }
      })
    } else {
      console.log(err)
    }
  })
}