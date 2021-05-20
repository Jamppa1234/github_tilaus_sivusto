import React, { Component } from "react";
 
function Asiakas(props) {
    return <h1>{props.title}  </h1>
}

// get asiakkaat
app.get('/getasiakkaat', (req, res) => {
    let sql = 'SELECT * FROM asiakkaat'
    let query = db.query(sql, (err, results) => {
        if (err) {
            throw err;
        }
        console.log(results);
        res.send('Asiakkaat details fetched');
    })
})

app.listen('4000', () => {
    console.log('Server started on port 4000')
})

export default Asiakas;