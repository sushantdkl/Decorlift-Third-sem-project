import { ReturnRequest, Order, Product } from '../../models/index.js';

const getAll = async (req, res) => {
  try {
    const requests = await ReturnRequest.findAll({
      include: [{
        model: Order,
        include: [Product]
      }]
    });
    console.log(requests)
   res.status(200).send({
      data: requests.map(req => ({
        order: req.Order,
        request: req,
        product: req.Order.Product
      })),
      message: "Successfully fetched refund requests"
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to fetch return requests' });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // Expect 'Approved', 'Rejected', 'Completed', etc.
    const request = await ReturnRequest.findByPk(id);

    if (!request) {
      return res.status(404).json({ error: 'Return request not found' });
    }

    if (status) {
      request.status = status;
    } else if (req.path.includes("/approve")) {
      request.status = "Approved";
    } else if (req.path.includes("/decline")) {
      request.status = "Rejected";
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
    const { orderId, reason, requestType } = req.body;

    console.log('Create return request with:', { orderId, reason, requestType, file: req.file });

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
    if (req.file && req.file.filename) {
      photoPath = req.file.filename; // Assuming multer saves file and filename is accessible here
    }

    const newRequest = await ReturnRequest.create({ 
      orderId, 
      reason, 
      requestType, 
      photo: photoPath, 
      status: 'Pending' 
    });

    res.status(201).send({
      data: newRequest,
      message: "Return request created successfully"
    });
  } catch (e) {
    console.error('Error creating return request:', e);
    if (e instanceof multer.MulterError) {
      return res.status(400).json({ error: 'File upload error', details: e.message });
    }
    res.status(500).json({ error: 'Failed to create return request', details: e.message });
  }
};

export const returnRequestController = {
  getAll,
  create,
  updateStatus
};
