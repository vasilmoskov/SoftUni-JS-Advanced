function notify(message) {
  let notificationElement = document.getElementById('notification');
  notificationElement.textContent = message;
  notificationElement.style.display = 'block';

  let dataNotificationAttribute = notificationElement.getAttribute('data-notification-set');

  if (dataNotificationAttribute !== 'true') {
    notificationElement.setAttribute('data-notification-set', 'true');
    notificationElement.addEventListener('click', notificationElementHandler);
  }

  function notificationElementHandler(e) {
    notificationElement.style.display = 'none';
  }
}