import { ReturnRequest, Order, Product } from '../../models/index.js';
 
const getAll = async (req, res) => {
  try {
    const requests = await ReturnRequest.findAll({
      include: [{
        model: Order,
        include: [Product]
      }]
    });
    res.status(200).send({
      data: requests,
      message: "Successfully fetched return requests"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch return requests' });
  }
};
 
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Expect 'approved' or 'declined'
    const request = await ReturnRequest.findByPk(id);
 
    if (!request) {
      return res.status(404).json({ error: 'Return request not found' });
    }
 
    if (status) {
      request.status = status;
    } else if (req.path.includes("/approve")) {
      request.status = "approved";
    } else if (req.path.includes("/decline")) {
      request.status = "declined";
    }
 
    await request.save();
 
    res.status(200).send({
      data: request,
      message: "Status updated successfully"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update status' });
  }
};
 
// If you don't have a `create` method yet, define a placeholder or remove it from the export
const create = async (req, res) => {
  try {
    const { orderId, reason, status } = req.body;
    const newRequest = await ReturnRequest.create({ orderId, reason, status });
    res.status(201).send({
      data: newRequest,
      message: "Return request created successfully"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create return request' });
  }
};
 
export const returnRequestController = {
  getAll,
  create,
  updateStatus
};
 
 
