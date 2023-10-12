import { Request, Response } from "express";
import { ApiResponse } from "../payload/api.response";
import db from "../utils/db.util";

const addPatient = (req: Request, res: Response) => {
    try {
        const { names, email, nid, frequent_sickness, password } = req.body
        const query = `INSERT INTO patients (names, email, nid, frequent_sickness, password) VALUES (?, ?, ?, ?, ?)`
        db.run(query, [names, email, nid, frequent_sickness, password], (err, row) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(201).json(ApiResponse.success("Patient added successfully", { user: row }))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const getPatients = (req: Request, res: Response) => {
    try {
        const query = `SELECT * FROM patients`
        db.all(query, [], (err, rows) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Patients fetched successfully", rows))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const getPatient = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const query = `SELECT * FROM patients WHERE id = ?`
        db.get(query, [id], (err, row) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Patient fetched successfully", row))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const updatePatient = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { names, email, nid, frequent_sickness, password } = req.body
        const query = `UPDATE patients SET names = ?, email = ?, nid = ?, frequent_sickness = ?, password = ? WHERE id = ?`
        db.run(query, [names, email, nid, frequent_sickness, password, id], (err) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Patient updated successfully"))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const deletePatient = (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const query = `DELETE FROM patients WHERE id = ?`
        db.run(query, [id], (err) => {
            if (err) {
                return res.status(500).json(ApiResponse.error("Error occured", err))
            }
            return res.status(200).json(ApiResponse.success("Patient deleted successfully", null))
        })
    } catch (error) {
        return res.status(500).json(ApiResponse.error("Error occured", error))
    }
}

const patientController = {
    addPatient,
    getPatients,
    getPatient,
    updatePatient,
    deletePatient
}

export default patientController;