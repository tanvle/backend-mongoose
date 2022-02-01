const req = require('express/lib/request');
const Investor = require('../../models/Investor');

module.exports = function (router) {

    // GET All
    router.get('/investors', (req, res) => {
        Investor.find({}, (err, results) => {
            if(err) console.log(err);
            return res.status(200).json({count: results.length, data: results});
        });
    });

    // GET One
    router.get('/investors/:id', (req, res) => {
        const _id = req.params.id;
        Investor.findById(_id, (err, result) => {
            if(err) console.log(err);
            return res.status(200).json(result);
        })
    });

    // POST new
    router.post('/investors', (req, res) => {

        const newItem = new Investor(req.body);
        newItem.save( (err, newItem) => {
            if(err) {return res.send(err)}
            return res.json(newItem);
        });
    });

    // PUT
    router.put('/investors/:id', (req, res) => {
        const _id = req.params.id;
        const update = req.body;
        Investor.findByIdAndUpdate(_id, update, {
            new: true,
            runValidators: true
            }, 
            (err, result) => {
                if(err) console.log(err);
                return res.status(200).json(result);
        })
    });

    // DELETE
    router.delete('/investors/:id', (req, res) => {
        const _id = req.params.id;
        Investor.findByIdAndDelete(_id, (err, result) => {
            if(err) console.log(err);
            return res.status(200).json('Item removed');
        })
    });




// end of router function
}