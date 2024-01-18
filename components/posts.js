import styles from 'styles/posts.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Posts = ({ posts }) => {
  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <span>
              <figure>
                <Image
                  src={eyecatch.url}
                  alt=''
                  layout='fill'
                  objectFit='cover'
                  sizes='(min-width: 1152px) 576px, 50vm'
                  placeholder='blur'
                  blurDataURL={eyecatch.blurDataURL}
                />
              </figure>
              <h2>{title}</h2>
            </span>
          </Link>
        </article>
      ))}
    </div>
  )
}
export default Posts
