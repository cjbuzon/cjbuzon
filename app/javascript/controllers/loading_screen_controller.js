import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["main", "start"];

  connect() {
    if (this.data.get("page") === "home") {
      setTimeout(() => {
        this.startTarget.classList.add("hidden"),

        this.mainTarget.classList.remove("hidden"),
        this.mainTarget.classList.add('show');
      }, 4000);
    } else {
      this.startTarget.classList.add("hidden"),
      this.mainTarget.classList.remove("hidden"),
      this.mainTarget.classList.add('show');
    }
  }
}
