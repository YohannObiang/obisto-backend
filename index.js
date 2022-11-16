const express = require('express')
const cors = require('cors')
const app = express()
const multer = require("multer");
const path = require("path");
var mysql = require("mysql")

const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10
    }
})



app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Base de donnees connectee')
})

app.listen(process.env.PORT || 3001)

app.use(express.json())
app.use(cors())
app.use(errHandler);

const con = mysql.createPool({
    connectionLimit : 100,
    waitForConnections : true,
    queueLimit :0,
    host     : 'db4free.net',
    user     : 'yohannobiang',
    password : '@Bolo1997',
    database : 'obisto',
    debug    :  true,
    wait_timeout : 28800,
    connect_timeout :10
});


// const con = mysql.createPool({
//     connectionLimit : 100,
//     waitForConnections : true,
//     queueLimit :0,
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'obisto',
//     debug    :  true,
//     wait_timeout : 28800,
//     connect_timeout :10
// });






con.getConnection ((err)=>{
    if(err)
    {
        console.log(err)
    }else{
        console.log('connexion établie');
    }
})

// Lister les categories d'objet
app.get('/categories', (req, res)=>{
    
    con.query('SELECT * FROM categories',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les objets
app.get('/objets', (req, res)=>{
    
    con.query('SELECT * FROM objets',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
//Effacer une objet
app.delete('/delete/objet/:id', (req, res)=>{
    
    con.query('DELETE FROM objets WHERE id_objet=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les objets d'une categorie
app.get('/categories/objets/:id', (req, res)=>{
    
    con.query('SELECT * FROM objets WHERE id_categorie=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les commandes d'un proprietaire
app.get('/commandes/proprietaire/:id', (req, res)=>{
    
    con.query('SELECT * FROM commandes WHERE id_proprietaire=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les objets d'un proprietaire
app.get('/proprietaires/objets/:id', (req, res)=>{
    
    con.query('SELECT * FROM objets WHERE id_proprietaire=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les objets d'un categorie
app.get('/categories/:id', (req, res)=>{
    
    con.query('SELECT * FROM objets WHERE id_categorie=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les objets d'un objet
app.get('/objet/:id', (req, res)=>{
    
    con.query('SELECT * FROM objets WHERE id_objet=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
// Lister les proprietaires
app.get('/proprietaires', (req, res)=>{
    
    con.query('SELECT * FROM proprietaires',(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
//Effacer une categorie
app.delete('/delete/categorie/:id', (req, res)=>{
    
    con.query('DELETE FROM categories WHERE id_categorie=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
//Effacer un proprietaire
app.delete('/delete/proprietaire/:id', (req, res)=>{
    
    con.query('DELETE FROM proprietaires WHERE id_proprietaire=?',[req.params.id],(err,result)=>{
        if(err) res.status(500).send(err)
        
        res.status(200).json(result)
    })
})
//Ajouter une classe;
app.post('/ajout/classe', (req, res)=>{

    const classe = req.body.classe;
    
    con.query('INSERT INTO classes VALUES(NULL,?)',[classe],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})
//Ajouter un proprietaire;
app.post('/ajout/proprietaire', (req, res)=>{

    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const dateDeNaissance = req.body.dateDeNaissance;
    const sexe = req.body.sexe;
    const telephone = req.body.telephone;
    const password = req.body.password;
    
    con.query('INSERT INTO proprietaires VALUES(NULL,?,?,?,?,?,?)',[id_classe, nom, prenom, dateDeNaissance, sexe, telephone, password],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})
//Ajouter un categorie;
app.post('/ajout/categorie', (req, res)=>{

    const categorie = req.body.categorie;
    
    con.query('INSERT INTO profs VALUES(NULL,?,?,?,?)',[categorie],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})
//Ajouter un objet;
app.post('/ajout/objet', (req, res)=>{

    const objet = req.body.objet;
    const caution = req.body.caution;
    const etat = req.body.etat;
    const prix_jour = req.body.prix_jour;
    const prix_semaine = req.body.prix_semaine;
    const categorie = req.body.categorie;
    const id_proprietaire  = req.body.id_proprietaire ;
    const statut  = req.body.statut ;
    const date_dajout = req.body.date_dajout;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3; 
    const image4 = req.body.image4;
    const image5 = req.body.image5;

    
    
    con.query('INSERT INTO objets VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[objet, caution, etat, prix_jour, prix_semaine, categorie, id_proprietaire, statut, date_dajout, image1, image2, image3, image4, image4, image5],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})

app.use('/profile', express.static('upload/images'));
app.post("/upload", upload.single('profile'), (req, res) => {

    res.json({
        success: 1,
        // profile_url: `http://localhost:3001/profile/${req.file.filename}`
    })
})

function errHandler(err, req, res, next) {
    if (err instanceof multer.MulterError) {
        res.json({
            success: 0,
            message: err.message
        })
    }
}
