const express = require("express")
const router = express.Router()
const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
const {PutObjectCommand } = require('@aws-sdk/client-s3')
const { s3,presignPut,Bucket} = require('../src/s3')

module.exports = router