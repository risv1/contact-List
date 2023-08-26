import { FC } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import ContactModel from '../models/ContactModel';
interface ContactListProps {};

const ContactList: FC<{rows: ContactModel[], columns: GridColDef[]}> = (props) => {
  return( 
  <>
  <div>ContactList</div>
  <div style={{ height: 400, width: '100%' }}>
  <DataGrid
    rows={props.rows}
    columns={props.columns}
    initialState={{
      pagination: {
        paginationModel: { page: 0, pageSize: 5 },
      },
    }}
    pageSizeOptions={[5, 10]}
  />
</div>
</>
)
};

export default ContactList;