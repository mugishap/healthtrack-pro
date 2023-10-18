import React, { useState } from "react";

const CommonContext = React.createContext<any>({})

export const useCommon = () => {
    return React.useContext(CommonContext)
}

export const CommonProvider = ({ children }: any) => {

    const [showCreatePatient, setShowCreatePatient] = useState(false)
    const [showCreateRecord, setShowCreateRecord] = useState(false)
    const [patients, setPatients] = useState([])
    const [records, setRecords] = useState([])

    return (
        <CommonContext.Provider value={{
            patients,
            setPatients,
            records,
            setRecords,
            showCreatePatient,
            setShowCreatePatient,
            showCreateRecord,
            setShowCreateRecord
        }}>
            {children}
        </CommonContext.Provider>
    )

}
