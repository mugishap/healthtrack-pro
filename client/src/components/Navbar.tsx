import { FC } from 'react'

interface Props {
    showCreatePatient: boolean,
    setShowCreatePatient: Function,
    showCreateRecord: boolean,
    setShowCreateRecord: Function
}

const Navbar: FC<Props> = ({ showCreatePatient, setShowCreatePatient, showCreateRecord, setShowCreateRecord }) => {

    return (
        <div className='w-full flex items-center justify-between py-4 border-b-2 px-4'>
            <span className='font-bold text-lg text-black'>Health Track Pro Plus</span>
            <div className='flex items-center gap-x-4'>
                <button className='bg-blue-600 px-4 py-2 text-white rounded' onClick={() => setShowCreatePatient(!showCreatePatient)}>Create Patient</button>
                <button className='bg-blue-600 px-4 py-2 text-white rounded' onClick={() => setShowCreateRecord(!showCreateRecord)}>Create Record</button>
            </div>
        </div>
    )
}

export default Navbar