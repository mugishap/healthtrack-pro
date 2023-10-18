import { Patient, Record } from "@/types"
import { toast } from 'react-toastify';
import { api } from '@/api'

export const useCreatePatient = async (setLoading: Function, data: Patient, setPatientData: Function) => {
    try {
        setLoading(true)
        const request = await api.post("/patient/add-patient", data)
        const { message } = request.data
        toast.success(message)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}
export const useCreateRecord = async (setLoading: Function, data: Record, setRecordData: Function) => {
    try {
        setLoading(true)
        const request = await api.post("/record/add-record", data)
        const { message } = request.data
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}
export const useGetPatients = async (setLoading: Function, setPatients: Function) => {
    try {
        setLoading(true)
        const request = await api.get("/patient/all")
        const { message, data } = request.data
        toast.success(message)
        setPatients(data)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}
export const useGetRecords = async (setLoading: Function, setRecords: Function) => {
    try {
        setLoading(true)
        const request = await api.get("/record/all")
        const { message, data } = request.data
        toast.success(message)
        setRecords(data)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}