// 2022.07.21

const detectCapitalUse = (word) => {
  let num = 0;
  let str = word.slice(1);
  for (let i = 0; i < str.length; i++) {
    if (str[i] <= 'Z') num++;
  }

  return (num === str.length && word[0] <= 'Z') || num === 0;
};
