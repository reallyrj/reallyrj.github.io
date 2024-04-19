const submitPerson = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
  
    const form = document.getElementById("form-person");
    const pName = form.elements["person-name"].value;
    const bdate=form.elements["birth-date"].value
    const role = form.elements["Role"].value;
    const termsChecked = form.elements["terms"].checked;
  
    console.log(pName);
    console.log(bdate);
    console.log(role);
    console.log(termsChecked);

    let results=document.getElementById("results");
    let success=document.createElement("p");
    success.innerHTML="Success";
    let p=document.createElement("p");
    p.innerHTML="Name: "+pName+" Birthday: "+bdate+" Role:"+role;
    console.log(p);
    results.append(success);
    results.append(p);

    setTimeout(()=>{
      success.remove();
    },2000);
  };
 
  
  document.getElementById("form-person").onsubmit = submitPerson;
  