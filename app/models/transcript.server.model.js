var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var TranscriptSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    course: {
        type: Schema.ObjectId,
        ref: 'Course'
    },
    grade: {
        type: String,
        default:'N/A'
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Transcript', TranscriptSchema);