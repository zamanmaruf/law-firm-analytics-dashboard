import { Container, Grid, Paper, Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemText, Divider } from '@mui/material';
import { data } from './data';
import Navbar from './Navbar';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Routes, Route } from 'react-router-dom';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

// Example additional metrics (can be replaced with real calculations)
const conversionRateYear = 4.48;
const conversionRateMonth = 19.93;
const bonusEarnings = 4097;
const estimatedValue = 7234923.4;
const actualValue = 78755798.02;
const pendingSignatures = 0;
const awaitingSignatures = 1;

// Chart data for Monthly Revenue
const monthlyRevenueData = {
  labels: data.monthly_revenue.map((m) => m.month),
  datasets: [
    {
      label: 'Revenue',
      data: data.monthly_revenue.map((m) => m.amount),
      backgroundColor: '#388e3c',
    },
  ],
};

// Chart data for Case Type Distribution
const caseTypeData = {
  labels: data.case_type_distribution.map((c) => c.type),
  datasets: [
    {
      label: 'Cases',
      data: data.case_type_distribution.map((c) => c.count),
      backgroundColor: [
        '#388e3c', '#757575', '#a5d6a7', '#bdbdbd',
      ],
    },
  ],
};

function DashboardHome() {
  return (
    <Box>
      <Grid container spacing={3}>
        {/* Top Row: Pie Chart, Gauges, Tasks, Appointments */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, height: 320 }}>
            <Typography variant="subtitle1">Marketing Sources</Typography>
            <Box sx={{ height: 250 }}>
              {/* Pie Chart Placeholder */}
              <Pie data={caseTypeData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper sx={{ p: 2, height: 150, mb: 2 }}>
            <Typography variant="subtitle2">Total Matters This Month</Typography>
            {/* Gauge Placeholder */}
            <Box sx={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4">2</Typography>
            </Box>
          </Paper>
          <Paper sx={{ p: 2, height: 150 }}>
            <Typography variant="subtitle2">Bonus Earnings (This Week)</Typography>
            {/* Gauge Placeholder */}
            <Box sx={{ height: 80, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h4">4097</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, height: 320 }}>
            <Typography variant="subtitle1">Tasks (next 30 days)</Typography>
            <List dense>
              <ListItem><ListItemText primary="Additional Onboarding" secondary="Due: 2024-07-10 - In Progress" /></ListItem>
              <Divider />
              <ListItem><ListItemText primary="Start Intake" secondary="Due: 2024-07-12 - Waiting on Client" /></ListItem>
              <Divider />
              <ListItem><ListItemText primary="Follow Up: New Lead" secondary="Due: 2024-07-15 - To Be Started" /></ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, height: 320 }}>
            <Typography variant="subtitle1">Appointments (next 30 days)</Typography>
            <List dense>
              <ListItem><ListItemText primary="Initial Consultation" secondary="2024-07-11, 10:00AM, Office" /></ListItem>
              <Divider />
              <ListItem><ListItemText primary="Email Update" secondary="2024-07-13, 2:00PM, Remote" /></ListItem>
              <Divider />
              <ListItem><ListItemText primary="Settlement Conference" secondary="2024-07-18, 1:00PM, Office" /></ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
      {/* KPI Cards Row */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={2.5}>
          <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="subtitle2">Conversion Rate This Year</Typography>
            <Typography variant="h5">4.48%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="subtitle2">Conversion Rate This Month</Typography>
            <Typography variant="h5">19.93%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>
            <Typography variant="subtitle2">Estimated Value</Typography>
            <Typography variant="h5">$7,234,923.40</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2.5}>
          <Paper sx={{ p: 2, bgcolor: 'secondary.main', color: 'white' }}>
            <Typography variant="subtitle2">Actual Value</Typography>
            <Typography variant="h5">$78,755,798.62</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={2}>
          <Paper sx={{ p: 2, bgcolor: 'success.main', color: 'white' }}>
            <Typography variant="subtitle2">Pending Signatures</Typography>
            <Typography variant="h5">0</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Bar Chart Row */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={9}>
          <Paper sx={{ p: 2, height: 320 }}>
            <Typography variant="subtitle1">Matters by Practice Area</Typography>
            <Box sx={{ height: 250 }}>
              {/* Bar Chart Placeholder */}
              <Bar data={monthlyRevenueData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper sx={{ p: 2, height: 320 }}>
            <Typography variant="subtitle1">Referral Sources</Typography>
            <Box sx={{ height: 250 }}>
              {/* Pie Chart Placeholder */}
              <Pie data={caseTypeData} options={{ responsive: true, plugins: { legend: { position: 'bottom' } } }} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

function Cases() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Cases</Typography>
      <Typography gutterBottom>Manage and view all law firm cases. Filter, search, and add new cases here.</Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Case ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Attorney</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Outcome</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.cases.map((c) => (
              <TableRow key={c.case_id}>
                <TableCell>{c.case_id}</TableCell>
                <TableCell>{c.title}</TableCell>
                <TableCell>{c.attorney}</TableCell>
                <TableCell>{c.status}</TableCell>
                <TableCell>{c.outcome}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Clients() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Clients</Typography>
      <Typography gutterBottom>Manage client information, view client history, and add new clients here.</Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Client ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Total Cases</TableCell>
              <TableCell>Total Billed</TableCell>
              <TableCell>Signup Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.clients.map((client) => (
              <TableRow key={client.client_id}>
                <TableCell>{client.client_id}</TableCell>
                <TableCell>{client.name}</TableCell>
                <TableCell>{client.total_cases}</TableCell>
                <TableCell>${client.total_billed.toLocaleString()}</TableCell>
                <TableCell>{client.signup_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Attorneys() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Attorneys</Typography>
      <Typography gutterBottom>View attorney profiles, performance metrics, and assign cases here.</Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Cases Handled</TableCell>
              <TableCell>Hours Logged</TableCell>
              <TableCell>Revenue Generated</TableCell>
              <TableCell>Success Rate (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.attorneys.map((a) => (
              <TableRow key={a.name}>
                <TableCell>{a.name}</TableCell>
                <TableCell>{a.cases_handled}</TableCell>
                <TableCell>{a.hours_logged}</TableCell>
                <TableCell>${a.revenue_generated.toLocaleString()}</TableCell>
                <TableCell>{a.avg_case_success_rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function Reports() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Reports</Typography>
      <Typography gutterBottom>Generate, view, and export detailed law firm reports here.</Typography>
      <Paper sx={{ mt: 2, p: 2 }}>
        <Typography variant="subtitle1">Available Reports</Typography>
        <List>
          <ListItem><ListItemText primary="Monthly Revenue Report" secondary="Download monthly revenue as PDF or Excel." /></ListItem>
          <ListItem><ListItemText primary="Case Outcome Report" secondary="Summary of case outcomes by type and attorney." /></ListItem>
          <ListItem><ListItemText primary="Attorney Performance Report" secondary="Detailed metrics for each attorney." /></ListItem>
        </List>
      </Paper>
    </Box>
  );
}

function Billing() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Billing</Typography>
      <Typography gutterBottom>Manage billing, invoices, and payments for your law firm here.</Typography>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Case</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Billable Hours</TableCell>
              <TableCell>Revenue</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.cases.map((c) => (
              <TableRow key={c.case_id}>
                <TableCell>{c.title}</TableCell>
                <TableCell>{c.client}</TableCell>
                <TableCell>{c.billable_hours}</TableCell>
                <TableCell>${c.revenue.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/attorneys" element={<Attorneys />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/billing" element={<Billing />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
