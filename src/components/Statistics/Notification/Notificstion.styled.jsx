import styled from "styled-components";

export const Message = styled.p`
display:  ${props => {
    return props.isOnline ? 'green' : 'red';
  }};`