import './table_style.css';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';

const TableLayout = ({ 
    tableData, 
    handleNextPage,
    handlePreviousPage, 
    params,
    handlePageLimit, 
    headerConfig, 
    isAction, 
    rowHandler,
    deleteHandler ,
    editRow
  }: any) => {

    const createTable = (
        data: any[],
        headerConfig: { key: string; title: string; width: number }[]
    ) => {
        const formattedHeader = headerConfig.map((config) => ({
            name: config.title,
            width: config.width,
        }));

        const formattedBody = data.map((item) => {
            const formattedItem: Record<string, { value: any; width: number }> = {};
            headerConfig.forEach((config) => {
                formattedItem[config.key] = {
                    value: item[config.key],
                    width: config.width,
                };
            });
            return formattedItem;
        });

        return {
            header: formattedHeader,
            body: formattedBody,
        };
    };

    const table: any = createTable(tableData, headerConfig);

    const formatArray = (arr: any[]) => {
        if (!Array.isArray(arr)) return '';
        return arr.length > 3 ? `${arr.slice(0, 3).join(', ')}...` : arr.join(', ');
    };

    const truncateString = (str: string, maxLength: number) => {
        if (typeof str !== 'string') return str;
        return str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
    };

    return (
        <>
            <div className="table_layout">
                {/* TABLE HEAD */}
                <div className='table_header'>
                    {table.header.map((header: { name: string; width: number }, index: number) => (
                        <div
                            key={index}
                            style={{ width: header.width + "vh" }}
                            className='key'
                        >
                            {truncateString(header.name, 20)}
                        </div>
                    ))}
                    {isAction && <div className='key' style={{ width: '10vh' }}>Action</div>}
                </div>

                {/* TABLE BODY */}
                <div className='table_body'>
                    {table.body.map((row: any, index: number) => (
                        <div className='table_body_row' key={index} onClick={() => rowHandler(row?._id)}>
                            {Object.keys(row).map((key, index) => (
                                <div key={index} style={{ width: row[key].width + "vh" }} className='key'>
                                    {Array.isArray(row[key].value) && formatArray(row[key].value)}
                                    {!Array.isArray(row[key].value) && typeof row[key].value === 'object' && row[key].value.secure_url && (
                                    <span className='coverImage'> <img src={row[key].value?.secure_url} alt="cover" /></span>
                                    )}
                                    {!Array.isArray(row[key].value) && !(row[key].value?.secure_url) && truncateString(row[key].value, 30)}
                                </div>
                            ))}

                            {isAction && <div className='key' style={{ width: '10vh' }}>
                                <div className='gap-elements'>
                                    <span title='delete Row' className='px8 faded-sol' onClick={()=> {deleteHandler(row?._id?.value)}}><DeleteOutlineIcon /></span>
                                    <span title='Edit Row Data' className='px8 faded-sol' onClick={()=> {editRow(row?._id?.value)}}><DriveFileRenameOutlineOutlinedIcon /></span>
                                </div>
                            </div>}
                        </div>
                    ))}
                </div>

                {/* TABLE FOOTER */}
                <div className='table-footer'>
                    <div className='container gap-elements space-50'>
                        <div className='gap-elements centered-align'>
                            <span className='InterLight '>Row per page: </span>
                            <select className='select InterLight faded-sol' value={params?.limit} onChange={(e)=> {handlePageLimit(e)}} >
                                <option  value="10">10</option>
                                <option  value="20">20</option>
                                <option  value="30">30</option>
                                <option  value="40">40</option>
                                <option  value="50">50</option>
                            </select>
                        </div>
                        <div className='gap-elements centered-align'>
                            <span className='InterLight'>Page: </span>
                            <span className='faded-sol'> {params?.page} of  {params?.totalPages} </span>
                            <div className='gap-elements switch-page-btn centered-align'>
                                <span className='faded' onClick={()=> handleNextPage()}><ChevronLeftOutlinedIcon /></span>
                                <span className='faded' onClick={()=> handlePreviousPage()}><ChevronRightOutlinedIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TableLayout;
