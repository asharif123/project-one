var data = JSON.parse(localStorage.getItem("cityData"));
function tester() {
  for (var i = 0; i < 8; i++) {
    $(".card-container").append(`<div class="col-12 col-xl-3 col-md-5 p-5">
    <div class="card"  >
      <img src="${data.items[i].listing.images[0]}" class="card-img-top alt="..." />
      <div class="card-body">
        <h5 class="card-header">${data.items[i].listing.geo_location.full_address}</h5>
        <p class="card-text">
          ${"$" + data.items[i].listing.rates.monthly_rate + " monthly"}
        </p>
        <a href="#" class="btn btn-primary myButton" id="${i}">View Photos</a>
      </div>
    </div>
  </div>`);
  }
}
// Event-listener photo gallery buttons
$(".card-container").on("click", ".myButton", function (event) {
  var selectedProperty = this.id;
  viewPhotos(selectedProperty);
});

// Photo gallery for selected property
function viewPhotos(selectedProperty) {
  $(".card-container").empty();
  for (var i = 0; i < data.items[selectedProperty].listing.images.length; i++) {
    $(".card-container").append(`<div class="col-12 col-xl-3 col-md-5 p-5">
    <div class="card" >
      <img src="${data.items[selectedProperty].listing.images[i]}" class="card-img-top alt="..." />     
    </div>
  </div>`);
  }
}

tester();
