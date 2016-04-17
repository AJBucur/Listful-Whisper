var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
var TranscriptSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    grade: {
        type: String,
        default:''
    },
    teacher: {
        type: String,
        trim: true      
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Transcript', TranscriptSchema);