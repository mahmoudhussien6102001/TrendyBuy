const catchAsync = require('./../utils/catchAsync');

exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    await Model.findByIdAndDelete(req.params.id);
    res.status(200).json({
        status: 'success',
        data: null
    });
});

exports.updateOne = Model => catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    });
});
exports.createOne = Model => catchAsync(async (req, res, next) => {
    let image='';
    if(req.file){
        image = req.file.filename;
    }
    const doc = await Model.create({...req.body ,image : image});
    res.status(201).json({
        status: 'success',
        data: {
            data: doc
        }
    });
});


exports.getOne = Model => catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const doc = await Model.findById(id);
    if (!doc) {
        return res.status(404).json({
            status: 'fail',
            message: 'Document not found'
        });
    }
    res.status(200).json({
        status: 'success',
        data: {
            data: doc
        }
    });
});

exports.getAll = Model => catchAsync(async (req, res, next) => {
    const doc = await Model.find();
    res.status(200).json({
        status: 'success',
        results: doc.length,
        data: {
            data: doc
        }
    });
});
