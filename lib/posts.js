import fs from 'fs'
import axios from '../config/axios'

export async function getSortedPostsData() {
    const res = await axios.get('api/post')
    const data = await res.data

    return data
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(slug) {
    try {
        const res = await axios.get(`api/post/${slug}`)
        const data = await res.data

        return data
    } catch (err) {
        return err.response
    }
}