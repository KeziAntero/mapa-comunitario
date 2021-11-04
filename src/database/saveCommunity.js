function saveCommunity(db, community) {
  return db.run(`
    INSERT INTO communitys (
        lat,
        lng,
        name,
        about,
        images,
        whatsapp,
        site,
        instructions,
        year,
        open_on_weekends
    ) VALUES (
        "${community.lat}",
        "${community.lng}",
        "${community.name}",
        "${community.about}",
        "${community.images}",
        "${community.whatsapp}",
        "${community.site}",
        "${community.instructions}",
        "${community.year}",
        "${community.open_on_weekends}"
    );
`);
}

module.exports = saveCommunity;
