import { Patient, Record } from "@/types"
import { toast } from 'react-toastify';
import { api } from '@/api'

export const useCreatePatient = async (setLoading: Function, data: Patient, setPatientData: Function) => {
    try {
        setLoading(true)
    } catch (error) {
        toast.error("Error occured")
    } finally {
        setLoading(false)
    }
}
export const useCreateRecord = async (setLoading: Function, data: Record, setRecordData: Function) => {
    try {
        setLoading(true)
    } catch (error) {
        toast.error("Error occured")
    } finally {
        setLoading(false)
    }
}
export const useGetPatients = async (setLoading: Function, setPatients: Function) => {
    try {
        setLoading(true)
    } catch (error) {
        toast.error("Error occured")
    } finally {
        setLoading(false)
    }
}
export const useGetRecords = async (setLoading: Function, setRecords: Function) => {
    try {
        setLoading(true)
    } catch (error) {
        toast.error("Error occured")
    } finally {
        setLoading(false)
    }
}
