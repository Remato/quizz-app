import { TouchableOpacityProps } from 'react-native'
import { Wrapper, Text } from './styles'

type Props = {
  text?: string
} & TouchableOpacityProps

function Answer({ text = '', ...rest }: Props) {
  return (
    <Wrapper {...rest}>
      <Text>{text}</Text>
    </Wrapper>
  )
}
export default Answer
