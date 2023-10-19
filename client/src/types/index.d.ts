export interface Patient {
    id?: number
    names: string;
    email: string;
    nid: string;
    frequent_sickness: string;
}

export interface Record {
    id?: number
    names?: string;
    patient_id?: number;
    heart_rate: number;
    body_temp: number;
}