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
      order: requests.map(req => req.Order),
      product: requests.map(req => req.Order.Product),
      message: "Successfully fetched refund requests"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch refund requests' });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Expect 'approved' or 'declined'
    const request = await ReturnRequest.findByPk(id);

    if (!request) {
      return res.status(404).json({ error: 'Refund request not found' });
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

const create = async (req, res) => {
  try {
    const { orderId, reason, status, requestType } = req.body;

    console.log('Create refund request with:', { orderId, reason, status, requestType, file: req.file });

    if (!orderId) {
      return res.status(400).json({ error: 'orderId is required' });
    }
    if (!requestType || !['refund', 'exchange'].includes(requestType)) {
      return res.status(400).json({ error: 'Valid requestType is required' });
    }
    if (!reason) {
      return res.status(400).json({ error: 'reason is required' });
    }

    // Check if order exists
    const order = await Order.findByPk(orderId);
    if (!order) {
      return res.status(400).json({ error: 'Invalid orderId: order not found' });
    }

    let photoPath = null;
    if (req.file) {
      photoPath = req.file.filename; // Assuming multer saves file and filename is accessible here
    }

    const newRequest = await ReturnRequest.create({ 
      orderId, 
      reason, 
      status: status || 'Pending', 
      requestType, 
      photo: photoPath 
    });

    res.status(201).send({
      data: newRequest,
      message: "Refund request created successfully"
    });
  } catch (e) {
    console.error('Error creating refund request:', e);
    res.status(500).json({ error: 'Failed to create refund request', details: e.message });
  }
};

export const refundRequestController = {
  getAll,
  create,
  updateStatus
};
