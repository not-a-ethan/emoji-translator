const emojies = {
  '😂': 'lol',
  '❤️': '<3',
  '😄': ':)',
  '😒': ':(',
  '😀': ':D',
  '😛': ':^)',
  '😮': ':O',
  '😐': ':|',
  '😉': ';)',
  '😋': ';D',
  '😜': ';P',
  '😲': ';O',
  '😑': ':^|',
  '😗': ':*',
  '😭': ':^('
}

const emojicons = {
  'lol': '😂',
  '<3': '❤️',
  ':)': '😄',
  ':(': '😒',
  ':D': '😀',
  ':P': '😛',
  ':O': '😮',
  ':|': '😐',
  ';)': '😉',
  ';D': '😋',
  ';P': '😜',
  ';O': '😲',
  ';|': '😑',
  ':*': '😗',
  ':^)': '😛',
  ':^(': '😭',
  ':^|': '😑',
}

const mabeyEmojies = confirm('Would you like to convert emojies to text?')

let text;

if (mabeyEmojies) {
  alert('Not all emojies are support')

  const inputedEmojis = prompt('Please enter the emojies you want to translate.')

  text = inputedEmojis.split(' ')

  // find the if the emojies are in the emojies object
  for (let i = 0; i < text.length; i++) {
    if (emojies[text[i]]) {
      text[i] = emojies[text[i]]
    }
  }
  console.log(text)
} else {
  alert('Not all text is support')

  const inputedText = prompt('Please enter the text you want translated.')

  text = inputedText.split(' ')

  // find the if the emoticons are in the emojicons object
  for (let i = 0; i < text.length; i++) {
    if (emojicons[text[i]]) {
      text[i] = emojicons[text[i]]
    }
  }

  console.log(text)
}