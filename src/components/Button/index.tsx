import { TouchableOpacityProps } from 'react-native'
import { BUTTON_VARIANT } from '../../utils/enums'
import { Button, Text } from './styles'

type Props = {
  text?: string
  variant: BUTTON_VARIANT
} & TouchableOpacityProps

function Buton({ variant = BUTTON_VARIANT.NORMAL, text = '', ...rest }: Props) {
  return (
    <Button variant={variant} {...rest}>
      <Text>{text}</Text>
    </Button>
  )
}
export default Buton
