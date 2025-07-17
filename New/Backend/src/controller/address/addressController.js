import { Address } from '../../models/index.js';
 
/**
* Fetch all addresses for a user
*/
const getAll = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const addresses = await Address.findAll({ where: { UserId: req.user.id } });
    res.status(200).send({ data: addresses, message: "Successfully fetched addresses" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch addresses' });
  }
};
 
/**
* Create new address
*/
const create = async (req, res) => {
  try {
    const { name, mobile, address, city, alternatePhone, landmark } = req.body;
 
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const newAddress = await Address.create({
      UserId: req.user.id,
      name,
      mobile,
      address,
      city,
      alternatePhone,
      landmark,
    });
 
    res.status(201).send({ data: newAddress, message: "Address created successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create address' });
  }
};
 
/**
* Update existing address
*/
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, mobile, address, city, alternatePhone, landmark } = req.body;
 
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const existingAddress = await Address.findOne({ where: { id, UserId: req.user.id } });
 
    if (!existingAddress) {
      return res.status(404).send({ message: "Address not found" });
    }
 
    existingAddress.name = name ?? existingAddress.name;
    existingAddress.mobile = mobile ?? existingAddress.mobile;
    existingAddress.address = address ?? existingAddress.address;
    existingAddress.city = city ?? existingAddress.city;
    existingAddress.alternatePhone = alternatePhone ?? existingAddress.alternatePhone;
    existingAddress.landmark = landmark ?? existingAddress.landmark;
 
    await existingAddress.save();
 
    res.status(200).send({ data: existingAddress, message: "Address updated successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update address' });
  }
};
 
/**
* Delete address by ID
*/
const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
 
    if (!req.user) {
      return res.status(401).send({ message: "Unauthorized" });
    }
    const address = await Address.findOne({ where: { id, UserId: req.user.id } });
 
    if (!address) {
      return res.status(404).send({ message: "Address not found" });
    }
 
    await address.destroy();
 
    res.status(200).send({ message: "Address deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to delete address' });
  }
};
 
export const addressController = {
  getAll,
  create,
  update,
  deleteById,
};
 