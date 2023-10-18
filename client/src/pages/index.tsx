import NewPatient from '@/components/NewPatient'
import NewRecord from '@/components/NewRecord'
import { useCommon } from '@/context/CommonContext'
import Head from 'next/head'
import React from 'react'

const Home = () => {

  const { setShowCreatePatient, showCreatePatient, setShowCreateRecord, showCreateRecord } = useCommon()

  return (
    <div className='w-full flex flex-col min-h-screen'>

      <Head>
        <title>Health Track Pro Plus</title>
      </Head>

      {showCreatePatient && <NewPatient />}
      {showCreateRecord && <NewRecord />}

      <div className='w-full flex items-center justify-between'>
        <span>Health Track Pro Plus</span>
        <div className='flex items-center gap-x-4'>
          <button className='bg-blue-600 px-4 py-2 text-white rounded' onClick={setShowCreatePatient(true)}>Create Patient</button>
          <button className='bg-blue-600 px-4 py-2 text-white rounded' onClick={setShowCreateRecord(true)}>Create Record</button>
        </div>
      </div>
    </div>
  )
}

export default Home