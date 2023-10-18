import NewPatient from '@/components/NewPatient'
import NewRecord from '@/components/NewRecord'
import { useCommon } from '@/context/CommonContext'
import { useGetPatients, useGetRecords } from '@/hooks'
import { Patient, Record } from '@/types'
import Head from 'next/head'

const Home = ({ patients, records }: { patients: Patient[], records: Record[] }) => {

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

      <div className='w-full flex flex-col'>
        {records.length}
        {patients.length}
      </div>
    </div>
  )
}

export async function getServerSideProps() {

  const { setPatients, setPatientsLoading, setRecords, setRecordsLoading } = useCommon()

  const patients = await useGetPatients(setPatientsLoading, setPatients);
  const records = await useGetRecords(setRecordsLoading, setRecords);

  return {
    props: {
      patients,
      records
    }
  };
}

export default Home