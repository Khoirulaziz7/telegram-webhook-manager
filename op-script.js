// WOODcraft

async function setWebhook() {
    const webhookUrl = document.getElementById('webhookUrl').value;
    const botToken = document.getElementById('botToken').value;
    const responseText = document.getElementById('response');
    const successAlert = document.getElementById('successAlert');

    if (!botToken) {
        responseText.innerHTML = "Error: Bot token is required!";
        return;
    }

    responseText.innerHTML = "Setting webhook...";

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook?url=${webhookUrl}`);
        const result = await response.json();

        if (result.ok) {
            responseText.innerHTML = "";
            successAlert.style.display = "block"; // Show success alert
            successAlert.innerHTML = "Successfully Set!";
            setTimeout(() => {
                successAlert.style.display = "none"; // Hide after 3 seconds
            }, 3000);
        } else {
            responseText.innerHTML = "Error: " + result.description;
        }
    } catch (error) {
        responseText.innerHTML = "Failed to set webhook!";
    }
}

async function deleteWebhook() {
    const botToken = document.getElementById('botToken').value;
    const responseText = document.getElementById('response');
    const successAlert = document.getElementById('successAlert');

    if (!botToken) {
        responseText.innerHTML = "Error: Bot token is required!";
        return;
    }

    responseText.innerHTML = "Deleting webhook...";

    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/deleteWebhook`);
        const result = await response.json();

        if (result.ok) {
            responseText.innerHTML = "";
            successAlert.style.display = "block"; // Show success alert
            successAlert.innerHTML = "Successfully Deleted!";
            setTimeout(() => {
                successAlert.style.display = "none"; // Hide after 3 seconds
            }, 3000);
        } else {
            responseText.innerHTML = "Error: " + result.description;
        }
    } catch (error) {
        responseText.innerHTML = "Failed to delete webhook!";
    }
}
