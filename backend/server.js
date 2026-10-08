var express = require("express");
var app = express();
const PORT = 3000;
var path = require("path");

app.use(express.static(path.join(__dirname,'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


let users = [
    {
        id: 1,
        fName: 'Cartier',
        lName: 'Slinks',
        age: 26
    },
    {
        id:2,
        fName: 'Wattkin',
        lName: 'Slate',
        age: 22
    }
]


app.get('/PhobosStyledForm.html', function(req, res){
    const filepath = path.join(__dirname, 'public', 'PhobosStyledForm.html');
    res.sendFile(filepath);
    console.log('Archiving.');
});

app.post('/PhobosStyledForm.html', function(req, res){
    let id = users.length + 1;
    const {fName, lName, age} = req.body;
    let info = {id, fName, lName, age};
    users.push(info);
    
    console.log('This one is remembered.');
    
    // Redirect to the Kraber page to view the list
    res.redirect('/PhobosKraber.html');
});

// Create an API route so PhobosKraber.html can fetch the data
app.get('/api/users', function(req, res) {
    res.json(users);
});
 
app.get('/PhobosGridLayout.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosGridLayout.html')
    response.sendFile(filepath);
    console.log('')
});

app.get('/rerember.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'rerember.html')
    response.sendFile(filepath);
    console.log('re-remember the details.')
});

app.post('/update-user/:id', function(req, res) {
    const userId = parseInt(req.params.id);
    const { fName, lName, age } = req.body;

    let user = users.find(u => u.id === userId);
    if (user) {
        user.fName = fName;
        user.lName = lName;
        user.age = age;
        console.log(`User ID ${userId} updated.`);
    }

    res.redirect('/PhobosKraber.html');
});

// Handle deleting a user profile
app.post('/delete-user/:id', function(req, res) {
    const userId = parseInt(req.params.id);
    
    // Filter out the user with the matching ID
    users = users.filter(u => u.id !== userId);
    
    console.log(`User ID ${userId} deleted.`);
    res.redirect('/PhobosKraber.html');
});

app.get('/ok.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'ok.html')
    response.sendFile(filepath);
    console.log('ok')
});

app.get('/PhobosButton.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosButton.html')
    response.sendFile(filepath);
    console.log('Button')
});

app.get('/PhobosFlLayout.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosFlLayout.html')
    response.sendFile(filepath);
    console.log('Layout')
});

app.get('/PhobosProfile.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosProfile.html')
    response.sendFile(filepath);
    console.log('Profile')
});

app.get('/PhobosNavBar.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosNavBar.html')
    response.sendFile(filepath);
    console.log('NavBar')
});

app.get('/PhobosMiniProject.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosMiniProject.html')
    response.sendFile(filepath);
    console.log('MiniProject')
});

app.get('/PhobosKraber.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosKraber.html')
    response.sendFile(filepath);
    console.log('Archives')
});

app.get('/PhobosMedia.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosMedia.html')
    response.sendFile(filepath);
    console.log('Media')
});

app.get('/', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosBasic.html')
    response.sendFile(filepath);
    console.log('Basic')
});

app.get('/PhobosBasic.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosBasic.html')
    response.sendFile(filepath);
    console.log('Basic')
});

app.get('/PhobosResume.html', function(request, response){
    const filepath = path.join(__dirname, 'public', 'PhobosResume.html')
    response.sendFile(filepath);
    console.log('Resume')
});


app.listen(PORT, function(){
    console.log('nag start na tayo men sa http://localhost:3000');
});