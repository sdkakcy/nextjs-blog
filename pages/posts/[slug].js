import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'
import { getPostData } from '../../lib/posts'

export default function Post({ data }) {
    return (
        <Layout>
            <Head>
                <title>{data.name}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{data.name}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={data.created_at} />
                </div>
                <div className="mt-5" dangerouslySetInnerHTML={{ __html: data.content }} />
            </article>
        </Layout>
    )
}

export async function getServerSideProps({ params }) {
    const data = await getPostData(params.slug)

    if (data.status === 404) {
        return {
            notFound: true,
        }
    }

    return { props: { data } }
}