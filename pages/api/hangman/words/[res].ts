import { NextApiRequest, NextApiResponse } from 'next';

import { data } from '../../../../hangman/data/words';

const getThemeWordRes = (req: NextApiRequest, res: NextApiResponse) => {
  const { query, method } = req;

  if (method === 'GET') {
    const themeObj = data.themes.find((element) => element.name === decodeURI(query.res as string));

    if (themeObj) {
      const random = Math.round(Math.random() * (themeObj.words.length - 1));

      res.status(200).json(themeObj.words[random]?.toLowerCase());
    }
  }
};

export default getThemeWordRes;