const arvish = require('arvish');
const encodeurl = require('encodeurl');

(async function () {
  const data = await arvish.fetch('http://ac.search.naver.com/nx/ac', {
    query: {
      st: 100,
      r_format: 'json',
      r_enc: 'UTF-8',
      r_unicode: 0,
      t_koreng: 1,
      ans: 1,
      run: 2,
      rev: 4,
      q: arvish.input
    },
    maxAge: 86400000,
    transform: (resp) => {
      return resp.items[0].map((item) => {
        const word = item[0];
        const encodedUrl = encodeurl(word.split(' ').join('%20'));
        return {
          title: word,
          arg: encodedUrl,
          autocomplete: item[0],
          quicklookurl: `http://search.naver.com/search.naver?ie=utf8&sm=stp_hty&where=se&query=${encodedUrl}`
        };
      });
    }
  });

  arvish.output(data);
})();