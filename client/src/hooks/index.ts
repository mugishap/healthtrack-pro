import { Patient, Record } from "@/types"
import { toast } from 'react-toastify';
import { api } from '@/api'

export const createPatient = async (setLoading: Function, data: Patient, setShowCreatePatient: Function) => {
    try {
        setLoading(true)
        const request = await api.post("/patient/add-patient", data)
        const { message } = request.data
        toast.success(message)
        setShowCreatePatient(false)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}

export const createRecord = async (setLoading: Function, data: Record, setShowCreateRecord: Function) => {
    try {
        setLoading(true)
        const request = await api.post("/record/add-record", data)
        const { message } = request.data
        toast.success(message)
        setShowCreateRecord(false)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}

export const getPatients = async (setLoading: Function, setPatients: Function) => {
    try {
        setLoading(true)
        const request = await api.get("/patient/all")
        const { data } = request.data
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
        const { data } = request.data
        setRecords(data)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}

export const getRecordsByPatient = async (setLoading: Function, setRecords: Function, patient_id: number) => {
    try {
        setLoading(true)
        const request = await api.get(`/record/patient/${patient_id}`)
        const { message, data } = request.data
        toast.success(message)
        setRecords(data.records)
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}

export const deletePatient = async (setLoading: Function, id: number, setRecords: Function) => {
    try {
        setLoading(true)
        const request = await api.delete(`/patient/delete/${id}`)
        const { message } = request.data
        toast.success(message)
        setRecords((prev: any) => prev.filter((record: Record) => record?.id !== id))
    } catch (error) {
        toast.error("Error occured")
        console.log(error)
    } finally {
        setLoading(false)
    }
}