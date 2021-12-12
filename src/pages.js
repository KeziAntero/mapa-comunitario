const Database = require("./database/db");
const saveCommunity = require("./database/saveCommunity");

module.exports = {
  index(req, res) {
    return res.render("index");
  },

  async community(req, res) {
    const id = req.query.id;

    try {
      const db = await Database;
      const results = await db.all(
        `SELECT * FROM communitys WHERE id = "${id}"`
      );
      const community = results[0];

      community.images = community.images.split(",");
      community.firstImage = community.images[0];

      if (community.open_on_weekends == "0") {
        community.open_on_weekends = false;
      } else {
        community.open_on_weekends = true;
      }

      return res.render("community", { community });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
  communitycriterion(req, res) {
    return res.render("community-criterion");
  },

  async communitys(req, res) {
    try {
      const db = await Database;
      const communitys = await db.all("SELECT * FROM communitys");
      return res.render("communitys", { communitys });
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },

  createCommunity(req, res) {
    return res.render("create-community");
  },

  async saveCommunity(req, res) {
    const fields = req.body;

    // validar se todos os campos estao preenchidos
    if (Object.values(fields).includes("")) {
      return res.send("Todos os campos devem ser preenchidos!");
    }
   

    try {
      //salvar um veículo
      const db = await Database;
      await saveCommunity(db, {
        lat: fields.lat,
        lng: fields.lng,
        name: fields.name,
        about: fields.about,
        year: fields.year,
        images: fields.images.toString(),
        site: fields.site,
        email: fields.email,
        instagram: fields.instagram,
        facebook: fields.facebook,
        twitter: fields.twitter,
        open_on_weekends: fields.open_on_weekends,
      });

      // redirecionamento
      return res.redirect("/communitys");
    } catch (error) {
      console.log(error);
      return res.send("Erro no banco de dados!");
    }
  },
};
