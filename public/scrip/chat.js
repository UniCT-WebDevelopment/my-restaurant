function createMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    if (message.user_id === 17) {
        messageElement.classList.add('my_message');
    } else {
        messageElement.classList.add('frnd_message');
    }

    const messageContent = document.createElement('p');
    messageContent.textContent = message.testo;

    const messageTimestamp = document.createElement('span');
    messageTimestamp.textContent = message.created_at;

    messageContent.appendChild(messageTimestamp);
    messageElement.appendChild(messageContent);



    return messageElement;
}


function showMessages(data){
    const chatBox = document.querySelector('.chatBox');
    chatBox.innerHTML = '';
    if(data.length == 0){
        chatBox.textContent = 'Nessun messaggio';
        return;
    }
    for(message of data){
        chatBox.append(createMessage(message));
    }
}


function messagesData(data){
    showMessages(data);
    var chatBox = document.querySelector(".chatBox");
    chatBox.scrollTop = chatBox.scrollHeight;
}


function productsResponse(response){
    return response.json();
}


function createChat(chat) {
    const block = document.createElement('div');
    block.classList.add('block');

    block.addEventListener('click', function(){
        fetch(BASE_URL + 'chat/' + encodeURIComponent(chat.id)).then(productsResponse).then(messagesData);
        const userId=document.getElementById('user_id');
        userId.value=chat.user_id;
    });

    const details = document.createElement('div');
    details.classList.add('details');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');

    const nameHeader = document.createElement('h4');
    nameHeader.textContent = `${chat.user_nome} ${chat.user_cognome}`;

    const timeParagraph = document.createElement('p');
    timeParagraph.classList.add('time');
    const isoDate = chat.updated_at;
    const formattedDate = new Date(isoDate).toLocaleString();

    timeParagraph.textContent = formattedDate;

    nameDiv.appendChild(nameHeader);
    nameDiv.appendChild(timeParagraph);

    const messageP = document.createElement('div');
    messageP.classList.add('message_p');
    
    const messageText = document.createElement('p');
    messageText.textContent = chat.last_message;

    messageP.appendChild(messageText);

    details.appendChild(nameDiv);
    details.appendChild(messageP);

    block.appendChild(details);

    return block;
}

function show(data){
    console.log(data);
    const chatlist = document.querySelector('.chatlist');
    chatlist.innerHTML = '';
    if(data.length == 0){
        chatlist.textContent = 'Nessuna chat';
        return;
    }
    for(chat of data){
        chatlist.append(createChat(chat));
    }
    fetch(BASE_URL + 'chat/' + encodeURIComponent(data[0].id)).then(productsResponse).then(messagesData);
}


function chatData(data){
    show(data);
}


fetch(BASE_URL + 'chat/getChat').then(productsResponse).then(chatData);

