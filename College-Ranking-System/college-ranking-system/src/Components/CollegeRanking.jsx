import React from 'react';

const CollegeRanking = ({ preferences, colleges }) => {
  const { preferredLocation, maxFees, rankingWeight, feesWeight } = preferences;

  // Check if all necessary inputs are provided
  if (!preferredLocation || !maxFees || !rankingWeight || !feesWeight) {
    return <p>Please fill in all preferences.</p>;
  }

  // Filter colleges based on location and max fees
  const filteredColleges = colleges.filter(college =>
    college.location.toLowerCase() === preferredLocation.toLowerCase() &&
    college.fees <= parseInt(maxFees)
  );

  // Calculate the score for each college
  const scoredColleges = filteredColleges.map(college => {
    const score = (college.ranking * parseInt(rankingWeight)) +
                  (college.fees / parseInt(maxFees) * parseInt(feesWeight));

    return { ...college, score: score.toFixed(2) };
  });

  // Sort colleges by score (lower score is better)
  const sortedColleges = scoredColleges.sort((a, b) => a.score - b.score);

  // Display the filtered and sorted colleges
  return (
    <div>
      <h2>Ranked Colleges:</h2>
      {sortedColleges.length === 0 ? (
        <p>No colleges match your preferences.</p>
      ) : (
        <ul>
          {sortedColleges.map(college => (
            <li key={college.name}>
              Name: {college.name}, Location: {college.location}, Fees: {college.fees}, Ranking: {college.ranking}, Score: {college.score}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollegeRanking;
