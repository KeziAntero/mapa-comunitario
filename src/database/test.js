const Database = require('./db');
const saveCommunity = require('./saveCommunity');

Database.then(async db => {
   
    // inserir dados na tabela
    await saveCommunity(db, {
        lat: "-27.222633",
        lng: "-49.6555874",
        name: "Lar das meninos",
        about: "lorem",
        year: "2010",
        images: [
            "https://images.unsplash.com/photo-1595967783875-c371f35d8049?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

            "https://images.unsplash.com/photo-1601564267677-a36d03ec2be5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        site: "djfhdsk",
        whatsapp: "98989897898",
        instagram: "jghfgd",
        facebook: "ghjhgdgfdg",
        twitter: "hytyuk",
        open_on_weekends: "0"
    })

    //consultar dados da tabela
    const selectedCommunitys = await db.all("SELECT * FROM communitys")
    console.log(selectedCommunitys)

    // // consultar somente 1 veiculo, pelo id
    const community = await db.all('SELECT * FROM communitys WHERE id = "2"')
    console.log(community)

    // // deletar dado da tabela
    //console.log(await db.run("DELETE FROM communitys WHERE id = '4'"))
    //console.log(await db.run("DELETE FROM communitys WHERE id = '5'"))

})