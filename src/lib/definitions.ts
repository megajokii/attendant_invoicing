export type Invoice = {
    id: string;
    customer_id: string;
    number: string,
    amount: number;
    date: string;
    status: 'pending' | 'paid';
};

export type InvoiceLine = {
    invoice_id: string;
    number: number;
    description: string;
    quantity: number;
    price: number;
    total: number;
};

export type Customer = {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    address: string;
    dob: Date;
}