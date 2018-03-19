const Ticket = require("../models/Ticket");
const User = require("../models/User");


exports.deleteTicket = (req,res,next)=>{
  Ticket.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchTicket = (req,res,next)=>{
  Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getTickets = function(req, res, next) {
    Ticket.find()
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.postTicket = (req, res, next)=>{
  // let arrayOfLinks = [];
  // for (let file of req.files){
  //   arrayOfLinks.push('http://localhost:3000/uploads' + file.filename)
  // }
    const newTicket = new Ticket({
      creator: req.user._id,
      services: req.body.services,
      connected: req.body.connected,
      resetted: req.body.resetted,
      los: req.body.los,
      owner: req.user.name,
      location: {
        type: "Point",
        coordinates: [req.user.coordinates.lng, req.user.coordinates.lat ],
        address: req.user.address,
    },
      // image: arrayOfLinks,
    });
    



    newTicket.save()
      .then(ticket=>{
      //Zona 1: Polanco
      Ticket.find({location: {$geoWithin: { $centerSphere: [ [ -99.1980285967236, 19.435132641101944 ], 0.00039440792407092584 ]}}})
      .then(item1=>{
        if (item1.length < 1) return;
        setTimeout(()=>{
          Ticket.findOneAndUpdate(ticket._id, {zone:1})
          .then(r=>console.log(r));
        },1000)
        .then(r=>console.log(r));
      })
      .catch(e=>console.log(e)),
      //Zona 2: Reforma
      Ticket.find({location: {$geoWithin: { $centerSphere: [ [ -99.16428443933987, 19.434840481961686 ], 0.0002851357044715627 ]}}})
      .then(item2=>{
       if (item2.length < 1) return;
       setTimeout(()=>{
        Ticket.findOneAndUpdate(ticket._id, {zone:2})
        .then(r=>console.log(r));
      },1000)
        .then(r=>console.log(r));
      })
      .catch(e=>console.log(e)),
      //Zona 3: Benito Juarez
      Ticket.find({location: {$geoWithin: { $centerSphere: [ [ -99.14207829845733, 19.3749997007061 ], 0.0005120810773755763 ]}}})
      .then(item3=>{
        if (item3.length < 1) return;
        setTimeout(()=>{
          Ticket.findOneAndUpdate(ticket._id, {zone:3})
          .then(r=>console.log(r));
        },1000)
         .then(r=>console.log(r));
       })
      .catch(e=>console.log(e)),
      //Zona 4: Condesa, Escandón, Nápoles
      Ticket.find({location: {$geoWithin: { $centerSphere: [ [ -99.17951525100226, 19.39950512003783 ], 0.00040171073311808344 ]}}})
      .then(item4=>{
        if (item4.length < 1) return;
        setTimeout(()=>{
          Ticket.findOneAndUpdate(ticket._id, {zone:4})
          .then(r=>console.log(r));
        },1000)
         .then(r=>console.log(r));
       })
      .catch(e=>console.log(e)),
      //Zona 5: Coyoacan
      Ticket.find({location: {$geoWithin: { $centerSphere: [ [ -99.18526967113257, 19.323068681559917 ], 0.0006860849486154191 ]}}})
      .then(item5=>{
        if (item5.length < 1) return;
        setTimeout(()=>{
          Ticket.findOneAndUpdate(ticket._id, {zone:5})
          .then(r=>console.log(r));
        },1000)
         .then(r=>console.log(r));
       })
      .catch(e=>console.log(e))
    })
    .catch(e=>res.status(500).send(e));

}

exports.myTickets = function(req, res, next) {
    Ticket.find({creator:req.user._id})
    .populate("creator")
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.zone = function(req, res, next) {
  Ticket.find({zone:req.params.zone})
  .populate("creator")
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}