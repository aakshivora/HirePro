// Mock data for candidates (replace with your actual data)
const candidates = [
    { name: "John Doe", location: "New York", jobRole: "Software Developer" },
    { name: "Jane Smith", location: "London", jobRole: "Product Manager" },
    { name: "Alex Johnson", location: "San Francisco", jobRole: "Data Scientist" },
    // Add more candidate objects here...
  ];
  
  const searchForm = document.getElementById("search-form");
  const candidateList = document.getElementById("candidate-list");
  
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value.toLowerCase();
    const jobRole = document.getElementById("job-role").value.toLowerCase();
    
    // Filter candidates based on location and job role
    const filteredCandidates = candidates.filter(function(candidate) {
      return candidate.location.toLowerCase().includes(location) && candidate.jobRole.toLowerCase().includes(jobRole);
    });
  
    displayCandidates(filteredCandidates);
  });
  
  function displayCandidates(candidates) {
    candidateList.innerHTML = "";
  
    if (candidates.length === 0) {
      candidateList.innerHTML = "<p>No candidates found.</p>";
      return;
    }
  
    candidates.forEach(function(candidate) {
      const candidateCard = document.createElement("div");
      candidateCard.classList.add("candidate-card");
  
      const nameElement = document.createElement("h3");
      nameElement.textContent = candidate.name;
  
      const locationElement = document.createElement("p");
      locationElement.textContent = "Location: " + candidate.location;
  
      const jobRoleElement = document.createElement("p");
      jobRoleElement.textContent = "Job Role: " + candidate.jobRole;
  
      candidateCard.appendChild(nameElement);
      candidateCard.appendChild(locationElement);
      candidateCard.appendChild(jobRoleElement);
  
      candidateList.appendChild(candidateCard);
    });
  }
  