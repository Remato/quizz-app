import { Answer } from '../../components'
import {
  Title,
  Wrapper,
  AnswerText,
  QuestionText,
  HighlightText,
  AnswerWrapper,
} from './styles'

type Props = {
  exercises: Exercise[]
}

function Game({ exercises }: Props) {
  return (
    <Wrapper>
      <Title>Fill in the missing word</Title>

      <AnswerWrapper>
        <Answer text="dsinda" />
        <Answer text="dsinda" />
      </AnswerWrapper>
      <AnswerWrapper>
        <Answer text="dsinda" />
        <Answer text="dsinda" />
      </AnswerWrapper>
    </Wrapper>
  )
}

export default Game
