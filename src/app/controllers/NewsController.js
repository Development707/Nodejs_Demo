class NewsController{

    index(req, res) {
        res.render('news')
    }

    show(req, res) {
        res.render('')
    }
}

module.exports = new NewsController