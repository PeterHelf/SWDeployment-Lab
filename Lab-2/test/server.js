var expect  = require("chai").expect;
var request = require("request");
var http = require('http');
var app = require('../app');
var port = normalizePort(process.env.PORT || '3000');
app.set('port',port);
var server = http.createServer();

function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
  
    if (port >= 0) {
      return port;
    }
  
    return false;
  }

describe("Index page", function() {
    before(done => {
        server = app.listen(app.get('port'),done());
    });
    
    describe("Responses", () => {        
        var url = "http://localhost:" + port

        it(url + " should return status 200",function(done) {
            request(url, function(error,response,body) {
                expect(response.statusCode).to.equal(200);
                done();
            });  
        });
    
        it(url + "/users should return an array of users",function(done) {
            request(url + "/users", function(error,response,body) {
                expect(JSON.parse(response.body)).to.be.an('array');
                done();
            });  
        });
    });
    
    after(() => {
        server.close();
    });
});