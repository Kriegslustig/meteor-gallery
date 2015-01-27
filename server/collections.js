/*
 * Mongo collection 'images'
 * fields: {
 *   _id
 *   title {string}
 *   description {string} {optional}
 *   image {image/base64}
 *   createdAt {timestamp}
 * }
 */
Images = new Meteor.Collection('images')