function Deck(){
  var suits = ["Spades", "Hearts", "Clubs", "Diamonds", "s", "h", "c", "d"]
  this.cards = []
  this.shuffle = function shuffle() {
    var j, temp;
    for (var i = this.cards.length; i; i--) {
        j = Math.floor(Math.random() * i);
        temp = this.cards[i - 1];
        this.cards[i - 1] = this.cards[j];
        this.cards[j] = temp;
    }
  }
  this.reset = function(){
    this.cards = []
    for(var i=1; i<=13; i++){
      for(var j=0; j<4; j++){
        this.cards.push({
          img : suits[j+4] + i +".png",
          val : i,
          suit : suits[j]
        })
      }
    }
  }
  this.deal = function(){
    if (this.cards){
      return this.cards.pop()
    } else {
      return "No more cards left!"
    }
  }
}

function Player(name, deck){
  this.name = name
  this.hand = []
  this.take = function(){
    this.hand.push( deck.deal() )
  }
  this.discard = function(){
    this.hand = []
  }
}
