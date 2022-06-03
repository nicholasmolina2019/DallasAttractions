const express = require('express');
const router = express.Router();
const Dallas = require('../models/attraction');
const attractionSeed = require('../models/attractionSeed.js')


router.get('/seed', (req, res)=>{
    Dallas.deleteMany({}, ()=>{});
    Dallas.create(attractionSeed, (error,data)=>{
        res.redirect('/dallas')
    })
})
//routes


//I
 router.get('/', (req, res)=>{
    Dallas.find({},(err, allDallas)=>{
         res.render('index.ejs',{
             dallas: allDallas,
         })
     })
 })


//N
router.get('/new', (req, res)=>{
    res.render('new.ejs')
})



//D

router.delete('/:id', (req, res) =>{
    Dallas.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/dallas')
    })
})

//U
router.put('/:id', (req, res)=>{
    Dallas.findByIdAndUpdate(req.params.id,
        req.body, () =>{
            res.redirect('/dallas')
        })
})




//C

router.post('/', (req, res)=>{
    Dallas.create(req.body, ()=>{
        res.redirect('/dallas')
    })
})
//S

router.get('/:id', (req, res)=>{
    Dallas.findById(req.params.id, (err,foundDallas)=>{
        res.render('show.ejs', {
            dallas: foundDallas, 
        })
    })
})


//E
router.get('/:id/edit', (req, res)=>{
    Dallas.findById(req.params.id, (err,foundDallas)=>{
        res.render('edit.ejs', {
            dallas: foundDallas, 
        })
    })
})







module.exports = router;