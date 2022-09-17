import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const Home: NextPage = () => {
  const [input, setInput] = useState<string>('');
  const inputRef = useRef<any>();

  useEffect(()=>{
    inputRef.current.focus()
  },[])

  return (
    <div className='dark'>
      <Head>
        <title>Markdown Preview</title>
        <meta name="description" content="The Markdown Preview" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='min-h-screen p-4 bg-slate-900'>
        <div className='min-h-screen grid grid-cols-2 border-4 border-gray-700 rounded-lg'>
          <textarea 
            autoFocus
            className='p-4 bg-slate-900 text-white outline-none border-r-2 border-gray-700'
            value={input}
            ref={inputRef}
            onChange={(e) => setInput(e.target.value)}
          />
          <ReactMarkdown className='prose dark:prose-invert p-4'>
            {input}
          </ReactMarkdown>
        </div>
      </div>
      
    </div>
  )
}

export default Home
