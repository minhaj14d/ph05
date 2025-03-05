const completeButtons = document.querySelectorAll('.completed');

  completeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const taskTitle = this.parentElement.parentElement.querySelector('h3, p').textContent;

      this.classList.remove('bg-blue-800');
      this.classList.add('bg-gray-500', 'cursor-not-allowed');
      this.textContent = 'Completed ✔';
      this.disabled = true;

      alert(`Board updated successfully!`);

      const log = document.querySelector('.activity-log');
      const newLogItem = document.createElement('div');
      newLogItem.className = 'log-item bg-white border border-gray-200 rounded-md p-4 mb-2';
      const timestamp = new Date().toLocaleTimeString();
      newLogItem.innerHTML = `<span>You have completed the task "${taskTitle}" at ${timestamp}</span>`;
      log.appendChild(newLogItem);

  const taskCountElement = document.querySelector('.task-count');
  let currentCount = parseInt(taskCountElement.textContent, 10);
  if (currentCount > 0) {
    taskCountElement.textContent = currentCount - 1;
  }

  const taskCount2 = document.querySelector('.task-count-2');
  let currentCount2 = parseInt(taskCount2.textContent, 10);
  if (currentCount2 >= 0) {
    taskCount2.textContent = currentCount2 + 1;
  }
    });
  });

  const clearHistoryButton = document.querySelector('.clear-history');
  clearHistoryButton.addEventListener('click', function () {
    const log = document.querySelector('.activity-log');
    const logItems = log.querySelectorAll('.log-item');

    logItems.forEach(item => item.remove());

    alert('Activity log is clear!');
  });