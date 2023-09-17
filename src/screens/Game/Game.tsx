import { useState } from 'react'
import { Answer, Button } from '../../components'
import { formatString } from '../../utils/helpers'

import {
  Title,
  Loading,
  Wrapper,
  AnswerText,
  QuestionText,
  ButtonWrapper,
  HighlightText,
  AnswerWrapper,
  QuestionWrapper,
  AnswerTextWrapper,
} from './styles'
import { BUTTON_VARIANT } from '../../utils/enums'

type Props = {
  current: number
  loading: boolean
  exercises: Exercise[]
}

function Game({ current, exercises, loading }: Props) {
  const [option, setOption] = useState(' _____')
  const [showAnswer, setShowAnswer] = useState(false)
  const [showButton, setShowButton] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [buttonType, setButtonType] = useState<BUTTON_VARIANT>(
    BUTTON_VARIANT.NORMAL,
  )

  const en = formatString(exercises[current]?.en, exercises[current]?.enIndex)
  const de = formatString(exercises[current]?.de, exercises[current]?.deIndex)
  const answers = exercises[current]?.answers

  const handleOption = (newOption: string, index: number) => {
    setOption(newOption)
    setShowAnswer(true)
    setShowButton(true)
    setSelectedIndex(index)
  }

  const checkAnswer = () => {
    console.log(exercises[current].correct, selectedIndex)

    return exercises[current].correct === selectedIndex
      ? setButtonType(BUTTON_VARIANT.CORRECT)
      : setButtonType(BUTTON_VARIANT.ERROR)
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
              onPress={() => handleOption(answers[0], 0)}
            />
            <Answer
              text={exercises[current]?.answers[1]}
              onPress={() => handleOption(answers[1], 1)}
            />
          </AnswerWrapper>
          <AnswerWrapper>
            <Answer
              text={exercises[current]?.answers[2]}
              onPress={() => handleOption(answers[2], 2)}
            />
            <Answer
              text={exercises[current]?.answers[3]}
              onPress={() => handleOption(answers[3], 3)}
            />
          </AnswerWrapper>

          {showButton && (
            <ButtonWrapper variant={buttonType}>
              <Button
                text="Check Answer"
                variant={buttonType}
                onPress={checkAnswer}
              />
            </ButtonWrapper>
          )}
        </>
      )}
    </Wrapper>
  )
}

export default Game
