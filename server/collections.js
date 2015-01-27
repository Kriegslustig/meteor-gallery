/*
 * Mongo collection 'images'
 * fields: {
 *   _id
 *   title {string}
 *   description {string} {optional}
 *   image {image/base64}
 *   imageType {string}
 *   createdAt {timestamp}
 * }
 */
Images = new Meteor.Collection('images')