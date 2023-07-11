const mongoose= require('mongoose');
mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1/contact_list_db');
// const serverSelection=new serverSelectionError();
const db=mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to db'))

db.once('open', function(){
    console.log("Succesfully connected to the database")
})

// main().catch(err => console.log(err)
// );

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1/contact_list_db');
//   }


