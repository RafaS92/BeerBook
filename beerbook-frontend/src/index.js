let divCard = document.createElement("div");
divCard.setAttribute("class", "row row-cols-1 row-cols-md-4");
document.body.append(divCard);

fetch("http://localhost:3000/beers")
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    results.forEach((result) => {
      let newDiv = document.createElement("div");
      newDiv.setAttribute("class", "col mb-4");
      divCard.append(newDiv);

      let cardDiv = document.createElement("div");
      cardDiv.setAttribute("class", "card");
      newDiv.append(cardDiv);

      let image = document.createElement("img");
      image.setAttribute("class", "card-img-top");
      image.src = result.image;
      cardDiv.append(image);

      let bodyDiv = document.createElement("div");
      bodyDiv.setAttribute("class", "card-body");
      cardDiv.append(bodyDiv);

      let header = document.createElement("h5");
      header.setAttribute("class", "card-title");
      header.append(result.name);
      bodyDiv.append(header);

      let origin = document.createElement("h4");
      origin.setAttribute("class", "card-title");
      origin.append(`Origin: ${result.origin}`);
      bodyDiv.append(origin);

      let description = document.createElement("p");
      description.setAttribute("class", "card-text");
      description.append(result.description);
      bodyDiv.append(description);

      let iconDiv = document.createElement("div");
      iconDiv.setAttribute("class", "row row-cols-1 row-cols-md-2");
      bodyDiv.append(iconDiv);

      let likeBtn = document.createElement("i");
      likeBtn.setAttribute("class", "fas fa-heart");
      likeBtn.append(result.likes);
      iconDiv.append(likeBtn);

      let dislikeIcon = document.createElement("i");
      dislikeIcon.setAttribute("class", "fas fa-heart-broken");
      dislikeIcon.append(result.unlikes);
      iconDiv.append(dislikeIcon);
    });
  });
