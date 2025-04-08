 // Function to download local storage as a JSON file
 document.getElementById('saveStorage').addEventListener('click', () => {
  const localStorageData = { ...localStorage }; // Get all local storage data
  const jsonData = JSON.stringify(localStorageData, null, 2); // Convert to JSON string
  const blob = new Blob([jsonData], { type: 'application/json' }); // Create a Blob
  const url = URL.createObjectURL(blob); // Create a URL for the Blob

  // Create a temporary link to trigger the download
  const a = document.createElement('a');
  a.href = url;
  a.download = 'localStorage.json'; // File name
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url); // Clean up the URL object
});

// Function to load JSON data into local storage
document.getElementById('loadStorage').addEventListener('click', () => {
  // Create an invisible file input element
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json'; // Only accept JSON files

  // When a file is selected
  input.addEventListener('change', (event) => {
      const file = event.target.files[0]; // Get the selected file
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
          try {
              const jsonData = JSON.parse(e.target.result); // Parse the JSON file
              for (const key in jsonData) {
                  localStorage.setItem(key, jsonData[key]); // Load data into local storage
              }
              alert('Local storage successfully updated!');
          } catch (error) {
              alert('Invalid JSON file. Please check the file and try again.');
          }
      };
      reader.readAsText(file); // Read the file as text
  });

  // Trigger the file input click to open the file dialog
  input.click();
});