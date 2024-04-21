const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose=require("mongoose");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });
  
  mongoose
  .connect("mongodb+srv://rjlemon334:yhPgdNpb0aK59Q84@rjbase.3jk3sem.mongodb.net/"
  )
  .then(()=>{
    console.log("connected");
  })
  .catch((error)=>
  {console.log("couldnt connect",error);
});

const submissionSchema=new mongoose.Schema({
    name: String,
    description: String,
    songs: [String],
    image: String,
});

const Submission=mongoose.model("Submission",submissionSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/index.html", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/drops.html", (req, res) => {
    res.sendFile(__dirname + "/drops.html");
  });
app.get("/artist.html", (req, res) => {
    res.sendFile(__dirname + "/artist.html");
  });
app.get("/favorites.html", (req, res) => {
    res.sendFile(__dirname + "/favorites.html");
  });
app.get("/news.html", (req, res) => {
    res.sendFile(__dirname + "/news.html");
  });
app.get("/contact.html", (req, res) => {
    res.sendFile(__dirname + "/contact.html");
  });
  app.get("/submissions.html", (req, res) => {
    res.sendFile(__dirname + "/submissions.html");
  });




  app.get("/api/submissions", (req, res) => {
    getSubmissions(res);
  });
  
  const getSubmissions = async (res) => {
    const submissions = await Submission.find();
    res.send(submissions);
  };
  
  app.get("/api/submissions/:id", (req, res) => {
    getSubmission(res, req.params.id);
  });
  
  const getSubmission = async (res, id) => {
    const submission = await Submission.findOne({ _id: id });
    res.send(submission);
  };

app.post("/api/submissions",upload.single("img"),(req,res)=>{
    const result=validateSubmission(req.body);
    console.log(result);
    if (result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

const submission=new Submission({
    name: req.body.name,
    description: req.body.description,
    songs: req.body.songs.split(","),
});

if(req.file){
    submission.image=req.file.filename;
}

createSubmission(submission,res);
});

const createSubmission=async(submission,res)=>{
    const result=await submission.save();
    res.send(submission);
};

app.put("/api/submissions/:id",upload.single("img"),(req,res)=>{
    const result=validateSubmission(req.body);
    console.log(result)
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }
    updateSubmission(req,res);
});

const updateSubmission= async (req,res)=>{
    let fieldsToUpdate={
        name: req.body.name,
        description: req.body.description,
        songs: req.body.songs.split(",")
    };

    if (req.file){
        fieldsToUpdate.img="images/"+req.file.filename;
    }

    const result=await Submission.updateOne({_id:req.params.id},fieldsToUpdate);
    
    res.send(result);
};

app.delete("/api/submissions/:id", (req,res) => {
removeSubmission(res,req.params.id);
});

const removeSubmission=async (res,id)=>{
    const submission=await Submission.findByIdAndDelete(id);
    res.send(submission);
};

const validateSubmission=(submission)=>{
    const schema=Joi.object({
        _id: Joi.allow(""),
        songs: Joi.allow(""),
        name: Joi.string().min(3).required(),
        description: Joi.string().min(3).required(),
    });

    return schema.validate(submission);
}

app.listen(3000,()=>{
    console.log("Im Listening");
});