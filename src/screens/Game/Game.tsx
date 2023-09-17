import { useState } from 'react'
import { Answer } from '../../components'
import { formatString } from '../../utils/helpers'

import {
  Title,
  Loading,
  Wrapper,
  AnswerText,
  QuestionText,
  HighlightText,
  AnswerWrapper,
  QuestionWrapper,
  AnswerTextWrapper,
} from './styles'

type Props = {
  current: number
  loading: boolean
  exercises: Exercise[]
}

function Game({ current, exercises, loading }: Props) {
  const [option, setOption] = useState(' _____')
  const [showAnswer, setShowAnswer] = useState(false)

  const en = formatString(exercises[current]?.en, exercises[current]?.enIndex)
  const de = formatString(exercises[current]?.de, exercises[current]?.deIndex)
  const answers = exercises[current]?.answers

  const handleOption = (newOption: string) => {
    setOption(newOption)
    setShowAnswer(true)
  }

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Title>Fill in the missing word</Title>
          <QuestionWrapper>
            <QuestionText>{en?.left}</QuestionText>
            <HighlightText>{en?.center}</HighlightText>
            <QuestionText>{en?.right}</QuestionText>
          </QuestionWrapper>

          <AnswerTextWrapper>
            <AnswerText>{de?.left}</AnswerText>
            {showAnswer ? (
              <Answer text={option} />
            ) : (
              <HighlightText>{' _____'}</HighlightText>
            )}

            <AnswerText>{de?.right}</AnswerText>
          </AnswerTextWrapper>

          <AnswerWrapper>
            <Answer
              text={exercises[current]?.answers[0]}
              onPress={() => handleOption(answers[0])}
            />
            <Answer
              text={exercises[current]?.answers[1]}
              onPress={() => handleOption(answers[1])}
            />
          </AnswerWrapper>
          <AnswerWrapper>
            <Answer
              text={exercises[current]?.answers[2]}
              onPress={() => handleOption(answers[2])}
            />
            <Answer
              text={exercises[current]?.answers[3]}
              onPress={() => handleOption(answers[3])}
            />
          </AnswerWrapper>
        </>
      )}
    </Wrapper>
  )
}

export default Game
