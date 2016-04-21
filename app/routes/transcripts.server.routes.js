var users = require('../controllers/users.server.controller'),
    transcripts = require('../controllers/transcripts.server.controller');
    
module.exports = function(app) {
    app.route('/api/transcripts')
        .get(transcripts.list)
        .post(users.requiresLogin, transcripts.create);
        
    app.route('/api/transcripts/:transcriptId')
        .get(transcripts.read)
        .put(users.requiresLogin, transcripts.hasAuthorization, transcripts.update)
        .delete(users.requiresLogin, transcripts.hasAuthorization, transcripts.delete);
            
    app.param('transcriptId', transcripts.transcriptByID);
};