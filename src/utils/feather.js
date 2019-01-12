/* eslint-disable */
import React from 'react';
import feather from 'feather-icons';

export default (name, measureArray, styles) => {
  const featherString = feather.icons[name].toSvg({
    class: styles,
    width: measureArray[0],
    height: measureArray[1]
  });
  return <div dangerouslySetInnerHTML={{ __html: featherString }} />;
};
