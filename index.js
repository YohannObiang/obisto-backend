const express = require('express')
const cors = require('cors')
const app = express()
var mysql = require("mysql")

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Base de donnees connectee')
})

app.listen(process.env.PORT || 3001)

app.use(express.json())
app.use(cors())

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'obisto'
})



con.connect((err)=>{
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
    const description = req.body.description;
    const id_categorie = req.body.id_categorie;
    const id_proprietaire  = req.body.id_proprietaire ;
    const statut  = req.body.statut ;
    const date_dajout = req.body.date_dajout;
    const image1 = req.body.image1;
    const image2 = req.body.image2;
    const image3 = req.body.image3;
    const image4 = req.body.image4;
    const image5 = req.body.image5;

    
    
    con.query('INSERT INTO matieres VALUES(NULL,?,?,?,?,?,?,?,?,?,?)',[objet, description, id_proprietaire, statut, date_dajout, image1, image2, image3, image4, image4],(err,result)=>{
        if(err)
    {
        console.log(err)
    }else{
        res.send('POSTED');
    }
    })
})
