let budget = 0;
let spent = 0;

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const icon = document.getElementById("theme-toggle");
  icon.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

document.getElementById("total-budget").addEventListener("input", function () {
  budget = parseInt(this.value) || 0;
  updateSummary();
});

function addExpense() {
  const category = document.getElementById("category").value;
  const amount = parseInt(document.getElementById("amount").value);

  if (!category || !amount || amount < 0) {
    alert("Please enter a valid category and amount.");
    return;
  }

  spent += amount;

  const li = document.createElement("li");
  li.textContent = `${category} - ₹${amount}`;
  document.getElementById("expense-list").appendChild(li);

  updateSummary();

  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
}

function updateSummary() {
  document.getElementById("budget-amount").textContent = budget;
  document.getElementById("spent-amount").textContent = spent;
  document.getElementById("remaining-amount").textContent = budget - spent;
}
