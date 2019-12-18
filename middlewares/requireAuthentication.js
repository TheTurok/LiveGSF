module.exports = (req, res, next) => {
  if(!req.user){
    return res.status(401).send({error: 'You must Log in!'})
  }

  if(! ["101227341722050754155", "113816307442865384644"]
      .includes(req.user.googleID)){
    return res.status(401).send({error: 'User is not Authorized!'})
  }

  next();
};
