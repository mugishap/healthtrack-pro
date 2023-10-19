import Navbar from '@/components/Navbar'
import NewPatient from '@/components/NewPatient'
import NewRecord from '@/components/NewRecord'
import RecordStats from '@/components/RecordStats'
import { useDeletePatient, useGetPatients, useGetRecords } from '@/hooks'
import { Patient, Record } from '@/types'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home = () => {

  const [showCreatePatient, setShowCreatePatient] = useState<boolean>(false)
  const [showCreateRecord, setShowCreateRecord] = useState<boolean>(false)
  const [patients, setPatients] = useState<Patient[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [showStats, setShowStats] = useState<boolean>(false)
  const [activePatient, setActivePatient] = useState<Patient | null>(null)
  useEffect(() => {

    useGetPatients(setLoading, setPatients);

  }, [])

  return (
    <div className='bg-white text-black w-full flex flex-col min-h-screen'>

      {showCreatePatient && <NewPatient setShowCreatePatient={setShowCreatePatient} />}
      {showCreateRecord && <NewRecord setShowCreateRecord={setShowCreateRecord} />}
      {showStats && <RecordStats activePatient={activePatient} setShowStats={setShowStats} />}

      <Head>
        <title>Health Track Pro Plus</title>
      </Head>
      <Navbar
        showCreatePatient={showCreatePatient}
        setShowCreatePatient={setShowCreatePatient}
        showCreateRecord={showCreateRecord}
        setShowCreateRecord={setShowCreateRecord}
      />
      <div className='w-full flex flex-col'>
        <span className='my-4 font-bold text-lg mx-auto'>Records</span>
        <table className='w-7/12 mx-auto my-12'>
          <thead>
            <tr>
              <th className='border py-2 border-gray-200'>Patient ID</th>
              <th className='border py-2 border-gray-200'>Names</th>
              <th className='border py-2 border-gray-200'>Frequest Sickness</th>
              <th className='border py-2 border-gray-200'>Body Temperature</th>
              <th className='border py-2 border-gray-200'>View</th>
            </tr>
          </thead>
          <tbody>
            {
              patients.map((patient: Patient, index) => (
                <tr key={index}>
                  <td className='border py-2 border-gray-200' align='center'>{patient?.id}</td>
                  <td className='border py-2 border-gray-200' align='center'>{patient.names}</td>
                  <td className='border py-2 border-gray-200' align='center'>{patient.frequent_sickness}</td>
                  <td className='border py-2 border-gray-200' align='center'>
                    <button className='bg-blue-600 px-4 py-2 rounded-lg text-white cursor-pointer' onClick={() => {
                      setActivePatient(patient)
                      setShowStats(true)
                    }}>View</button>
                  </td>
                  <td className='border py-2 border-gray-200' align='center'>
                    <button className='bg-red-600 px-4 py-2 rounded-lg text-white cursor-pointer' onClick={() => {
                      useDeletePatient(setLoading, patient?.id as number, setPatients)
                    }}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home