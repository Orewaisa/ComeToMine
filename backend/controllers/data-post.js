const fs = require('fs');

function saveUserToken(req, res, data) {    
    const parseData = JSON.parse(data);
    parseData.push(req.body);
    fs.writeFile(__dirname + '/../data/data-base.json', JSON.stringify(parseData, null, 2), 'utf-8', (err) => {
        if (err) {
            console.log('Error', err);
            res.json('Server error 404');
        } else {
            return true;
        }
    });
}

class dataController {

    setToken(req, res) { 
        fs.readFile(__dirname + '/../data/data-base.json', 'utf-8', (err, data) => {
            if (err) {
                console.error(err);
                res.json('Server error. Code: 404');
            } else {
                saveUserToken(req, res, data);
            }
        });          
    }
}

module.exports = dataController;