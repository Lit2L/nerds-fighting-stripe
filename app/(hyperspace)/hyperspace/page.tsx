import Head from 'next/head'
import Link from 'next/link'

export default function Hyperspace() {
  return (
    <>
      <Head>
        <title>Hyperspace Template</title>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1 user-scalable=no'
        />
        <link rel='stylesheet' href='/assets/css/main.css' />
        <noscript>
          <link rel='stylesheet' href='/assets/css/noscript.css' />
        </noscript>
      </Head>
      <body className='is-preload'>
        {/* Sidebar */}
        <section id='sidebar'>
          <div className='inner'>
            <nav>
              <Link href='#intro'>Welcome</Link>
            </nav>
          </div>
        </section>
        {/* Wrapper */}
        <div id='wrapper'>
          <section id='intro' className='wrapper style1 fullsreen fade-up'>
            <div className='inner'>
              <h1>Hyperspace</h1>
              <p>
                Just another fine responsive site template designed by{' '}
                <a href='http://html5up.net'>HTML5 UP</a>
              </p>
            </div>
          </section>
        </div>
        {/* Intro Section */}

        {/* Section One */}

        {/* Section Two */}

        {/* Section Three */}

        {/* Section Four */}

        {/* Footer */}
      </body>
    </>
  )
}
