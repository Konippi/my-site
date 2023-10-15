require("dotenv").config({ path: `.env.${import.meta.env.MODE}` });

module.exports = {
  ci: {
    collect: {
      // collect options here
    },
    assert: {
      // assert options here
    },
    upload: {
      // upload options here
    },
    server: {
      port: Number(process.env.PORT),
    },
    wizard: {
      // wizard options here
    },
  },
};
