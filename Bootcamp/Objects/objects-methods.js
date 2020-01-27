restaurant = {
  name: 'grillers',
  guestCapacity: 75,
  guestCount: 0,

  checkAvailability: function(partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount

    return partySize <= seatsLeft
  },

  seatParty: function(partySize) {
    this.guestCount = this.guestCount + partySize
  },

  removeParty: function(partySize) {
    this.guestCount = this.guestCount - partySize
  }
}

restaurant.seatParty(75)
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(10))
restaurant.removeParty(70)
console.log(restaurant.checkAvailability(10))
