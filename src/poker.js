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
  const pairValues1 = addPairValues(cardPair1)
  const pairValues2 = addPairValues(cardPair2)

  return pairValues1 > pairValues2 ? cardPair1 : cardPair2
}

function addPairValues(cardPair) {
  let totalValueOfPair = 0

  for (let card of cardPair) {
    totalValueOfPair += CARD_VALUES[card]
  }

  return totalValueOfPair
}

// Extension criteria

function winningPairFromArray() {}

function winning3CardHand() {}

module.exports = {
  winningPair,
  winningPairFromArray,
  winning3CardHand
}
