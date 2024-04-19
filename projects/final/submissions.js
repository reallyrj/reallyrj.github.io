const getSubmissions=async()=>{
    try{
        return(await fetch("api/submissions/")).json();
    } catch(error){
        console.log(error);
    }
};

const showSubmissions=async()=>{
    let submissions=await getSubmissions();
    let submissionsDiv=document.getElementById("submission-list");
    submissionsDiv.innerHTML="";
    submissions.forEach((submission)=>{
    const section=document.createElement("section");
    section.classList.add("submission");
    submissionsDiv.append(section);

    const a=document.createElement("a");
    a.href="#";
    section.append(a);

    const h3=document.createElement("h3");
    h3.innerHTML=submission.name;
    a.append(h3);

    const img=document.createElement("img");
    img.src="images/"+submission.image;
    a.append(img);

    a.onclick=(e)=>{
        e.preventDefault();
        displayDetails(submission);
        };
    });
};

const displayDetails=(submission)=>{
    openDialog("submission-details");
    const submissionDetails=document.getElementById("submission-details");
    submissionDetails.innerHTML="";
    submissionDetails.classList.remove("hidden");

    const h3=document.createElement("h3");
    h3.innerHTML=submission.name;
    submissionDetails.append(h3);

    const dlink=document.createElement("a");
    dlink.innerHTML="	&#9249;";
    submissionDetails.append(dlink);
    dlink.id="delete-link";

    const elink=document.createElement("a");
    elink.innerHTML="&#9998;";
    submissionDetails.append(elink);
    elink.id="edit-link";

    const p=document.createElement("p");
    submissionDetails.append(p);
    p.innerHTML=submission.description;

    const ul=document.createElement("ul");
    submissionDetails.append(ul);
    console.log(submission.songs);
    submission.songs.forEach((song)=>{
        const li=document.createElement("li");
        ul.append(li);
        li.innerHTML=song;
    });

const spoon=document.createElement("section");
spoon.classList.add("spoon");
submissionDetails.append(spoon);

elink.onclick=showSubmissionForm;
dlink.onclick=deleteSubmission.bind(this, submission);

populateEditForm(submission);
};

const populateEditForm=(submission)=>{
    const form=document.getElementById("submission-form");
    form._id.value=submission._id;
    form.name.value=submission.name;
    form.description.value=submission.description;
    document.getElementById("img-prev").src="images/"+submission.image;
    //add songs
    populateSongs(submission.songs);
};

const populateSongs=(songs)=>{
    const section=document.getElementById("song-boxes");
    songs.forEach((song)=>{
    const input=document.createElement("input");
    input.type="text";
    input.value=song;
    section.append(input);
 });
};

const addeditSubmission=async(e)=>{
    e.preventDefault();
    const form=document.getElementById("submission-form");
    const formData=new FormData(form);
    let response;
    formData.append("songs",getSongs());

    console.log(...formData);


    if(form._id.value.trim()==""){
        console.log("in post");
        response=await fetch("/api/submissions/",{
            method: "POST",
            body:formData,
        });
    } else {

        console.log("in put");
        response=await fetch(`/api/submissions/${form._id.value}`,{
        method:"PUT",
        body:formData    
        });
    }


    if (response.status!=200){
        console.log("Error adding /editing");
    }

    await response.json();
    resetForm();
    document.getElementById("dialog").style.display="none";
    showSubmissions();
};

const getSongs=()=>{
    const inputs=document.querySelectorAll("#song-boxes input");
    let songs=[];

    inputs.forEach((input)=>{
        songs.push(input.value);
    });

    return songs
};

const resetForm=()=>{
    const form=document.getElementById("submission-form");
    form.reset();
    form._id.value="";
    document.getElementById("song-boxes").innerHTML="";
    document.getElementById("img-prev").src="";
};

const showSubmissionForm=(e)=>{
    openDialog("submission-form");
    console.log(e.target);
    if(e.target.getAttribute("id") !="edit-link"){
    resetForm();
    }
};

const deleteSubmission=async(submission)=>{
    let response=await fetch(`/api/submissions/${submission._id}`,{
        method:"DELETE",
        headers:{
        "Content-Type":"application/json;charset=utf-8",
        },
    });

    if(response.status!=200){
        console.log("error deleting");
        return;
    }

    let result=await response.json();
    resetForm();
    showSubmissions();
    document.getElementById("dialog").style.display="none";
};

const addsong=(e)=>{
    e.preventDefault();
    const section=document.getElementById("song-boxes");
    const input=document.createElement("input");
    input.type="text";
    section.append(input);
};

const openDialog=(id)=>{
    document.getElementById("dialog").style.display="block";
    document.querySelectorAll("#dialog-details> *").forEach((item)=>{
        item.classList.add("hidden");
    });
    document.getElementById(id).classList.remove("hidden");
};


showSubmissions();
document.getElementById("submission-form").onsubmit=addeditSubmission;
document.getElementById("add-link").onclick=showSubmissionForm;
document.getElementById("add-song").onclick=addsong;

document.getElementById("img").onchange=(e)=>{
    if(!e.target.files.length){
        document.getElementById("img-prev").src="";
        return;
    }
    document.getElementById("img-prev").src=URL.createObjectURL(
        e.target.files.item(0)
    );
};