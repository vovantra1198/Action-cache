import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log("Connected to the room!");
  },

  disconnected() {
  },

  received(data) {
    console.log("Recieving:")
    console.log(data.content)
    $('#msg').append('<div class="message"> '+ data.size+ " "  + data.content + '</div>')
  }
});
