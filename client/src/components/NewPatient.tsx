import { useCommon } from '@/context/CommonContext'
import { useCreatePatient } from '@/hooks'
import { Patient } from '@/types'
import React, { useState } from 'react'
import { BiLoaderAlt } from "react-icons/bi";

const NewPatient = () => {

    const { setShowCreatePatient } = useCommon()

    const [loading, setLoading] = useState(false)
    const [patientData, setPatientData] = useState<Patient>({
        names: "",
        email: "",
        nid: "",
        frequent_sickness: ""
    })
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();
            if (!patientData.names || !patientData.email || !patientData.nid || !patientData.frequent_sickness) return toast.error("Please fill all the fields");
            useCreatePatient(setLoading, patientData, setPatientData)
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='w-screen min-h-screen absolute bg-black/70 z-20 flex items-center justify-center'>
            <div className='w-full h-full absolute z-30' onClick={setShowCreatePatient(false)}></div>
            <div className='bg-white p-8 rounded-lg flex flex-col w-1/4'>
                <span className='font-bold text-g'>Create Patient</span>
                <form onSubmit={handleSubmit} className='w-full gap-y-2 flex flex-col'>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Names
                        </label>
                        <input
                            aria-label="enter names"
                            role="input"
                            type="text"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="Names"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPatientData({ ...patientData, names: e.target.value });
                            }}
                            value={patientData.names}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Email
                        </label>
                        <input
                            aria-label="enter email adress"
                            role="input"
                            type="email"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="Email"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPatientData({ ...patientData, email: e.target.value });
                            }}
                            value={patientData.email}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            NID
                        </label>
                        <input
                            aria-label="enter nid"
                            role="input"
                            type="text"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="National ID"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPatientData({ ...patientData, nid: e.target.value });
                            }}
                            value={patientData.nid}
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium leading-none text-gray-800">
                            Frequent Sickness
                        </label>
                        <input
                            role="input"
                            type="text"
                            className="bg-gray-200 border rounded focus:outline-none text-sm font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                            placeholder="Frequest Sickness"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setPatientData({ ...patientData, frequent_sickness: e.target.value });
                            }}
                            value={patientData.frequent_sickness}
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            role="button"
                            aria-label="login "
                            className="focus:ring-2 flex items-center justify-center focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-blue-500 border rounded hover:bg-blue-600 duration-1000 py-4 w-full disabled:bg-slate-600"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? <BiLoaderAlt className="animate-spin" size={25} /> : "LOGIN"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPatient