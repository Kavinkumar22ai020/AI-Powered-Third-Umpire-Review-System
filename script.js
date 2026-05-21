function send(action) {
  fetch(`/control/${action}`);
}

function decision(type) {
  fetch(`/sequence/${type}`);
}
