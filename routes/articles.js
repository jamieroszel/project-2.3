const express = require('express')
///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
// const Article = require('./../models/article')

router.get('/new', (req, res) => {
    res.render('articles/new')
  })



module.exports = router