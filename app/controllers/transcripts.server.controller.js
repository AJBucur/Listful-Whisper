var mongoose = require('mongoose'),
    Transcript = mongoose.model('Transcript');

var getErrorMessage = function(err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].
                message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function(req, res) {
    var transcript = new Transcript(req.body);
    transcript.creator = req.user;
    transcript.course = req.course;
    transcript.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(transcript);
        }
    });
};

exports.list = function(req, res) {
    Transcript.find().sort('-created').populate('creator',
        'firstName lastName fullName')
        .exec(function(err, transcripts) {
            if (err) {
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            } else {
                res.json(transcripts);
            }
        });
};

exports.transcriptByID = function(req, res, next, id) {
    Transcript.findById(id).populate('creator', 
    'firstName lastName fullName')
    .exec(function(err, transcript) {
        if (err) return next(err);
        if (!transcript) return next(new Error('Failed to load transcript '
            + id));
        req.transcript = transcript;
        next();
    });
};

exports.read = function(req, res) {
    res.json(req.transcript);
};

exports.update = function(req, res) {
    var course = req.course;
    course.title = req.body.title;
    
    course.content = req.body.content;
    
    course.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(course);
        }
    });
};

exports.delete = function(req, res) {
    var transcript = req.transcript;
    transcript.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(transcript);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.transcript.creator.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};

