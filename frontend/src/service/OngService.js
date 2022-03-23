import api from "../utils/api";

export async function save(ong) {
    await api.post("/ongs/", {
        logourl: ong.logourl,
        sobre: ong.sobre,
        fburl: ong.fburl,
        instaurl: ong.instaurl,
        mapaurl: ong.mapaurl
    })
}

export async function getOngs() {
    return (await api.get('/ongs')).data
}

export async function deleteOng(id) {
    await api.delete(`/ongs/${id}`)
}

export async function updateOng(ong) {
    await api.put("/ongs/", {
        id: ong.id,
        logourl: ong.logourl,
        sobre: ong.sobre,
        fburl: ong.fburl,
        instaurl: ong.instaurl,
        mapaurl: ong.mapaurl
    })
}