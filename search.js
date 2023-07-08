const candidates = [
    { name: "John Doe", location: "New York", jobRole: "Software Developer" },
    { name: "Jane Smith", location: "London", jobRole: "Product Manager" },
    { name: "Alex Johnson", location: "San Francisco", jobRole: "Data Scientist" },
    { name: "Emma Thompson", location: "New York City", jobRole: "Software Engineer" },
    { name: "Michael Anderson", location: "Chicago", jobRole: "Product Manager" },
    { name: "Sophia Martinez", location: "Los Angeles", jobRole: "UX Designer" },
    { name: "William Davis", location: "Seattle", jobRole: "Data Analyst" },
    { name: "Olivia Wilson", location: "Boston", jobRole: "Marketing Manager"},
    { name: "James Brown", location: "Austin", jobRole: "Full Stack Developer" },
    { name: "Ava Taylor", location: "San Diego", jobRole: "Graphic Designer" },
    { name: "John Johnson", location: "Denver", jobRole: "Business Analyst" },
    { name: "Isabella Anderson", location: "Atlanta", jobRole: "Project Manager"},
    { name: "Elijah Thomas", location: "Houston", jobRole: "Marketing Manager"},
    { name: "Mia Jackson", location: "Philadelphia", jobRole: "Software Tester"},
    { name: "Benjamin Harris", location: "Miami", jobRole: "UX Researcher"},
    { name: "Charlotte Clark", location: "San Francisco", jobRole: "Product Designer"},
    { name: "Daniel Turner", location: "Dallas", jobRole: "Frontend Developer"},
    { name: "Amelia Green", location: "Washington, D.C.", jobRole: "Data Scientist"},
    { name: "Henry Hill", location: "Phoenix", jobRole: "Marketing Analyst"},
    { name: "Lily Adams", location: "Portland", jobRole: "Business Development Manager"},
    { name: "Alexander Murphy", location: "Detroit", jobRole: "Software Architect" },
    { name: "Sofia Foster", location: "San Jose", jobRole: "Marketing Manager"},
    { name: "Jack Wright", location: "Raleigh", jobRole: "AI Researcher"},    
  ];
  
  const searchForm = document.getElementById("search-form");
  const candidateList = document.getElementById("candidate-list");
  
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const location = document.getElementById("location").value.toLowerCase();
    const jobRole = document.getElementById("job-role").value.toLowerCase();
    
    
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
  