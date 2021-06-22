const arvish = require('arvish');

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
        return {
          title: item[0],
          arg: item[0]
        };
      });
    }
  });

  arvish.output(data);
})();