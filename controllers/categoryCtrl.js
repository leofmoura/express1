var Category = require('../models/category').Category;

exports.list = function(req, res) {
    Category.find({}, function(error, categories) {
        if (error)
            res.send(error);

        res.json(200, categories);
    });
};

exports.create = function(req, res) {
    var category = new Category();
    category.name = req.body.name;

    category.save(function(error) {
        if (error)
            res.send(error);

        res.json(201, category);
    });
};

exports.show = function(req, res) {
    var id = req.params.id; // The id of the workout the user wants to look up.
    Category.findOne({
            _id: id
        },
        function(err, doc) {
            if (!err && doc) {
                res.status(200).json(doc);
            } else if (err) {
                res.json(500, {
                    message: "Error"
                });
            } else {
                res.json(404, {
                    message: "Category not found"
                });
            }
        });
};
