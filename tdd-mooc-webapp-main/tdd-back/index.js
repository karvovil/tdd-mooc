const express = require('express'), 
app = express(); 
  
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 
  
app.get('/',  
   (req, res) => res.send('Allo')) 
  
app.listen(5000,  
   () => console.log(`⚡️ Server running at 5000`));