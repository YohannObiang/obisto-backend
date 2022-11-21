const express = require('express')
const cors = require('cors')
const app = express()
const multer = require("multer");
const path = require("path");
var mysql = require("mysql");
const bodyParser = require('body-parser');



app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
       cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
       cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
 });
 var upload = multer({ storage: storage });

// serving static files



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
app.use('/uploads', express.static('uploads'));


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



// handle single file upload
app.post('/uploadfile', upload.single('dataFile'), (req, res, next) => {
   const file = req.file;
   if (!file) {
      return res.status(400).send({ message: 'Please upload a file.' });
   }
   return res.send({ message: 'File uploaded successfully.', file });
});


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

// Lister les commandes
app.get('/commandes', (req, res)=>{
    
    con.query('SELECT * FROM commandes',(err,result)=>{
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
    const description = req.body.description;
    const categorie = req.body.categorie;
    const id_proprietaire  = req.body.id_proprietaire ;
    const statut  = req.body.statut ;
    const date_dajout = req.body.date_dajout;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3; 
    const image4 = req.body.image4;
    const image5 = req.body.image5;

    
    
    con.query('INSERT INTO objets VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[objet, caution, etat, prix_jour, description, categorie, id_proprietaire, statut, date_dajout, image1, image2, image3, image4, image4, image5],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})

//Ajouter un commande;
app.post('/ajout/commande', (req, res)=>{

    const id_objet = req.body.id_objet;
    const objet = req.body.objet;
    const date_debut = req.body.date_debut;
    const date_fin = req.body.date_fin;
    const periode = req.body.periode;
    const prix_total = req.body.prix_total;
    const nom_destinataire  = req.body.nom_destinataire ;
    const prenom_destinataire  = req.body.prenom_destinataire ;
    const email = req.body.email;
    const phone = req.body.phone;
    const quartier = req.body.quartier;
    const id_proprietaire = req.body.id_proprietaire; 
    const date_de_commande = req.body.date_de_commande;
    const statut = req.body.statut;
    const code = req.body.code;

    
    
    con.query('INSERT INTO commandes VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[id_objet, objet, date_debut, date_fin, periode, prix_total, nom_destinataire, prenom_destinataire, email, phone, quartier, id_proprietaire, date_de_commande, statut, code],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})

app.put('/update/commande/:id', (req, res)=>{


    const statut = req.body.statut;
    const id = req.params.id;

    
    
    con.query(`UPDATE commandes SET statut = ? WHERE commandes.id_commande = ${id}`,[statut],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('Status updated successfully');
    }
    })
})


app.put('/update/objet/:id', (req, res)=>{


    const objet = req.body.objet;
    const caution = req.body.caution;
    const etat = req.body.etat;
    const prix_jour = req.body.prix_jour;
    const description = req.body.description;
    const categorie = req.body.Categorie;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3; 
    const image4 = req.body.image4;
    const image5 = req.body.image5;

    
    
    con.query(`UPDATE objets SET objet = PS4 fat, caution = 30000, etat = Excellent, prix_jour = 5500, description = Tres bonne machine, categorie = Jeu vidéo WHERE objets.id_objet = 185`,[objet, caution, etat, prix_jour, description, categorie],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('Status updated successfully');
    }
    })
})


//Ajouter un proprietaire;
app.post('/ajout/proprietaire', (req, res)=>{

    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const date_de_naissance = req.body.date_de_naissance;
    const sexe = req.body.sexe;
    const telephone = req.body.telephone;
    const email_proprio = req.body.email_proprio;
    const password  = req.body.password ;
   

    
    
    con.query('INSERT INTO proprietaires VALUES(NULL,?,?,?,?,?,?,?)',[nom, prenom, date_de_naissance, sexe, telephone, email_proprio, password],(err,result)=>{
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


