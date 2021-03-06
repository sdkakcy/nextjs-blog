import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

export default function Home() {
    const { loading, data } = getSortedPostsData();

    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Merhabalar ben Sıddık.</p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                {loading ? <ReactPlaceholder showLoadingAnimation={true} type='text' ready={false} rows={10} /> : (<ul className={utilStyles.list}>
                    {data.map(({ id, name, slug, created_at }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${slug}`}>
                                <a>{name}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={created_at} />
                            </small>
                        </li>
                    ))}
                </ul>)}
            </section>
        </Layout>
    )
}

// export async function getServerSideProps() {
//     const allPostsData = await getSortedPostsData()

//     return {
//         props: {
//             allPostsData
//         }
//     }
// }