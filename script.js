// Simulate loading animation
setTimeout(() => {
  document.getElementById('status').textContent = "SYSTEM READY // AWAITING USER INPUT";
  document.getElementById('loadingProgress').style.width = '100%';
}, 2000);

// Tab switching functionality
function showTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Deactivate all buttons
  document.querySelectorAll('.tab-button').forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(tabName + '-tab').classList.add('active');
  
  // Activate clicked button
  event.currentTarget.classList.add('active');
}