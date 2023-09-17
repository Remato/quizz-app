import styled from 'styled-components/native'
import { BUTTON_VARIANT } from '../../utils/enums'

type Props = {
  variant: BUTTON_VARIANT
}

const selectButtonColor = ({ variant }: Props) => {
  if (variant === BUTTON_VARIANT.NORMAL) return '#5494a8'
  else return '#fafafa'
}

const selectTextColor = ({ variant }: Props) => {
  if (variant === BUTTON_VARIANT.NORMAL) return '#fafafa'
  else if (variant === BUTTON_VARIANT.CORRECT) return '#00ebec'
  else if (variant === BUTTON_VARIANT.ERROR) return '#ff8686'
}

export const Button = styled.TouchableOpacity<Props>`
  background-color: ${(props) => selectButtonColor(props)};
  padding: 16px;
  border-radius: 16px;
  margin: 16px;
`

export const Text = styled.Text<Props>`
  color: ${(props) => selectTextColor(props)};
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
`
