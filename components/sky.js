AFRAME.registerComponent("background-image", {
  init: function () {
    const NUM_PLACES = 2;
    const places = ["eiffel", "fuji"];

    // randomly sort places
    let shuffled_places = places
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    // pick first N places in randomly shuffled array
    const selected_places = shuffled_places.slice(0, NUM_PLACES);

    const images = [];
    // for each place, show all 3 distances in order of decreasing distance
    for (place of selected_places) {
      for (distance of ["long", "med", "close"]) {
        const path = `./images/${place}_${distance}.jpg`;
        // SET SKY BACKGROUND TO IMAGE FROM RANDOMLY SELECTED PATH
        images.push(path);
      }
    }

    // listen for click on question panel component
    let index = 0;
    document.querySelector("a-sky").setAttribute("src", images[0]);

    // change background image on question panel click event
    // TODO: make this button spam proof
    this.el.sceneEl.addEventListener("answer", () => {
      index++;
      if (index < images.length)
        document.querySelector("a-sky").setAttribute("src", images[index]);
    });
  },
});
