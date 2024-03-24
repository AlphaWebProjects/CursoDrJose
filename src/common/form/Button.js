import Button from '@mui/material/Button';
import styled from 'styled-components';

export default function StyledButton({ variant='contained', width, height, fontsize, children, background, backgroundhover, fontColor, margintop, ...props }) {
  return (
    <StyledMuiButton variant={variant} width={width} height={height} fontsize={fontsize} background={background} backgroundhover={backgroundhover} fontColor={fontColor} margintop={margintop} {...props}>
      {children}
    </StyledMuiButton>
  );
}

const StyledMuiButton = styled(Button)`
  font-weight: 700 !important;
  font-size: ${(props) => props.fontsize || '18px !important'};
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || 'auto'};
  background-color: ${(props) => props.background || '#158A7A !important'};
  //background-color: ${(props) => props.background || '#158A7A !important'};
  color: ${(props) => props.fontColor || '#FFFFFF !important'};
  margin-top: ${(props) => props.margintop || '0'};

  &:hover {
    background-color: ${(props) => props.backgroundhover || '#158A7A !important'};
  }
`;
