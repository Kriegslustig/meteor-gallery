/*
 * Mongo collection 'images'
 * fields:
 *   _id
 *   title {string}
 *   description {string} {optional}
 *   createdAt {timestamp}
 *   imageFile {image/base64}
 *   imageThumbNail {image/base64} size 200^2
 *   imageType {string}
 */
Images = new Meteor.Collection('images')