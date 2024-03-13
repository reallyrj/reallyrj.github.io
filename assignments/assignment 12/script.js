const getHouses = async () => {
    const url = "https://portiaportia.github.io/json/house-plans.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch(error) {
        console.log(error);
    }
};

const showHouses = async () => {
    let houses = await getHouses();
    let housesSection = document.getElementById("houses-section");

    houses.forEach((house) => {
        housesSection.append(getHouseItem(house));
    });
};

const getHouseItem = (house) => {
    let mainSection = document.createElement("section");
    mainSection.classList.add("main-section");

    let infoSection = document.createElement("section");
    infoSection.classList.add("info-section");

    let h3 = document.createElement("h3");
    h3.innerText = house.name;

    let img = document.createElement("img");
    img.src = `images/${house.main_image}`;

    infoSection.append(h3, img);

    let ul = document.createElement("ul");
    ul.append(getLi(`Size: ${house.size}`));
    ul.append(getLi(`Bedrooms: ${house.bedrooms}`));
    ul.append(getLi(`Bathrooms: ${house.bathrooms}`));
    
    house.features.forEach((feature) => {
        ul.append(getLi(`Feature: ${feature}`));
    });

    infoSection.append(ul);

    mainSection.append(infoSection);

    let floorPlansSection = document.createElement("section");
    floorPlansSection.classList.add("floor-plans-section");

    house.floor_plans.forEach((plan) => {
        let planSection = document.createElement("section");

        let planName = document.createElement("h4");
        planName.textContent = plan.name;
        planSection.append(planName);

        let planImg = document.createElement("img");
        planImg.src = `images/${plan.image}`;
        
        planSection.append(planImg);
        floorPlansSection.append(planSection);
    });

    mainSection.append(floorPlansSection);

    return mainSection;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
};

const getFeatures = (features) => {
    const section = document.createElement("section");
    section.classList.add("features");

    features.forEach((feature) => {
        const p = document.createElement("p");
        p.textContent = feature;
        section.append(p);
    });

    return section;
};

const getFloorPlans = (floorPlans) => {
    const floorPlansSection = document.createElement("section");

    floorPlans.forEach((plan) => {
        const planSection = document.createElement("section");

        let planName = document.createElement("h4");
        planName.textContent = plan.name;
        planSection.append(planName);

        let planImg = document.createElement("img");
        planSection.append(planImg);
        planImg.src = `images/${plan.image}`;

        floorPlansSection.append(planSection);
    });

    return floorPlansSection;
};

window.onload = () => showHouses();