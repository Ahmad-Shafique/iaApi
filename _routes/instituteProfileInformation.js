

module.exports = function(app,db){
    app.get('/getInstituteInfo/:name',(req,res) => {
        // console.log(req.body);
        // console.log(req.params);

        console.log('route parameter was : '+ req.params.name);
        let institutes,directors;

        var connection = db.createConnection({
            'host':'localhost',
            'user':'root',
            'database': 'ia'
        });

        connection.connect(function(err){
            if(err) throw err;
            // console.log('Connection to MySQL established !!!');
        });

        let sql = 'select * from institute where name like \'%'+req.params.name+ "%\'";

        connection.query(sql, function (err, result) {
            if (err) throw err;
            // console.log(result);
            institutes = result;
            let id = result[0].institute_id;
            // res.json(result);
            connection.query("select * from institute_director where institute_id="+id, function(e,r){
                directors = r;
                let rObj = {institute: institutes , director: directors};
                res.send(rObj);
            });
            
        });
    });


    app.get('/getDepositRate/:name',(req,res) => {
        // console.log(req.body);
        // console.log(req.params);

        console.log('route parameter was : '+ req.params.name);
        let institutes, id, rObj;

        var connection = db.createConnection({
            'host':'localhost',
            'user':'root',
            'database': 'ia'
        });

        connection.connect(function(err){
            if(err) throw err;
            // console.log('Connection to MySQL established !!!');
        });

        let sql = 'select * from institute where name like \'%'+req.params.name+ "%\'";

        connection.query(sql, function (err, result) {
            if (err) throw err;
            // console.log(result);
            institutes = result;
            id = result[0].institute_id;
            // res.json(result);
            connection.query("select * from deposit_rate where institute_id="+id, function(e,r){
                deposit_rates = r;
                rObj = {deposit_rate: deposit_rates};
                res.send(rObj);
            });
            
        });
    });


    app.get('/getTdrInfo/:id',(req,res) => {
        // console.log(req.body);
        // console.log(req.params);

        // console.log('route parameter was : '+ req.params.name);
        let institutes, id, rObj, sql;

        var connection = db.createConnection({
            'host':'localhost',
            'user':'root',
            'database': 'ia'
        });

        connection.connect(function(err){
            if(err) throw err;
            // console.log('Connection to MySQL established !!!');
        });

        id = req.params.id;
        sql = 'select * from tdr_investment where institute_id=' + id;

        connection.query(sql, function (err, result) {
            if (err) throw err;
            // console.log(result);
            tdrInvestments = result;
            // res.json(result);
            connection.query("select * from tdr_credit_rating where tdr_investment_id="+result[0].tdr_investment_id,
                             function(e,r){
                                tdrCreditRatings = r;
                                rObj = {tdr_investment: tdrInvestments , tdr_credit_ratings: tdrCreditRatings};
                                res.send(rObj);
            });
            
        });
    });

    
}