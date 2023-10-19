import { Record } from '@/types'
import { FC } from 'react'

const RecordStats: FC<{ setShowStats: Function, activePatient: Record | null }> = ({ setShowStats, activePatient }) => {
    return (
        <div className='w-screen min-h-screen absolute bg-black/70 z-20 flex items-center justify-center'>
            <div className='w-full h-full absolute z-30' onClick={() => setShowStats(false)}></div>
            <div className='bg-white p-8 rounded-lg flex flex-col w-1/4 z-40'>
            </div>
        </div>
    )
}

export default RecordStats