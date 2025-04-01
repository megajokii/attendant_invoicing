// Importing a library for generating UUIDs
import { v4 as uuidv4 } from 'uuid';

// Sample Customers
const customers = [
    {
        id: uuidv4(),
        first_name: 'Evil',
        last_name: 'Rabbit',
        email: 'evil@rabbit.com',
        address: '123 Dark Rabbit Lane, Shadow Town',
        dob: new Date('1987-04-15'),
    },
    {
        id: uuidv4(),
        first_name: 'Delba',
        last_name: 'de Oliveira',
        email: 'delba@oliveira.com',
        address: '45 Greenwood Ave, Brazil',
        dob: new Date('1990-07-19'),
    },
    {
        id: uuidv4(),
        first_name: 'Lee',
        last_name: 'Robinson',
        email: 'lee@robinson.com',
        address: '678 Beach Road, Los Angeles',
        dob: new Date('1985-11-23'),
    },
];

// Sample Invoices
const invoices = [
    {
        id: uuidv4(),
        customer_id: customers[0].id,
        number: 'INV-1001',
        amount: 1500,
        date: '2023-02-01',
        status: 'paid',
    },
    {
        id: uuidv4(),
        customer_id: customers[1].id,
        number: 'INV-1002',
        amount: 2500,
        date: '2023-03-10',
        status: 'pending',
    },
    {
        id: uuidv4(),
        customer_id: customers[2].id,
        number: 'INV-1003',
        amount: 1200,
        date: '2023-04-15',
        status: 'paid',
    },
];

// Sample InvoiceLines
const invoiceLines = [
    {
        invoice_id: invoices[0].id,
        number: 1,
        description: 'Laptop Purchase',
        quantity: 1,
        price: 1000,
        total: 1000,
    },
    {
        invoice_id: invoices[0].id,
        number: 2,
        description: 'Wireless Mouse',
        quantity: 2,
        price: 25,
        total: 50,
    },
    {
        invoice_id: invoices[1].id,
        number: 1,
        description: 'Office Chair',
        quantity: 1,
        price: 200,
        total: 200,
    },
    {
        invoice_id: invoices[1].id,
        number: 2,
        description: 'Desk Lamp',
        quantity: 1,
        price: 50,
        total: 50,
    },
    {
        invoice_id: invoices[2].id,
        number: 1,
        description: 'Gaming Keyboard',
        quantity: 1,
        price: 100,
        total: 100,
    },
    {
        invoice_id: invoices[2].id,
        number: 2,
        description: 'USB-C Hub',
        quantity: 1,
        price: 25,
        total: 25,
    },
];