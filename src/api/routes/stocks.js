const Stock = require('../../models/Stock');

module.exports = function(router) {

        // GET All
        router.get('/stocks', (req, res) => {
            Stock.find({}, (err, results) => {
                if(err) console.log(err);
                return res.status(200).json({count: results.length, data: results});
            });
        });
    
        // GET One
        router.get('/stocks/:id', (req, res) => {
            const _id = req.params.id;
            Stock.findById(_id, (err, result) => {
                if(err) console.log(err);
                return res.status(200).json(result);
            })
        });
    
        // POST new
        router.post('/stocks', (req, res) => {
    
            const newItem = new Stock(req.body);
            newItem.save({runValidators: true}, (err, newItem) => {
                if(err) {return res.send(err)}
                return res.json(newItem);
            });
        });
    
        // PUT
        router.put('/stocks/:id', (req, res) => {
            const _id = req.params.id;
            const update = req.body;
            Stock.findByIdAndUpdate(_id, update, {
                new: true,
                runValidators: true
                }, 
                (err, result) => {
                    if(err) console.log(err);
                    return res.status(200).json(result);
            })
        });
    
        // DELETE
        router.delete('/stocks/:id', (req, res) => {
            const _id = req.params.id;
            Stock.findByIdAndDelete(_id, (err, result) => {
                if(err) console.log(err);
                return res.status(200).json('Item removed');
            })
        });


//end of router function
}