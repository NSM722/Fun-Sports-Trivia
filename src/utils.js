import { nanoid } from 'nanoid';
import he from 'he';

// converts dataArr to an array of objects
function newApiData(dataArr) {
  const newData = dataArr.map(item => {
    return {
      id: nanoid(),
      ...item,
      choices: getMultipleChoices(item),
    }
  });
  return newData;
}

// spreads and sorts values of the properties `data.correct_answer`
// and data.incorrect_answers into a new array of multiple choices
function getMultipleChoices(data) {
  let answers = [data.correct_answer, ...data.incorrect_answers];
  let sortedAnswers = answers.sort();
  let choicesObj = sortedAnswers.map(answer => {
    return {
      choice_id: nanoid(),
      choice: answer,
      isSelected: false
    }
  })
  return choicesObj;
}

function decodeHtmlEntity(jsonData) {
  const decodedData = JSON.parse(jsonData, (key, value) => {
    if (typeof value === 'string') {
      return he.decode(value)
    }
    return value;
  })
  return decodedData;
}

export { newApiData, decodeHtmlEntity }