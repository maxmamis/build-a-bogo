// @flow

import React, { Component } from 'react';
import type { Bogo } from '../data/Bogo';
import { imageURL } from '../data/Bogo';

type Props = {
  bogo: Bogo,
}

const BogoImage: Props => React$Element<any>
= ({ bogo }) => (
  <img
    src={imageURL(bogo)}
    className="bogo-image"
  />
)

export default BogoImage;