const { EventBridgeClient, PutEventsCommand } = require('@aws-sdk/client-eventbridge');

const client = new EventBridgeClient({
  region: 'us-east-1', // Replace with your region
  // Optionally, you can send credentials directly here
  // credentials: { accessKeyId: "YOUR_ACCESS_KEY-ID", secretAccessKey: "YOUR_SECRET_ACCESS_KEY" }
});

async function sendEvent() {
  const params = {
    Entries: [
      {
        Source: 'my.application', // Replace with your source
        DetailType: 'My Event', // Replace with your detail type
        Detail: JSON.stringify({ key1: 'value1', key2: 'value2' }), // Detail in JSON format
        EventBusName: 'default', // Change as necessary, or use your specific event bus
      },
    ],
  };

  try {
    const data = await client.send(new PutEventsCommand(params));
    console.log('Event sent successfully:', data);
  } catch (error) {
    console.error('Error sending event:', error);
  }
}

// Main function, can also be used with Playwright to trigger in a certain context
(async () => {

  // After your automation or at a specific event
  await sendEvent();


})();
