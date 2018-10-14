// @flow 
import getBaseURL from './getBaseURL';

export type Bogo = {
  text: string,
  textColor: string,
  backgroundColor: string,
}

export const imageURL: Bogo => string
= bogo => `${getBaseURL()}/bogo.png?text=${bogo.text}&bgcolor=${bogo.backgroundColor}&textcolor=${bogo.textColor}`