export const createRank = (cards) => {
  const rankOrder = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14,
  };

  return cards.sort((a, b) => rankOrder[a] - rankOrder[b]);
};

const cards = ['Jack', 8, 2, 2, 6, 'King', 5, 3, 'Queen', 'King', 'Queen'];
console.log(createRank(cards));
