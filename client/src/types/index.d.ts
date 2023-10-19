export interface Patient {
    id?: number
    names: string;
    email: string;
    nid: string;
    frequent_sickness: string;
    created_at?: string,
    updated_at?: string
}

export interface Record {
    id?: number
    names?: string;
    patient_id?: number;
    heart_rate: number;
    body_temp: number;
    created_at?: string,
    updated_at?: string
}