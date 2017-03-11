/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home/index', {
    title: 'Home'
  });
};
