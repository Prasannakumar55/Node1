const http = require('http');
const data = {
    Name : 'prasanna kumar', 
    City : 'Khammam',
    Branch : 'Mechanical'
}
const Jsons = JSON.stringify(data);

const server = http.createServer((req,res)=>{
    res.write(Jsons);
    res.end();
}).listen(2020,()=>{console.log('Server Running')})