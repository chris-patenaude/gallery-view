import React, {FC} from 'react';
import styled from 'styled-components'
import ImagePane from './ImagePane'

interface IProps {
  collection:ImageMeta[]
}

const ScrollView:FC<IProps> = ({collection}) => {
  return (
    <Wrapper>
      <Collection>
        {collection.map(metaData => 
          <ImagePane dimension={{height:100}} imgSrc={metaData.smallUrl}/>
        )}
      </Collection>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    height: 100%;
    min-width: 200px;
    background: rgba(0,0,0,0.6);
`
const Collection = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default ScrollView;
