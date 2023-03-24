import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
    // Component code goes here

    return (
        <Router>
            <div className="App">
                <h1>Welcome to ScatterFit</h1>
                <Routes>
                    <Route exact path="/" component={Home} />
                    <Route path="/scatterplot" component={ScatterPlot} />
                    <Route path="/linearfit" component={LinearFit} />
                </Routes>
            </div>
        </Router>
    );
}

export function Home() {
    return (
        <div>
            <h1>Welcome to ScatterFit</h1>
            <p>Please upload a dataset to get started.</p>
            <NavLink to="/scatterplot" activeClassName="active-link">Go to Scatter Plot</NavLink>
        </div>
    );
}

export function ScatterPlot({ fileData }) {
    // code to create the scatter plot using the fileData prop

    return (
        <div>
            <h1>Scatter Plot</h1>
            {/* Code to display the scatter plot */}
            <NavLink to="/">Go to Home</NavLink>
            <NavLink to="/linearfit">Go to Linear Fit</NavLink>
        </div>
    );
}

export function LinearFit({ fileData }) {
    // code to fit a linear model using the fileData prop

    return (
        <div>
            <h1>Linear Fit</h1>
            {/* Code to display the fitted model coefficients and goodness-of-fit */}
            {/* Code to visualize the fitted linear model onto the scatter plot */}
            <NavLink to="/">Go to Home</NavLink>
            <NavLink to="/scatterplot">Go to Scatter Plot</NavLink>
        </div>
    );
}

export default App;