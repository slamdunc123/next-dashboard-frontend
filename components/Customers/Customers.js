import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uri from '../../domain';

const Customers = () => {
	const [customers, setCustomers] = useState([]);

	const getCustomers = async () => {
		const res = await axios.get(`${uri}/api/customers`);
		console.log(res.data);
		setCustomers(res.data);
	};

	useEffect(() => {
		getCustomers();
	}, []);

	return (
		<>
			<div>Customers</div>
			{customers.length > 0
				? customers.map((customer) => (
						<p key={customer._id}>{customer.first_name}</p>
				  ))
				: 'Loading ...'}
		</>
	);
};

export default Customers;
