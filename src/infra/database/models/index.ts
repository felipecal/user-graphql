import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: parseInt(process.env.DB_PORT || "5432"),
    username: process.env.DB_USERNAME || "postgres",
    password: process.env.DB_PASSWORD || "postgres",
    database: process.env.DB_DATABASE || "postgres",
    define: {
        timestamps: true,
        underscored: true
    }
});