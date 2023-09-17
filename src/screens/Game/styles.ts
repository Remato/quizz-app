import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native'

export const Loading = styled(ActivityIndicator).attrs({
  color: '#fff',
  size: 'large',
})``

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
`

export const Title = styled.Text`
  text-align: center;
  color: #fff;
`

export const QuestionWrapper = styled.View`
  flex-direction: row;
  align-self: center;
  margin-top: 32px;
`

export const QuestionText = styled.Text`
  font-size: 24px;
  color: #fff;
`

export const HighlightText = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #fff;
`

export const AnswerWrapper = styled.View`
  flex-direction: row;
  align-self: center;
`

export const AnswerTextWrapper = styled.View`
  flex-direction: row;
  align-self: center;
  margin-vertical: 32px;
  align-items: center;
`

export const AnswerText = styled.Text`
  text-decoration: dotted;
  text-align: center;
  font-size: 20px;
  color: #fff;
  text-decoration-color: #fff;
`
