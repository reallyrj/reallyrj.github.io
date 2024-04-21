// Toggles the nav items to show/hide when the hamburger menu is clicked
const toggleHamburger = () => {
    document.getElementById("nav-items").classList.toggle("hide");
  };
  
  // Calls the toggleHamburger function when the hamburger menu is clicked
  window.onload = () => {
    document.getElementById("hamburger").onclick = toggleHamburger;
    showAlbums();
  };

const getAlbums = async () => {
const url="https://reallyrj.github.io/projects/Part5/json/more-info.json"
  try {
    const response = await fetch(url);
    return await response.json();
} catch(error) {
    console.log(error);
}
};

const showAlbums = async () => {
  let albums = await getAlbums();
  let albumsSection = document.getElementById("album-section");

  albums.forEach((album) => {
    albumsSection.append(getAlbumItem(album));
  });
};

const getAlbumItem = (album)=>{
  let mainSection = document.createElement("section");
  mainSection.classList.add("main-section");

  let infoSection = document.createElement("section");
  infoSection.classList.add("info-section");

  let h3=document.createElement("h3");
  h3.innerText=album.albumname;

  let img=document.createElement("img");
  img.src=`images/${album.albumimage}`;

  infoSection.append(h3,img);

  let ul=document.createElement("ul");
  ul.append(getLi(`Release Date:${album.releasedate}`));
  ul.append(getLi(`Producer:${album.producer}`));
  ul.append(getLi(`Certifications:${album.certifications}`));

  album.descriptions.forEach((description) => {
    ul.append(getLi(`Description: ${description}`));
});

infoSection.append(ul);
mainSection.append(infoSection);

return mainSection;
};

const getLi=(data)=>{
  const li=document.createElement("li");
  li.textContent=data;
  return li;
};

const getDescriptions = (descriptions) =>{
  const section=document.createElement("section");
  section.classList.add("descriptions");

  descriptions.forEach((description)=>{
    const p=document.createElement("p");
    p.textContent= description;
    section.append(p);
  });
return section;
};