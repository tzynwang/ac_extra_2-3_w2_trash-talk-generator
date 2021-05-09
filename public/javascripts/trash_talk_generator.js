const task = {
  engineer: {
    title: '工程師',
    task: ['加個按鈕', '加新功能', '切個版', '改一點 code']
  },
  designer: {
    title: '設計師',
    task: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計']
  },
  entrepreneur: {
    title: '創業家',
    task: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function generateTrashTalk (jobTitle) {
  switch (jobTitle) {
    case undefined:
      return '請選擇一位發送幹話的對象'
    default:
      return `身為一個${task[jobTitle].title}，${generateSentence(jobTitle)}`
  }
}

function generateSentence (jobTitle) {
  const taskIndex = ~~(Math.random() * task[jobTitle].task.length)
  const phraseIndex = ~~(Math.random() * phrase.length)
  return `${task[jobTitle].task[taskIndex]}，${phrase[phraseIndex]}吧！`
}

module.exports = generateTrashTalk
