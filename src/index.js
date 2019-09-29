import React from 'react'
import { Helmet } from 'react-helmet'
import get from 'lodash.get'
import Layout from './layout'

const Page = props => {
  let title = 'Dev Arcade'
  const postTitle = get(props.data, 'post.title')
  const description = get(props.data, 'post.excerpt')

  if (postTitle) {
    title = `${postTitle} | ${title}`
  }

  return (
    <>
      <Helmet>
        <link
          rel='icon'
          type='image/png'
          href='https://dev-arcade.netlify.com/favicon.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          href='https://dev-arcade.netlify.com/icon.png'
        />
        <link
          rel='canonical'
          href={props.location.href}
        />
        <meta name='twitter:site' content='@joshbuchea' />
        <meta name='og:image' content='https://dev-arcade.netlify.com/icon.png' />
        <title>{title}</title>
        <meta name='og:title' content={title} />
        <meta name='og:description' content={description} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:creator' content='Josh Buchea' />
        <meta name='twitter:card' content='summary' />
      </Helmet>
      <Layout {...props}>
        {props.children}
      </Layout>
    </>
  )
}

export const wrapPageElement = ({ element, props }) =>
  <Page {...props}>
    {element}
  </Page>
