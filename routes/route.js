const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    })
});


router.post('/contact', (req, res, next)=>{
  let newContact = new Contact({
       last_name: req.body.last_name,
       phone: req.body.phone
   });

   newContact.save((err, contact)=>
   {
       if (err)
       {
           res.json({msg: 'Failed to add contact'});
       }
       else
       {
           res.json({msg: 'Contact added'});
       }
   });
   res.send(req.body.first_name + "Added");
});

router.delete('/contact/:id', (req,res,next)=>{
    contact.remove({id:req.params.id}, function(err, contact){
        if (err)
        {
            res.json({msg: 'Unable to delete data'});
        }
        else{
            res.json({msg: 'Contact Deleted'});
        }
    });
    });

module.exports = router;
