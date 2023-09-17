import { Wrapper, Text } from './styles'

type Props = {
  text: string
}

function Answer({ text }: Props) {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  )
}
export default Answer
