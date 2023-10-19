import { useGetRecordsbyPatient } from '@/hooks'
import { Patient, Record } from '@/types'
import { FC, useEffect, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js'
import { Bar, Line } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
)
const RecordStats: FC<{ setShowStats: Function, activePatient: Patient | null }> = ({ setShowStats, activePatient }) => {

    const [records, setRecords] = useState<Record[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        useGetRecordsbyPatient(setLoading, setRecords, activePatient?.id as number)
    }, [])

    return (
        <div className='w-screen min-h-screen absolute bg-black/70 z-20 flex items-center justify-center'>
            <div className='w-full h-full absolute z-30' onClick={() => setShowStats(false)}></div>
            <div className='bg-white p-8 rounded-lg flex flex-col w-3/4 h-[calc(100vh-20vh)] z-40'>
                {
                    !records.length && <span>No records for {activePatient?.names}</span>
                }
                <Bar
                    data={{
                        labels: ["Temperature", "Heart Rate"],
                        datasets: records.map((record: Record) => ({
                            label: record.created_at,
                            data: [record.body_temp, record.heart_rate],
                            backgroundColor: ["#3B82F6", "#10B981"]
                        }))
                    }}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: `${activePatient?.names}'s Records`,
                            },
                            legend: {
                                display: false
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default RecordStats