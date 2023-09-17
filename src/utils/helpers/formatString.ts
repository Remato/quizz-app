export const formatString = (text?: string, highlightIndex?: number) => {
  if (text && highlightIndex) {
    const splited = text?.split(' ')

    let left = ''
    let right = ''

    for (let i = 0; i < splited.length; i++) {
      if (i < highlightIndex) left += `${splited[i]} `
      else if (i > highlightIndex) right += `${splited[i]} `
    }

    return {
      left,
      center: `${splited[highlightIndex]} `,
      right,
    }
  }
}
