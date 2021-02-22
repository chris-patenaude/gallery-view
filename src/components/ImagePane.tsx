import React, {FC} from 'react';
import styled from 'styled-components'

interface IProps {
    imgSrc:string
    dimension?:Dimension
}

const ImagePain:FC<IProps> = ({imgSrc, dimension}) => {
  return (
    <Wrapper dimension={dimension} >
        <StyledImage src={imgSrc}/>
    </Wrapper>
  );
}

const Wrapper = styled.div<{dimension?:Dimension}>`
    height: ${props => `${props.dimension?.height}px` || null};
    min-width: ${props => `${props.dimension?.width}px` || null};
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledImage = styled.img`
    max-height: calc(100% - 20px);
    max-width: calc(100% - 20px);
`

export default ImagePain;
