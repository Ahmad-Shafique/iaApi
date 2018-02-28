var creds = require('../authentication/dbCredentials');

const institureProfileInformation = require('./instituteProfileInformation');

module.exports = function(app,db){

    app.get('/ia-get-request-test', (req,res) => {
        console.log('IA get request perfectly healthy.');
        console.log('Sending greetings now...');
        res.send("Hello Tuhin, How are you ?");
    });
    app.post('/ia-post-request-test', (req,res) => {
        console.log('IA post request perfectly healthy.');
        console.log('Sending greetings now...');
        res.send("Hello World");
    });



    institureProfileInformation(app,db);
}