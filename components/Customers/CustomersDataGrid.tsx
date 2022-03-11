import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';

const columns: GridColDef[] = [
	{ field: '_id', headerName: 'ID', width: 70 },
	{ field: 'first_name', headerName: 'First name', width: 130 },
];

export default function CustomersDataGrid({ customers }) {

	if (!customers) return <CircularProgress/>;

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				getRowId={(row) => row._id}
				rows={customers}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}
