const CARD_VALUES = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  10: 10,
  9: 9,
  8: 8,
  7: 7,
  6: 6,
  5: 5,
  4: 4,
  3: 3,
  2: 2
}

function winningPair(cardPair1, cardPair2) {
  const pairValue1 = addPairValues(cardPair1)
  const pairValue2 = addPairValues(cardPair2)
  let winningPair = []

  if (pairValue1 > pairValue2) {
    winningPair = cardPair1
  }
  if (pairValue2 > pairValue1) {
    winningPair = cardPair2
  }
  
  return winningPair
}

function addPairValues(cardPair) {
  let totalValueOfPair = 0

  if (cardPair[0] === cardPair[1]) {
    totalValueOfPair = CARD_VALUES[cardPair[0]] + CARD_VALUES[cardPair[0]]
  }

  return totalValueOfPair
}

// Extension criteria

function winningPairFromArray(allCards) {
}

function winning3CardHand() { }

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
