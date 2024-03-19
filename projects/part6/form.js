const submitPerson = (e) => {
    e.preventDefault();
    document.getElementById("results").classList.remove("hidden");
  
    const form = document.getElementById("form-person");
    const pName = form.elements["person-name"].value;
    const role = form.elements["role"].value;
    const termsChecked = form.elements["terms"].checked;
  
    console.log(pName);
    console.log(role);
    console.log(termsChecked);
  };
 
  
  document.getElementById("form-person").onsubmit = submitPerson;
  