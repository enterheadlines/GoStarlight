const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const apiKey = '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';

async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage === '') return;

    chatBox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    userInput.value = '';

    try {
        console.log('Sending request to Groq API...');
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "mixtral-8x7b-32768",
                messages: [
                    { role: "system", content: "You are a helpful AI assistant." },
                    { role: "user", content: userMessage }
                ],
                temperature: 0.9,
                max_tokens: 1024,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const aiResponse = data.choices[0].message.content;

        // Delay the display of the AI response
        setTimeout(() => {
            chatBox.innerHTML += `<p><strong>StarlightAI:</strong> ${aiResponse}</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;
            console.log('Response received and displayed');
        }, 1000); // 1 second delay
    } catch (error) {
        console.error('Error:', error);
        chatBox.innerHTML += `<p><strong>Error:</strong> Failed to get AI response. Error details: ${error.message}</p>`;
    }
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

console.log('Script loaded successfully');