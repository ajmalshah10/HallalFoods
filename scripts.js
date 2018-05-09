


var halalfoodsListItem = function(id, name, pictureUrl, cuisine, rating, phonenumber, address) {
  return `<div class="col-sm-6">
    <div class="card mb-4 box-shadow">
      <a href="halalfoods.html?id=${id}"><img class="card-img-top" src="${pictureUrl}"></a>
      <div class="card-body">
        <h2><a href="halalfoods.html?id=${id}">${name}</a></h2>
        <h4> ${phonenumber} </h4>
        <h5> ${address} </h5>
        <p class="card-text">${cuisine}</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
            <a href="halalfoods.html?id=${id}" class="btn btn-sm btn-outline-secondary">View details</a>
            <button type="button" class="btn btn-sm btn-outline-secondary">Add to favorites</button>
          </div>
          <small class="text-muted">${rating}</small>
        </div>
      </div>
    </div>
  </div>`;
}

$.getJSON( "https://api.airtable.com/v0/appelXvxcksedaLMj/Table%201?api_key=keyqw1QagTLJCEBx8", function( data ) {
  // console.log(data.records);
  var items = [];
  items.push(`<div class="row">`);
  $.each( data.records, function( index, val ) {
    console.log(val.fields)
    var id = val.id;
    var name = val.fields["Name"];
    var pictureUrl = val.fields["Pictures"] ? val.fields["Pictures"][0].url : '';
    var cuisine = val.fields["Cuisine"];
    var rating = val.fields["Rating"];
    var phonenumber = val.fields["Phone-number"];
    var address = val.fields["Address"];
    var itemHTML = halalfoodsListItem(id, name, pictureUrl, cuisine, rating, phonenumber, address);
    items.push(itemHTML);
  });
  items.push(`</div>`);

  $(".halal-foods-list" ).append(items.join(""));
});
