

module.exports = function(app,db){
    app.get('/getInstituteInfo',(req,res) => {
        console.log(req.body);
        console.log(req.params);
        
    })
}