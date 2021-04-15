///////////////////////////////
// Import Router
////////////////////////////////
const router = require("express").Router()

///////////////////////////////
// Router Specific Middleware
////////////////////////////////

///////////////////////////////
// Router Routes
////////////////////////////////
router.get("/", (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(), // this allows for the date to render correctly
        description: 'Test Description'
    },
    {
    title: 'Test Article 2',
    createdAt: new Date(), // this allows for the date to render correctly
    description: 'Test Description 2'
}]
    res.render("articles/index", {articles: articles})
})

///////////////////////////////
// Export Router
////////////////////////////////
module.exports = router