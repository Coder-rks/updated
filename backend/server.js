let express = require("express");
let bodyParser = require("body-parser");
let morgan = require("morgan");
let app = express();
let pg = require("pg");
const path = require("path");

let pool = new pg.Pool({
  user: "hqdfysvblucuug",
  database: "db3n8ggd2h1j24",
  password: "3f88fe5f63ee83e10064b6c6483746b5527a29cd20e9c8e7cf390c8ba6fa375c",
  host: "ec2-54-83-27-165.compute-1.amazonaws.com",
  port: 5432,
  max: 10
});
pg.defaults.ssl = true;

app.use(express.static(path.join(__dirname, "..", "/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "/build/index.html"));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  request.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/api/login", function(req, res) {
  // console.log(request);
  var user_email = req.body.email;
  var user_pass = req.body.password;
  var id = 1;

  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_citizen_profile__c where one_gc_email__c = $1",
        [user_email],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "User Not found in Database" });
          } else {
            console.log(table.rows[0].one_gc_email__c);
            console.log(table.rows[0].name);
            if (user_email == table.rows[0].one_gc_email__c) {
              console.log(true);
              res.send(true);
              
              // res
              //   .status(200)
              //   .send({
              //     message:
              //       "Welcome!! User FOUND in Database with details: SSN: " +
              //       table.rows[0].onegc_social_insurance_number__c +
              //       " " +
              //       "Name: " +
              //       table.rows[0].name +
              //       " " +
              //       table.rows[0].onegc_middle_name__c +
              //       " " +
              //       table.rows[0].onegc_last_name__c +
              //       " " +
              //       "Country: " +
              //       table.rows[0].onegc_country__c +
              //       " " +
              //       "Email: " +
              //       table.rows[0].one_gc_email__c +
              //       " " +
              //       "Phone: " +
              //       table.rows[0].onegc_mobile_phone__c
              //   });
            } else {
              console.log(false);
              res.send(false);
            }
          }
        }
      );
    }
  });
});

app.post("/api/account_history", function(req, res) {
  console.log('in api account notifications');
  var userId = req.body.userId;
  console.log(userId);
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_account_history__c where onegc_citizen_profile__c = $1 Limit 3",
        [userId],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "No account notifications found for this user" });
          } else {
            console.log(table.rows[0].onegc_status__c);
            console.log(table.rows[0].onegc_citizen_profile__c);
              console.log(true);
              res
                .status(200)
                .send({
                  Notifications: table.rows
                });
          }
        }
      );
    }
  });
});

app.post("/api/notifications", function(req, res) {
  var userId = req.body.userId;
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_account_notifcations__c where onegc_citizen_profile__c = $1 Limit 3",
        [userId],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "No account notifications found for this user" });
          } else {
            console.log(table.rows[0].onegc_status__c);
            console.log(table.rows[0].onegc_citizen_profile__c);
              console.log(true);
              res
                .status(200)
                .send({
                  Notifications: table.rows
                });
          }
        }
      );
    }
  });
});

app.post("/api/benefits", function(req, res) {
  var userId = req.body.userId;
  pool.connect((err, db, done) => {
    if (err) {
      return console.log(err);
    } else {
      db.query(
        "SELECT * from salesforceonegc.onegc_subscribed_benefits__c INNER JOIN salesforceonegc.onegc_program__c on salesforceonegc.onegc_subscribed_benefits__c.onegc_program__c = salesforceonegc.onegc_program__c.sfid  where onegc_citizen_profile__c = $1 Limit 3",
        [userId],
        (err, table) => {
          done();
          if (err) {
            return console.log(err);
          } else if (!table.rows.length) {
            res.status(200).send({ message: "No account notifications found for this user" });
          } else {
              res
                .status(200)
                .send({
                  Benefits: table.rows
                });
          }
        }
      );
    }
  });
});

app.post('/api/verify_details', function(req, res){
  pool.connect((err, db, done) => {
  if(err){
    return console.log(err);
  } else {
  db.query('SELECT * from salesforceonegc.onegc_citizen_profile__c where sfid = $1',['a780b000000AKaFAAW'], (err, table) =>{
      done();
      if(err){
        return console.log(err);
      } 
      else if (!table.rows.length) {
        res.status(200).send({message: 'User Not found in Database!!'});
      }
      else {
        console.log(table.rows[0].one_gc_email__c);
        console.log(table.rows[0].name);
        res.status(200).send(table.rows);
        
      }
    });
  }
}); 
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Listening on port " + PORT));
