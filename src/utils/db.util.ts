import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('src/database/hpp_db.db');

db.run('CREATE TABLE IF NOT EXISTS patients (id INTEGER PRIMARY KEY AUTOINCREMENT, names TEXT, email TEXT UNIQUE, nid TEXT UNIQUE, frequent_sickness TEXT, password TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)')
db.run('CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, patient_id INTEGER, heart_rate INTEGER, body_temp INTEGER, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME DEFAULT CURRENT_TIMESTAMP)');

export default db;
