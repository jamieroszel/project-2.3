const express = require('express')
///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()
const Article = require('./../models/article')

router.get('/new', (req, res) => {
    res.render('articles/new', {article: new Article()})
  })

  router.get('/:id', (req, res) =>{

  })

  router.post('/', async (req, res)=>{
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
    article = await article.save() //this is an async function
    res.redirect(`/articles/${article.id}`) // using interpolation to redirect
    } catch (e) {
        res.render('articles/new', {article: article})
    }
})



module.exports = router