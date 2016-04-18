exports.render = function(req, res) {
    res.render('index', {
        title: 'Home Page',
        user: JSON.stringify(req.user)
    });
};