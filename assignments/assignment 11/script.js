class Tree{
    constructor(title,type,growthrate,lifespan,habitat,description,pic){
        this.title=title;
        this.type=type;
        this.growthrate=growthrate;
        this.lifespan=lifespan;
        this.habitat=habitat;
        this.description=description;
        this.pic=pic;
    }
    get section(){
    const section=document.createElement("section");
    section.classList.add('tree');  
    
    
    
    const h3=document.createElement("h3");
    h3.classList.add("center");
    h3.innerHTML=this.title;
    section.append(h3);

    const columns = document.createElement("section");
    columns.classList.add("columns");
    section.append(columns); 
    
    const imageSection=document.createElement("section");
    columns.append(imageSection);
    const image=document.createElement("img");
    image.src="images/"+this.pic;
    imageSection.append(image);

    return section;
    }
    get expandedsection(){
    const expandedsection=document.createElement("section");
    this.section.classList.add('tree');
    
    const eh3=document.createElement("h3");
    eh3.innerHTML=this.title;
    
    const type=document.createElement("p");
    type.innerHTML=("Type:",this.type);

    const growthrate=document.createElement("p");
    growthrate.innerHTML=("Growth Rate:",this.growthrate);

    const height=document.createElement("p");
    height.innerHTML=("Height:",this.height);

    const lifespan=document.createElement("p");
    lifespan.innerHTML=("Lifespan:",this.lifespan);

    const habitat=document.createElement("p");
    habitat.innerHTML=("Habitat:",this.habitat);

    const description=document.createElement("p");
    description.innerHTML=(this.description);

    const ecolumns=document.createElement("section");
    ecolumns.classList.add("colums");
    expandedsection.append(ecolumns);

    const eimageSection=document.createElement("section");
    ecolumns.append(eimageSection);
    const eimage=document.createElement("img");
    eimage.src="images/"+this.pic;
    eimageSection.append(image);

    return expandedsection;

    }

}


const trees=[];
trees.push(new Tree("Bald Cypress","Deciduous","Fast","600 Years","wet,swampy soils","Bald cypresses are slow-growing, long-lived trees that regularly reach up to 600 years in age. Bald cypress trees are valued for the rot-resistant heartwood of mature trees, so they have been widely used to make fence posts, doors, flooring, caskets, cabinetry, boats, and more.","cypress.webp"));
trees.push(new Tree("Eastern Redbud","Deciduous","Fast","60 years","Forest understory","Eastern redbud is a small deciduous tree. Trees typically grow 20 feet in height with a similar spread and have gracefully ascending branches and a rounded shape. Eastern redbud leaves are alternate, simple, broadly heart-shaped and 3 to 5 inches high and wide. Leaves emerge reddish, turning green as they expand.","redbud.webp"));
trees.push(new Tree("Loblolly Pine","Evergreen","Very Fast","200 years","soils with poor surface drainage, a deep surface layer, and a firm subsoil.","The principal commercial southern pine, a large, resinous, and fragrant tree with rounded crown of spreading branches. Loblolly pine is a 60 ft. tree which can reach 150 ft. It loses its lower branches with age, leaving an open, rounded crown.","pine.avif"));
trees.push(new Tree("Southern Magnolia","Evergreen","Slow","80-120 years","Southern magnolia grows best on rich, loamy, moist soils along streams and near swamps in the Coastal Plain","a large, broadleaf evergreen tree that is noted for its attractive glossy dark green leaves and its large, extremely fragrant flowers.","magnolia.jpeg"));


window.onload=()=>{
trees.forEach((tree)=>{
    document.getElementById("tree-list").append(tree.section);
});
};

document.getElementsByClassName("tree").onclick=()=>{
    console.log("clicked");
    document.getElementById("tree-list").append(tree.expandedsection);
};