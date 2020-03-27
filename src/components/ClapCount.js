import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCount = styled.span`
  color: white;
  border-radius: 50%;
  backface-visibility: hidden;
  ${textStyles}

  ${({theme: {secondaryColor, size}}) => {
    const threeQuarters = `${size * 3 / 4}px`
    return css`

      height: ${threeQuarters};
      width: ${threeQuarters};
      line-height: ${threeQuarters};
      top: -${threeQuarters};
      left: ${size / 8}px;
      background: ${secondaryColor};
    `
  }}
`

const ClapCountWrapper = React.forwardRef((props, ref) => (
  <ClapCount
    ref={ref}
    {...props}
  />
));

export default ClapCountWrapper;