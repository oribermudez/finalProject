const Ticket = require("../models/Ticket");
const User = require("../models/User");


exports.deleteTicket = (req,res,next)=>{
  Ticket.findByIdAndRemove(req.params.id)
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchTicket = (req,res,next)=>{
  console.log(req.body);
  Ticket.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}

exports.getTickets = function(req, res, next) {
    Ticket.find({ status: { $ne: 'Solved' } })
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.postTicket = (req, res, next)=>{
  console.log("creando ticket")
  console.log(req.user);
    const newTicket = new Ticket({
      creator: req.user._id,
      services: [req.body.services],
      image: `/uploads/${req.file.filename}`,
      owner: req.user.name,
      location: {
        type: "Point",
        coordinates: [req.user.coordinates.lng, req.user.coordinates.lat ],
        address: req.user.address,
    }    
  });
    console.log(newTicket)

    newTicket.save()
      .then(ticket =>{
         Ticket.find({$and: [{_id: ticket._id}, {location: {$geoWithin: { $centerSphere: [ [ -99.1980285967236, 19.435132641101944 ], 0.00039440792407092584 ]}}}]})
            .then(item1 => {
               //Zona 1: Polanco
              if(item1.length >0)Ticket.findOneAndUpdate({_id: ticket._id}, {zone:1}, {new:true}).then(item=>res.status(200).json(item))
              else Ticket.find({$and: [{_id: ticket._id}, {location: {$geoWithin: { $centerSphere: [  [ -99.16428443933987, 19.434840481961686 ], 0.0002851357044715627]}}}]})
                .then(item2 => {
                  //Zona 2: Reforma
                  if(item2.length >0)Ticket.findOneAndUpdate({_id: ticket._id}, {zone:2},{new:true}).then(item=>res.status(200).json(item))
                  else Ticket.find({$and: [{_id: ticket._id}, {location: {$geoWithin: { $centerSphere: [ [ -99.14207829845733, 19.3749997007061 ], 0.0005120810773755763 ]}}}]})
                  .then(item3 => {
                    //Zona 3: Benito Juarez
                    if(item3.length >0)Ticket.findOneAndUpdate({_id: ticket._id}, {zone:3},{new:true}).then(item=>res.status(200).json(item))
                    else Ticket.find({$and: [{_id: ticket._id}, {location: {$geoWithin: { $centerSphere: [ [ -99.17951525100226, 19.39950512003783 ], 0.00040171073311808344  ]}}}]})
                      .then(item4=> {
                        //Zona 4: Condesa, Escandón, Nápoles
                        if(item4.length >0)Ticket.findOneAndUpdate({_id: ticket._id}, {zone:4},{new:true}).then(item=>res.status(200).json(item))
                        else Ticket.find({$and: [{_id: ticket._id}, {location: {$geoWithin: { $centerSphere: [ [ -99.18526967113257, 19.323068681559917 ], 0.0006860849486154191 ]}}}]})
                          .then(item5 => {
                            //Zona 5: Coyoacan
                            if(item5.length >0)Ticket.findOneAndUpdate({_id: ticket._id}, {zone:5},{new:true}).then(item=>res.status(200).json(item))
                          })
                      })
                  })
                })
            })
        })
      }

exports.myTickets = function(req, res, next) {
    Ticket.find({creator:req.user._id})
    .populate("creator")
    .then(items=>res.status(200).json(items))
    .catch(e=>res.status(500).send(e));
}

exports.zone = function(req, res, next) {
  Ticket.find( {$and: [{ status: { $ne: 'Solved' } }, {zone:req.params.zone}]} )
  .populate("creator")
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.techTickets = function(req, res, next) {
  Ticket.find({$and: [{zone:req.params.zone}, { status: { $ne: 'Solved' } }]})
  .populate("creator")
  .then(items=>res.status(200).json(items))
  .catch(e=>res.status(500).send(e));
}

exports.patchTicketPic = (req,res,next)=>{
  console.log(req.files)
const updates = {
  proof: `/uploads/${req.files[0].filename}`,
  status: 'Solved'
}  
console.log(updates)
Ticket.findByIdAndUpdate(req.params.id, updates, {new:true})
  .then(item=>res.status(200).json(item))
  .catch(e=>res.status(500).send(e));
}
