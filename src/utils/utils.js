const randomCodeGen = () => {
  const randomChars = 'QWERTYUIOPASDFGHJKLZXCVBNM';
  let result = '';
  for (let i = 0; i < 7; i++) {
    result += randomChars.charAt(
      Math.floor(Math.random() * randomChars.length)
    );
  }
  return result;
};

const randomNumberGen = (noOfRounds) => {
  let sequence = [];
  let availableNumbers = [];
  for (let i = 1; i < 18; i++) {
    availableNumbers.push(i);
  }
  for (let i = 0; i < noOfRounds; i++) {
    let number = Math.floor(Math.random() * availableNumbers.length);
    sequence.push(availableNumbers[number]);
    availableNumbers.splice(number, 1);
  }
  return sequence;
};

const hasDuplicates = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i != j) {
        return true;
      }
    }
  }
  return false;
};

const shuffle = (array) => {
  const shuffled = [];
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const number = Math.floor(Math.random() * array.length);
    shuffled.push(array[number]);
    array.splice(number, 1);
  }
  return shuffled;
};

const getVotes = (array) => {
  let votes = 0;
  array.forEach((obj) => {
    votes += obj.roundScore;
  });
  return votes;
};

module.exports = {
  randomCodeGen,
  randomNumberGen,
  hasDuplicates,
  shuffle,
  getVotes,
};
