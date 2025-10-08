let selectedIndex = null;
// Function to handle form change events
function handleChange(event) {
  const field = event.target;
  const value = field.value;

  // Store field values in the localStorage or sessionStorage
  localStorage.setItem(field.name, value);
}

// Function to handle form blur events
function handleBlur(event) {
  const field = event.target;
  // You can perform validation here if needed
}

// Function to handle form submission
document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      age: document.getElementById("age").value,
      gender: document.getElementById("gender").value,
      subscription:
        document.querySelector('input[name="subscription"]:checked')?.value ||
        "No",
      terms: document.getElementById("terms").checked,
    };

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (selectedIndex !== null) {
      users[selectedIndex] = formData;
      selectedIndex = null;
    } else {
      // Add the new user
      users.push(formData);
    }

    // Save the updated users to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear the form
    document.getElementById("userForm").reset();

    // Update the table with the latest data
    updateTable();
  });

// Function to update the table with user data from localStorage
function updateTable() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const tableBody = document
    .getElementById("userTable")
    .getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows

  // Populate the table with new rows
  users.forEach((user, index) => {
    const row = tableBody.insertRow();
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.age}</td>
      <td>${user.gender}</td>
      <td>${user.subscription}</td>
      <td>
        <button onclick="editUser(${index})">Edit</button>
        <button onclick="deleteUser(${index})">Delete</button>
      </td>
    `;
  });
}

// Function to edit a user
function editUser(index) {
  selectedIndex = index;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users[index];

  // Pre-fill the form with the selected user's data
  document.getElementById("name").value = user.name;
  document.getElementById("email").value = user.email;
  document.getElementById("age").value = user.age;
  document.getElementById("gender").value = user.gender;
  document.querySelector(
    `input[name="subscription"][value="${user.subscription.toLowerCase()}"]`
  ).checked = true;
  document.getElementById("terms").checked = user.terms;
}

// Function to delete a user
function deleteUser(index) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  users.splice(index, 1); // Remove the user at the specified index

  // Save the updated list back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Update the table
  updateTable();
}

// Call updateTable() on page load to display stored users
window.onload = updateTable;
