import React, { useState } from 'react';
import CollegeRanking from './Components/CollegeRanking';
import '../src/App.css'

const collegesData = [
  { name: 'College A', location: 'New York', fees: 20000, ranking: 1 },
  { name: 'College B', location: 'California', fees: 15000, ranking: 2 },
  { name: 'College C', location: 'New York', fees: 25000, ranking: 3 },
  { name: 'College D', location: 'New York', fees: 10000, ranking: 4 },
];

function App() {
  const [preferences, setPreferences] = useState({
    preferredLocation: '',
    maxFees: '',
    rankingWeight: '',
    feesWeight: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPreferences({ ...preferences, [name]: value });
  };

  return (
    <div>
      <h1>College Ranking System</h1>
      <form>
        <div>
          <label>Preferred Location:</label>
          <input
            type="text"
            name="preferredLocation"
            value={preferences.preferredLocation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Max Fees:</label>
          <input
            type="number"
            name="maxFees"
            value={preferences.maxFees}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Ranking Weight:</label>
          <input
            type="number"
            name="rankingWeight"
            value={preferences.rankingWeight}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Fees Weight:</label>
          <input
            type="number"
            name="feesWeight"
            value={preferences.feesWeight}
            onChange={handleInputChange}
          />
        </div>
      </form>

     
      <CollegeRanking preferences={preferences} colleges={collegesData} />
    </div>
  );
}

export default App;
