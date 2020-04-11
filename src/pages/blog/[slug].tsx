import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import DefaultTemplate from '../../templates/DefaultTemplate/DefaultTemplate'
import { loadBlogList, loadBlog, BlogType } from '../../modules/blog'
import Container from '../../elements/container/Container'
import Markdown from '../../elements/markdown/Markdown'
import BlogHeader from '../../components/blog/BlogHeader'
import Margin from '../../elements/margin/Margin'

export const config = { amp: true }

type Props = {
  blog: BlogType
}

const Page: NextPage<Props> = ({ blog }) => {
  return (
    <>
      <Head>
        <title>{blog.data.title} - hbsnow.dev</title>
        <meta name="description" content={blog.data.description} />
      </Head>
      <DefaultTemplate>
        <Container>
          <Margin bottom={6}>
            <article>
              <BlogHeader post={blog.data} />
              <Markdown source={blog.content} />
            </article>
          </Margin>
        </Container>
      </DefaultTemplate>
    </>
  )
}

export const getStaticPaths = (): {
  fallback: boolean
  paths: string[]
} => {
  const blogList = loadBlogList()

  return {
    fallback: false,
    paths: blogList.map((blog) => `/blog/${blog.slug}`),
  }
}

export const getStaticProps = async ({ params }): Promise<{ props: Props }> => {
  const blog = await loadBlog(params.slug)

  return { props: { blog } }
}

export default Page
