const routeValidation = (req, res, next) => {
  const validApi = ['/', '/zaptic', '/api/v1/users/*']
  if (validApi.includes(req.path)) {
    next();
  } else {
    // res.render("pages/404");
    next();
  }
}

export default routeValidation;