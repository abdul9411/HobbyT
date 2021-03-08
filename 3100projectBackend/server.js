//access mongodb atlas through terminal:
//mongo "mongodb+srv://cluster0.oss8k.mongodb.net/3100projectDB" --username dbUser

const express = require("express"); //connect to server
const mongoose = require("mongoose"); // connect to database
const bodyParser = require("body-parser"); // get body content from a form
const cors = require("cors");
require('body-parser-xml')(bodyParser);


const config = require("config");

// routes
//import authRoutes from './routes/api/auth';
const authRoutes = require("./routes/api/auth");

const app = express();
app.use(bodyParser.json());
const db = config.get('mongoURI');
app.use(cors());
app.options('*', cors());
app.use(bodyParser.xml());

mongoose.set('useUnifiedTopology', true); // get rid of the Deprecation Warning
mongoose
  .connect(db , {useNewUrlParser: true}) //get rid of the warning
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use('/api/auth', authRoutes);
app.use(bodyParser.xml());

const port = process.env.PORT || 3001;
app.listen(port,'0.0.0.0', () => console.log(`Server started on port ${port}`));
