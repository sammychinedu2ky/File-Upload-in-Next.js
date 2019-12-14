import Head from 'next/head'
import Header from './header'

function Layout({ user, loading = false, children }) {
  
 
  
  return (
    <>
      <Head>
        <title>Video uploader</title>
      </Head>

      <Header  />

      <main>
        <div className="container">{children}</div>
      </main>
</>)
}

export default Layout
