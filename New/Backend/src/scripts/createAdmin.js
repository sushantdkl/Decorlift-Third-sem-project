import { User } from '../models/index.js';
import bcrypt from 'bcryptjs';
import { sequelize } from '../database/index.js';

const createAdminUser = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection established successfully.');

    const adminEmail = 'admin@gmail.com';
    const adminPassword = 'admin123';
    
    const existingAdmin = await User.findOne({ where: { email: adminEmail } });
    
    if (existingAdmin) {
      console.log('Admin user already exists!');
      console.log('Email:', adminEmail);
      console.log('Password: admin123');
      return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const adminUser = await User.create({
      name: 'Admin User',
      firstName: 'Admin',
      lastName: 'User',
      email: adminEmail,
      password: hashedPassword,
      gender: 'Other',
      mobile: '9800000000',
      securityQuestion: 'What is your favorite color?',
      securityAnswer: 'Blue',
      isAdmin: true
    });

    console.log('Admin user created successfully!');
    console.log('Email:', adminEmail);
    console.log('Password: admin123');
    console.log('Admin ID:', adminUser.id);
    
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

createAdminUser();
