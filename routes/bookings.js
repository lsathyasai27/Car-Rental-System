import express from 'express';
import Booking from '../models/Booking.js';

const router = express.Router();

// Create a new booking
router.post('/', async (req, res) => {
  try {
    console.log('Received booking data:', req.body); // Log incoming data
    const booking = new Booking(req.body);
    const savedBooking = await booking.save();
    console.log('Booking saved successfully:', savedBooking); // Log saved booking
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error creating booking:', error); // Log detailed error
    res.status(400).json({ 
      message: error.message,
      details: error.errors ? Object.keys(error.errors).map(key => ({
        field: key,
        message: error.errors[key].message
      })) : null
    });
  }
});

// Get all bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;