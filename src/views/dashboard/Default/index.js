import React, { useEffect, useState } from 'react';
// material-ui
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import DataTable from "../../../ui-component/table/data-table";
import { Assignment } from "../../../api/assignment";
import { GridColDef } from '@mui/x-data-grid';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Dashboard = () => {
    const [isLoading, setLoading] = useState(true);
    const [assignments, setAssignments] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(false);
        Assignment.getAssignments((res) => {
            debugger
            setAssignments(res);
        }, (err) => {
            debugger
            setError(err.message)
            //alert(err);
        });
    }, []);

    return (
        <Grid container spacing={gridSpacing} >
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={12}>
                        <div id="gridPayrent" style={{ height: "700px", width: "100%" }}>
                            <Stack sx={{ width: '100%' }} spacing={2}>
                                <div>{!!error && <Alert severity="error">{!!error ? error + ". Using dummy data.." : ""}</Alert>}</div>
                            </Stack>
                            <DataTable />

                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
