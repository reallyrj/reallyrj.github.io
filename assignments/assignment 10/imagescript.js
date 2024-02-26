let images = [
    { src: "images/mountain-lake.jpg", caption: '<a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a> on Freepik' },
    { src: "images/golden.jpg", caption: '<a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' },
    { src: "images/garden.jpg", caption: '<a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' },
    { src: "images/small-house.jpg", caption: '<a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' },
    { src: "images/snow.jpg", caption: '<a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik' }
];

let picIndex = 0;
function displayPics() {
    if (picIndex < images.length) {
        console.log(images[picIndex]);
        document.getElementById("pics").innerHTML += `<div><img src="${images[picIndex].src}" alt="Image"><div>${images[picIndex].caption}</div></div>`;
        picIndex++;
    }
}
const picId = setInterval(displayPics, 1000);
