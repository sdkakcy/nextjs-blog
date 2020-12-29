import Head from 'next/head'
import Link from 'next/link'
import Date from '../../components/date'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.scss'
import { getPostData, getSortedPostsData } from '../../lib/posts'

export default function Post({ data }) {
    const { loading, data: posts } = getSortedPostsData();

    return (
        <Layout>
            <Head>
                <title>{data.name}</title>
            </Head>
            <div className="grid md:grid-cols-12 gap-4">
                <div className="col-span-8">
                    <article>
                        <h1 className={utilStyles.headingXl}>{data.name}</h1>
                        <div className={utilStyles.lightText}>
                            <Date dateString={data.created_at} />
                        </div>
                        <div className="mt-5" dangerouslySetInnerHTML={{ __html: data.content }} />
                    </article>
                </div>
                <div className="col-span-4 prose mt-5 md:mt-0">
                    <h2>Bunları Okudunuz mu?</h2>
                    {loading ? ("Yükleniyor...") : (<ul>
                        {posts.map(({ id, name, slug, created_at }) => (
                            slug !== data.slug ? (
                                <li key={id}>
                                    <Link href={`/posts/${slug}`}>
                                        <a>{name}</a>
                                    </Link>
                                    <br />
                                    <small className="text-gray-400">
                                        <Date dateString={created_at} />
                                    </small>
                                </li>
                            ) : ('')
                        ))}
                    </ul>)}
                </div>
            </div>
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