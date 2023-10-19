import { Request, Response } from "express";
import { ApiResponse } from "../payload/api.response";
import db from "../utils/db.util";

const addRecord = (req: Request, res: Response) => {
    try {
        const { patient_id, heart_rate, body_temp } = req.body
        const query = `INSERT INTO records (patient_id, heart_rate, body_temp) VALUES (?, ?, ?)`
        db.run(query, [patient_id, heart_rate, body_temp], (err, row) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(201).json(ApiResponse.success("Record added successfully", { data: row }))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const addRecordAndNewPatient = (req:Request,res:Response)=>{
    try {
        const { names, nid, frequent_sickness, heart_rate, body_temp } = req.body
        const query = `INSERT INTO patients (names, nid, frequent_sickness) VALUES (?, ?, ?)`
        db.run(query, [names, nid, frequent_sickness], (err, row) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            const query2 = `INSERT INTO records (patient_id, heart_rate, body_temp) VALUES (?, ?, ?)`
            console.log(row)
            db.run(query2, [row.id, heart_rate, body_temp], (err, row) => {
                if (err) {
                    return res.status(500).json(ApiResponse.error("Error occured", err))
                }
                return res.status(201).json(ApiResponse.success("Record added successfully", { data: row }))
            })
        })
        
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const getRecords = (req: Request, res: Response) => {
    try {
        const query = `SELECT * FROM records INNER JOIN patients ON records.patient_id = patients.id`
        db.all(query, [], (err, rows) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Records fetched successfully", rows))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const getRecord = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const query = `SELECT * FROM records WHERE id = ?`
        db.get(query, [id], (err, row) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Record fetched successfully", row))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const updateRecord = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { patient_id, heart_rate, body_temp } = req.body
        const query = `UPDATE records SET patient_id = ?, heart_rate = ?, body_temp = ? WHERE id = ?`
        db.run(query, [patient_id, heart_rate, body_temp, id], (err) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Record updated successfully", null))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const deleteRecord = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const query = `DELETE FROM records WHERE id = ?`
        db.run(query, [id], (err) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Record deleted successfully", null))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const getRecordsByPatient = (req: Request, res: Response) => {
    try {
        const { patient_id } = req.params
        const query = `SELECT * FROM records WHERE patient_id = ?`
        db.all(query, [patient_id], (err, rows) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Records fetched successfully", rows))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const recordController = {
    addRecord,
    deleteRecord,
    getRecord,
    getRecords,
    updateRecord,
    getRecordsByPatient,
    addRecordAndNewPatient
}

export default recordController;