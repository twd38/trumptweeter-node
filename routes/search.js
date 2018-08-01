module.exports = app => {
    app.get('/search', (req, res) => {
        res.send('Search Results');
    })

    app.post('/search/save', (req, res) => {
        res.send('Save my search');
    });
};