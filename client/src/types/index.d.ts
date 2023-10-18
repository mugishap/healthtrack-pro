export interface Patient {
    names: string;
    email: string;
    nid: string;
    frequent_sickness: string;
}

export interface Record {
    patient_id: string;
    heart_rate: number;
    body_temp: number;
}