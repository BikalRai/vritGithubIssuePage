import { CssBaseline } from '@mui/material';
import './App.css';
import Layout from './components/Layout';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
    return (
        <div className="App">
            <CssBaseline />
            <Layout>
                <PrivateRoutes />
            </Layout>
        </div>
    );
}

export default App;
