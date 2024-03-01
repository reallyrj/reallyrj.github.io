class Tree{
    constructor(title,type,growthrate,height,lifespan,habitat,description,pic){
        this.title=title;
        this.type=type;
        this.growthrate=growthrate;
        this.height=height;
        this.lifespan=lifespan;
        this.habitat=habitat;
        this.description=description;
        this.pic=pic;
    }
    get section(){
    const section=document.createElement("section");
    section.classList.add('tree');  
    
    const columns = document.createElement("section");
    columns.classList.add("columns");
    section.append(columns); 
    
    const h3=document.createElement("h3");
    h3.classList.add("center");
    h3.innerHTML=this.title;
    columns.append(h3);

   
    const image=document.createElement("img");
    image.src="images/"+this.pic;
    columns.append(image);

    return section;
    }
    get expandedsection(){
    const expandedsection=document.createElement("section");
    expandedsection.classList.add('tree');

    
    const eh3=document.createElement("h3");
    eh3.innerHTML=this.title;
    expandedsection.append(eh3);
    
    const type=document.createElement("p");
    type.innerHTML=("Type: "+this.type);
    expandedsection.append(type);

    const growthrate=document.createElement("p");
    growthrate.innerHTML=("Growth Rate: "+this.growthrate);
    expandedsection.append(growthrate);

    const height=document.createElement("p");
    height.innerHTML=("Height: "+ this.height);
    expandedsection.append(height);

    const lifespan=document.createElement("p");
    lifespan.innerHTML=("Lifespan: "+this.lifespan);
    expandedsection.append(lifespan);

    const habitat=document.createElement("p");
    habitat.innerHTML=("Habitat: "+this.habitat);
    expandedsection.append(habitat);

    const description=document.createElement("p");
    description.innerHTML=(this.description);
    expandedsection.append(description);

    const ecolumns=document.createElement("section");
    ecolumns.classList.add("columns");
    expandedsection.append(ecolumns);

    const eimage=document.createElement("img");
    eimage.src="images/"+this.pic;
    ecolumns.append(eimage);

    return expandedsection;

    }

}


const trees=[];
trees.push(new Tree("Bald Cypress","Deciduous","Fast","120 ft","600 Years","wet,swampy soils","Bald cypresses are slow-growing, long-lived trees that regularly reach up to 600 years in age. Bald cypress trees are valued for the rot-resistant heartwood of mature trees, so they have been widely used to make fence posts, doors, flooring, caskets, cabinetry, boats, and more.","cypress.webp"));
trees.push(new Tree("Eastern Redbud","Deciduous","Fast","20 ft","60 years","Forest understory","Eastern redbud is a small deciduous tree. Trees typically grow 20 feet in height with a similar spread and have gracefully ascending branches and a rounded shape. Eastern redbud leaves are alternate, simple, broadly heart-shaped and 3 to 5 inches high and wide. Leaves emerge reddish, turning green as they expand.","redbud.webp"));
trees.push(new Tree("Loblolly Pine","Evergreen","Very Fast","60-90 ft","200 years","soils with poor surface drainage, a deep surface layer, and a firm subsoil.","The principal commercial southern pine, a large, resinous, and fragrant tree with rounded crown of spreading branches. Loblolly pine is a 60 ft. tree which can reach 150 ft. It loses its lower branches with age, leaving an open, rounded crown.","pine.avif"));
trees.push(new Tree("Southern Magnolia","Evergreen","Slow","60-80 ft","80-120 years","Southern magnolia grows best on rich, loamy, moist soils along streams and near swamps in the Coastal Plain","a large, broadleaf evergreen tree that is noted for its attractive glossy dark green leaves and its large, extremely fragrant flowers.","magnolia.jpeg"));



window.onload=()=>{

trees.forEach((tree)=>{
    const treeSection=tree.section;
    const etreeSection=tree.expandedsection;
    const modal=document.getElementById("id01");
    const modalcontent=document.getElementById("modal-content");
    document.getElementById("tree-list").append(treeSection);
    treeSection.onclick=()=>{
    modalcontent.innerHTML="";
    modalcontent.append(etreeSection);
    modal.style.display="block";
    };
    const closeButton = document.querySelector("#id01 .w3-button");
    closeButton.onclick = () => {
        modal.style.display = "none";
    };
    
});
};  

