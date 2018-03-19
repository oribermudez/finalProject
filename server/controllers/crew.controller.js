const User = require("../models/Crew");

exports.deleteCrew = (req,res,next)=>{
  Crew.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchCrew = (req,res,next)=>{
  Crew.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getCrews = function(req, res, next) {
    Crew.find()
    .populate("members")
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.postCrew = (req, res, next)=>{
    const newCrew = new Crew({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
  });

    newCrew.save()
    .then(item=>res.status(201).json(item))
    .catch(e=>res.status(500).send(e));

  }