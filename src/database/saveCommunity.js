function saveCommunity(db, community) {
  return db.run(`
    INSERT INTO communitys (
        lat,
        lng,
        name,
        about,
        year,
        images,
        site,
        email,
        instagram,
        facebook,
        twitter,
        open_on_weekends
    ) VALUES (
        "${community.lat}",
        "${community.lng}",
        "${community.name}",
        "${community.about}",
        "${community.year}",
        "${community.images}",
        "${community.site}",
        "${community.email}",
        "${community.instagram}",
        "${community.facebook}",
        "${community.twitter}",
        "${community.open_on_weekends}"
    );
`);
}

module.exports = saveCommunity;
