const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const sinhvienRoute = require('./routes/sinhvienRoute');

const app = express();//tao doi tuong moi
//ket noi mongodb
mongoose.connect('mongodb+srv://daihgph36944:hgd15022k4@lab2.5aesvta.mongodb.net/?retryWrites=true&w=majority&appName=Lab2/db1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("ket noi thanh cong voi server");
}).catch((err) => {
    console.error(err);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', sinhvienRoute);
//su dung route

//goi den file ejs
app.set('view engine', 'ejs');
//tao port
const PORT = process.env.PORT || 3000;
//chay server
app.listen(PORT, () => {
    console.log("server dang chay o cong 3000");
});