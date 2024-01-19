import { getAllCategories } from 'lib/api'
import Container from 'components/container'
import PostHeader from 'components/post-header'

const Category = ({ name }) => {
  return (
    <Container>
      <PostHeader title={name} subtitle='Blog Category' />
    </Container>
  )
}
export default Category

export async function getStaticPaths () {
  const allCats = await getAllCategories()
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false
  }
}

export async function getStaticProps (context) {
  const catSlug = context.params.slug

  const allCats = await getAllCategories()
  const cat = allCats.find(({ slug }) => slug === catSlug)

  return {
    props: {
      name: cat.name
    }
  }
}
