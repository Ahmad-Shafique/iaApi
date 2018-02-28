var creds = require('../authentication/dbCredentials');


const userRoutes = require('./users');
const depositRateRoutes = require('./depositRate');
const instituteRoutes = require('./institute');
const instituteDirectorRoutes = require('./instituteDirector');
const newsFeedRoutes = require('./newsFeed');
const tdrCreditRatingRoutes = require('./tdrCreditRating');
const tdrInvestmentRoutes = require('./tdrInvestment');
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

    app.get('/getReq',(req,res) => {
        let product = [
            {'id': 1, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/15204_Street_750_11.jpg'},
            {'id': 2, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/85862.jpg'},
            {'id': 3, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/135079_415941965145319_1427686664_o.jpg'},
            {'id': 4, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/Bajaj-Pulsar-150-2017-Price-BSIV-6.jpg'},
            {'id': 6, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/d5.jpg'},
            {'id': 7, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/energica-e1487336127380.jpg'},
            {'id': 8, 'category': 'boats', 'caption': 'This is photo', 'url': 'assets/img/Hero-HX250R.jpg'},
            {'id': 10, 'category': 'boats', 'caption': 'Light with Fog', 'url': 'assets/img/motocross-rental-el-nido.jpeg'},
            {'id': 11, 'category': 'boats', 'caption': 'Light with Fog', 'url': 'assets/img/m_rc-200_8.jpg'},
            {'id': 12, 'category': 'boats', 'caption': 'Light with Fog', 'url': 'assets/img/runner-freedom-turbo-price-in-bangladesh.jpg'},
            {'id': 13, 'category': 'boats', 'caption': 'Light with Fog', 'url': 'assets/img/S_748405-MLA25017878981_082016-O.jpg'},
            {
              'id': 14,
              'category': 'boats',
              'caption': 'Light with Fog',
              'url': 'assets/img/Scrambler_Italian-Indipendent_Standard-01_634x357_634x357.jpg'
            }
          ];
        
        res.send(JSON.stringify(product));
    });

    app.get('/test-mysql', (req,res) => {
        var connection = db.createConnection({
            'host':'localhost',
            'user':'root',
            'database': 'ia'
        });

        connection.connect(function(err){
            if(err) throw err;
            console.log('Connection to MySQL established !!!');
        });

        let sql = 'select * from user';

        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });



    userRoutes(app,db);
    depositRateRoutes(app,db);
    instituteRoutes(app,db);
    instituteDirectorRoutes(app,db);
    newsFeedRoutes(app,db);
    tdrCreditRatingRoutes(app,db);
    tdrInvestmentRoutes(app,db);
    institureProfileInformation(app,db);
}