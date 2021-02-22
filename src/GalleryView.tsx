import React from 'react';
import ScrollView from './components/ScrollView';
import {mockImageCollection} from './tests/mockToolBox'

function GalleryView() {
  return (
    <ScrollView collection={mockImageCollection(15)} />
  );
}

export default GalleryView;
