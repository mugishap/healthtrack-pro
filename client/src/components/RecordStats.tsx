import { useGetRecordsbyPatient } from '@/hooks'
import { Patient, Record } from '@/types'
import { FC, useEffect, useState } from 'react'

const RecordStats: FC<{ setShowStats: Function, activePatient: Patient | null }> = ({ setShowStats, activePatient }) => {

    const [records, setRecords] = useState<Record[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        useGetRecordsbyPatient(setLoading, setRecords, activePatient?.id as number)
        console.log(records)
    }, [])

    return (
        <div className='w-screen min-h-screen absolute bg-black/70 z-20 flex items-center justify-center'>
            <div className='w-full h-full absolute z-30' onClick={() => setShowStats(false)}></div>
            <div className='bg-white p-8 rounded-lg flex flex-col w-3/4 h-[calc(100vh-20vh)] z-40'>
                {
                    !records.length && <span>No records for {activePatient?.names}</span>
                }
            </div>
        </div>
    )
}

export default RecordStats