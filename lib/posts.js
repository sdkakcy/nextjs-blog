import useSWR from 'swr'
import axios from '../config/axios'

const fetcher = url => axios.get(url).then(res => res.data)

export function getSortedPostsData() {
    const { data, error } = useSWR('api/post', fetcher)
    const loading = !data && !error;

    return {
        loading,
        data
    }
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