import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["main", "start"];

  connect() {
    setTimeout(() => {
      this.startTarget.classList.add("hidden"),

      this.mainTarget.classList.remove("hidden"),
      this.mainTarget.classList.add('show');
    }, 3500);
  }
}
