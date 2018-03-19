const User = require("../models/User");

exports.deleteUser = (req,res,next)=>{
  User.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchUser = (req,res,next)=>{
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getUsers = function(req, res, next) {
    User.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
  }

  exports.postUser = (req, res, next)=>{
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    newUser.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }