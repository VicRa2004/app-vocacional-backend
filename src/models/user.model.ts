import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/db";
import type { UserCreate, UserType, UserRolType } from "../types";

// Define un tipo para la entrada opcional de atributos al crear un usuario

// Extiende el modelo de Sequelize con tus tipos
export class UserModel extends Model<UserType, UserCreate> implements UserType {
  public id_user!: number;
  public fullname!: string;
  public password!: string;
  public username!: string;
  public email!: string;
  public rol!: UserRolType;
  public email_confirm!: boolean;
  public readonly createdAt?: Date;
  public readonly updatedAt?: Date;
}

// Define el modelo usando Sequelize
UserModel.init(
  {
    id_user: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    rol: {
      type: DataTypes.ENUM("admin", "user"), // Restringe valores al tipo "rol"
      allowNull: false,
    },
    email_confirm: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize,
    modelName: "users",
    timestamps: true, // Opcional: desactiva timestamps si no los usas
  }
);
