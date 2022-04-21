const usersData = require('../database/users.json'); //file database user

function loginGet(req, res) {
    res.render('login'); // login
    res.status(200).json(); //status
}


function loginPost(req, res) {

    const inputusername = req.body.username;
    const inputpassword = req.body.password;
    const findDataIndex = usersData.findIndex((element) => element.email == inputusername); //tampilan data ke database

    if (findDataIndex == -1) {
        res.status(403).json({ message: 'email belum terdaftar' });
    } else {
        if (usersData[findDataIndex].password != inputpassword) {
            res.status(403).json({ message: 'password salah' });
        } else { //sesuai password
            res.status(200).json({ message: 'login sukses' });
        };
    };
};
module.exports = {
    loginGet,
    loginPost
}