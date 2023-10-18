import { FC, createContext, useContext, useState } from "react";

const CommonContext = createContext<any>({})

export const useCommon = () => {
    return useContext(CommonContext)
}

export const CommonProvider = ({ children }: any) => {

    const [showCreatePatient, setShowCreatePatient] = useState(false)
    const [showCreateRecord, setShowCreateRecord] = useState(false)
    const [patients, setPatients] = useState([])
    const [records, setRecords] = useState([])
    const [patientsLoading, setPatientsLoading] = useState([])
    const [recordsLoading, setRecordsLoading] = useState([])

    return (
        <CommonContext.Provider value={{
            patients,
            setPatients,
            records,
            setRecords,
            showCreatePatient,
            setShowCreatePatient,
            showCreateRecord,
            setShowCreateRecord,
            patientsLoading,
            setPatientsLoading,
            recordsLoading,
            setRecordsLoading
        }}>
            {children}
        </CommonContext.Provider>
    )

}
