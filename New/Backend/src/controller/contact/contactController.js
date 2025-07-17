import { Contact } from '../../models/index.js';
 
/**
* Create new contact submission
*/
const create = async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
 
    const contact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });
 
    res.status(201).send({ data: contact, message: "Contact form submitted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
};
 
/**
* Fetch all contact submissions
*/
const getAll = async (req, res) => {
  try {
    const contacts = await Contact.findAll();
    res.status(200).send({ data: contacts, message: "Successfully fetched contacts" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
};
export const contactController = {
  create,
  getAll,
};
 