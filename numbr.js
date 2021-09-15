process.stdin.resume();
process.stdin.setEncoding('utf-8');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});


const https = require('https');
const fs = require('fs');

/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 * Base url: https://jsonmock.hackerrank.com/api/movies/search/?Title=
 *
 *
 * Waterworld
 * spiderman
 */

// const options = {
//     hostname: 'https://jsonmock.hackerrank.com',
//     port: 443,
//     path: '/api/movies/search/?Title=',
//     method: 'GET'
//   }



const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem'),
  json: true,
  method: 'GET'
};


async function getMovieTitles(substr) {
    let body = [];

    https.get(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

        res.
        //res.on('data', (d) => {

          res.write(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(data));
          res.end();
          //   //body.push(d)
          // //   process.stdout.write(d);
          // var jsonObject = JSON.parse(d);
          // console.log(jsonObject);
          //   // console.log(JSON.stringify({
          //   //   d
          //   // }))


            // TODO: save data as array then access each title using lambda d.title() and save it in another array to prepare it for sorting in accesning alphabatic order using sortTitles(tls) function.
      //  })

        }).on('error', (e) => {
        console.error(e);
        });
}


const myArray = ['Italian Spiderman', 'Superman, Spiderman or Batman', 'Fighting, Flying and Driving: The Stunts of Spiderman 3', 'Amazing Spiderman Syndrome'];

function sortTitles(tls) {
    tls.sort();
    console.log(tls);
}

// sortTitles(myArray);


// await getMovieTitles('spiderman');
  getMovieTitles('spiderman&page=1');
 // getMovieTitles('spiderman&page=2');




 //
 // const server = https.createServer(options, (req, res) => {
 //   res.writeHead(200, {'Content-Type': 'application/json'});
 //   // res.end(JSON.stringify({
 //   //   data:'hello'
 //   // }));
 //
 //   res.end(getMovieTitles('spiderman'));
 // });
 //
 // server.listen(7777);
