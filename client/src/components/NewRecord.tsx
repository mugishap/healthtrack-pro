import { createRecord } from '@/hooks';
import { Record } from '@/types';
import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { BiLoaderAlt } from "react-icons/bi";
import { toast } from 'react-toastify';

const NewRecord: FC<{ setShowCreateRecord: Function }> = ({ setShowCreateRecord }) => {

    const [loading, setLoading] = useState(false)
    const [recordData, setRecordData] = useState<Record>({
        patient_id: 1,
        heart_rate: 0,
        body_temp: 0
    })
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (!recordData.patient_id || !recordData.heart_rate || !recordData.body_temp) return toast.error("Please fill all the fields");
            createRecord(setLoading, recordData, setShowCreateRecord)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='w-screen h-screen absolute bg-black/70 z-20 flex items-center justify-center'>
            <div className='w-full h-full absolute z-30' onClick={setShowCreateRecord(false)}></div>
            <div className='bg-white p-8 rounded-lg flex flex-col w-1/4 z-40'>
                <span className='font-bold text-g'>Create Record</span>
                <form onSubmit={handleSubmit} className='w-full gap-y-2 flex flex-col'>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Patient ID
                        </label>
                        <input
                            aria-label="enter patient_id"
                            role="input"
                            type="number"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="Patient ID"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setRecordData({ ...recordData, patient_id: e.target.valueAsNumber });
                            }}
                            value={recordData.patient_id}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Heart Rate
                        </label>
                        <input
                            aria-label="enter heart rate"
                            role="input"
                            type="number"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="Heart Rate"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setRecordData({ ...recordData, heart_rate: e.target.valueAsNumber });
                            }}
                            value={recordData.heart_rate}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Body Temperature
                        </label>
                        <input
                            aria-label="enter body temperature"
                            role="input"
                            type="number"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="Body Temperature"
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setRecordData({ ...recordData, body_temp: e.target.valueAsNumber });
                            }}
                            value={recordData.body_temp}
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            role="button"
                            aria-label="Create Patient "
                            className="focus:ring-2 flex items-center justify-center focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 duration-1000 py-4 w-full disabled:bg-slate-600"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? <BiLoaderAlt className="animate-spin" size={25} /> : "Create Record"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewRecord