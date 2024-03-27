AFRAME.registerComponent("question-panel", {
  init: function () {
    this.el.addEventListener("click", (evt) => {
      this.el.emit("answer");
    });
  },
});
