const posts = {
    slug1: {
        title: "Deneme",
        date: "2020-12-22",
        content: "Lorem ipsum dolor sit amet"
    },
    slug2: {
        title: "Deneme2",
        date: "2020-12-21",
        content: "Lorem ipsum dolor sit amet"
    }
}

export default function handler(req, res) {
    const {
        query: { slug },
    } = req

    res.status(200).json({
        data: posts[slug]
    })
}