import express from 'express';
import connectDB from './utils/connectDB';
import userRoutes from './routes/user.routes';
import orderRoutes from './routes/order.routes';

const app = express();
const PORT = 3000;

// Connect to the database
connectDB();

// Middleware to parse JSON requests
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Additional routes and middleware can be added here
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});