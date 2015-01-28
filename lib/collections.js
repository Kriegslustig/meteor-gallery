/*
 * Mongo collection 'images'
 * fields:
 *   _id
 *   title {string}
 *   description {string} {optional}
 *   createdAt {timestamp}
 *   image:
 *     file {image/base64}
 *     thumbNail {image/base64} size 200^2
 *     type {string}
 */
Images = new Meteor.Collection('images')