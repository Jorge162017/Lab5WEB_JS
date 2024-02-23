document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Crear contenedor principal
    const chatContainer = document.createElement('div');
    chatContainer.style.display = 'flex';
    chatContainer.style.justifyContent = 'space-between';
    chatContainer.style.width = '100%';
    chatContainer.style.height = '100vh'; // Ajustar a la altura de la ventana

    // Crear contenedor de lista de chats
    const chatListContainer = document.createElement('div');
    chatListContainer.style.width = '30%';
    chatListContainer.style.backgroundColor = 'rgb(233, 236, 239)';
    chatListContainer.innerText = 'CHATS'; // Placeholder

    // Función para agregar chats a la lista
    function agregarChatALaLista(nombre, imagenUrl) {
        const chatCard = document.createElement('div');
        chatCard.style.display = 'flex';
        chatCard.style.alignItems = 'center';
        chatCard.style.padding = '10px';
        chatCard.style.borderBottom = '1px solid #ccc';
        chatCard.style.cursor = 'pointer';

        const img = document.createElement('img');
        img.src = imagenUrl;
        img.style.width = '50px'; 
        img.style.height = '50px';
        img.style.borderRadius = '50%';
        img.style.objectFit = 'cover';
        img.style.marginRight = '10px';

        const chatName = document.createElement('span');
        chatName.innerText = nombre;
        //chatName.style.fontWeight = 'bold';

        chatCard.appendChild(img);
        chatCard.appendChild(chatName);

        chatListContainer.appendChild(chatCard);

        // Evento de clic para la tarjeta del chat
        chatCard.addEventListener('click', function() {
            chatHeaderTitle.innerText = nombre; // Solo actualiza el título, no todo el encabezado
        });
    }

    // Datos de ejemplo para los chats
    const datosChats = [
        { nombre: "Spike", imagenUrl: "spike.jpeg" },
        { nombre: "Stu", imagenUrl: "stu.jpeg" },
        { nombre: "Jessie", imagenUrl: "jessie.jpeg" },
        { nombre: "Leon", imagenUrl: "leon.jpeg" },
        { nombre: "Pam", imagenUrl: "pam.jpeg" },
        { nombre: "Dynamike", imagenUrl: "dynamike.jpeg" },
        { nombre: "Penny", imagenUrl: "pennie.jpeg" }
    ];

    // Añadir los chats a la lista
    datosChats.forEach(chat => {
        agregarChatALaLista(chat.nombre, chat.imagenUrl);
    });

    // Crear contenedor del chat actual
    const currentChatContainer = document.createElement('div');
    currentChatContainer.style.width = '70%';
    currentChatContainer.style.display = 'flex';
    currentChatContainer.style.flexDirection = 'column';

    const chatHeader = document.createElement('div');
    chatHeader.style.backgroundColor = 'rgb(108, 117, 125)';
    chatHeader.style.padding = '20px';
    chatHeader.style.display = 'flex';
    chatHeader.style.justifyContent = 'space-between';
    chatHeader.style.alignItems = 'center';
    chatHeader.style.fontSize = '20px';
    chatHeader.style.fontWeight = 'bold';

    // Crear un elemento para el título del chat
    const chatHeaderTitle = document.createElement('span');
    chatHeaderTitle.innerText = 'Nombre del Chat'; // Placeholder para el título
    chatHeader.appendChild(chatHeaderTitle);

    // Botón para cambiar el modo
    const modeToggleButton = document.createElement('button');
    modeToggleButton.innerText = 'Modo Oscuro';
    modeToggleButton.style.padding = '10px';
    chatHeader.appendChild(modeToggleButton); // Añadir el botón al encabezado del chat

    // Crear área del chat
    const chatArea = document.createElement('div');
    chatArea.style.flexGrow = '1';
    chatArea.style.backgroundColor = 'rgb(248, 249, 250)';
    chatArea.style.overflow = 'auto';
    chatArea.innerText = ' '; // Placeholder

    // Crear área de entrada para mensajes
    const messageInputArea = document.createElement('div');
    messageInputArea.style.display = 'flex';
    messageInputArea.style.padding = '30px';
    messageInputArea.style.backgroundColor = 'rgb(108, 117, 125)';

    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Escribe un mensaje';
    messageInput.style.flexGrow = '1';
    messageInput.style.marginRight = '10px';
    messageInput.style.resize = 'none';
    messageInput.style.padding = '10px';
    messageInput.style.border = '1px solid #ccc';
    messageInput.style.borderRadius = '4px';
    messageInput.style.height = '30px';
    messageInput.maxLength = 140;

     // Evento para enviar mensaje con Enter
     messageInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault(); // Evitar el salto de línea
            enviarMensaje(); // Envía el mensaje
        }
    });

    const sendButton = document.createElement('button');
    sendButton.innerText = 'Enviar';
    sendButton.onclick = function() {
        console.log('Mensaje enviado:', messageInput.value);
        messageInput.value = ''; // Limpiar el campo después de enviar
    };

    // Función para enviar mensajes
    function enviarMensaje() {
        if (messageInput.value.trim() !== '') {
            const mensaje = document.createElement('div');
            mensaje.innerText = messageInput.value;
            mensaje.className = 'mensaje';
            mensaje.style.padding = '10px';
            mensaje.style.margin = '5px 0';
            mensaje.style.borderRadius = '10px';
            mensaje.style.backgroundColor = 'rgb(202, 240, 248)';
            chatArea.appendChild(mensaje);
            chatArea.scrollTop = chatArea.scrollHeight;
            mensaje.style.textAlign = 'right';
            mensaje.style.marginLeft = '10px';
            mensaje.style.marginRight = '10px';
            messageInput.value = '';
        }
    }

    // Eventos para enviar mensaje
    sendButton.onclick = enviarMensaje;
    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            enviarMensaje();
        }
    });

    // Añadir el campo de texto y el botón al área de entrada
    messageInputArea.appendChild(messageInput);
    messageInputArea.appendChild(sendButton);

    // Estructurar los contenedores
    currentChatContainer.appendChild(chatHeader);
    currentChatContainer.appendChild(chatArea);
    currentChatContainer.appendChild(messageInputArea); // Añadir el área de entrada al final
    chatContainer.appendChild(chatListContainer);
    chatContainer.appendChild(currentChatContainer);

    // Añadir al body
    body.appendChild(chatContainer);

    // Estilos para modo oscuro
    const darkModeStyles = {
        backgroundColor: 'rgb(25, 25, 25)', // Fondo oscuro para el contenedor principal
        color: 'white', // Texto blanco
        chatListContainer: 'rgb(73, 80, 87)', // Fondo más oscuro para la lista de chats
        chatHeader: 'rgb(52, 58, 64)', // Fondo oscuro para el encabezado
        chatArea: 'rgb(33, 37, 41)', // Fondo oscuro para el área del chat
        messageInputArea: 'rgb(52, 58, 64)', // Fondo oscuro para el área de entrada
        mensaje: {
            backgroundColor: 'rgb(2, 62, 138)', // Un fondo más oscuro para los mensajes
            color: 'rgb(200, 200, 200)', // Texto más claro para los mensajes
        }
    };

    // Función para cambiar el modo
    let isDarkMode = false; // Estado inicial del modo
    function toggleMode() {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            chatContainer.style.backgroundColor = darkModeStyles.backgroundColor;
            chatContainer.style.color = darkModeStyles.color;
            chatListContainer.style.backgroundColor = darkModeStyles.chatListContainer;
            chatHeader.style.backgroundColor = darkModeStyles.chatHeader;
            chatArea.style.backgroundColor = darkModeStyles.chatArea;
            messageInputArea.style.backgroundColor = darkModeStyles.messageInputArea;
            modeToggleButton.innerText = 'Modo Claro';
            document.querySelectorAll('.mensaje').forEach(mensaje => {
                mensaje.style.backgroundColor = darkModeStyles.mensaje.backgroundColor;
                mensaje.style.color = darkModeStyles.mensaje.color;
            });
        } else {
            chatContainer.style.backgroundColor = '';
            chatContainer.style.color = '';
            chatListContainer.style.backgroundColor = 'rgb(233, 236, 239)';
            chatHeader.style.backgroundColor = 'rgb(108, 117, 125)';
            chatArea.style.backgroundColor = 'rgb(248, 249, 250)';
            messageInputArea.style.backgroundColor = 'rgb(108, 117, 125)';
            modeToggleButton.innerText = 'Modo Oscuro';
            document.querySelectorAll('.mensaje').forEach(mensaje => {
                mensaje.style.backgroundColor = 'rgb(202, 240, 248)'; // Revertir al estilo original
                mensaje.style.color = ''; // Revertir al estilo original
            });
        }
    }

    // Evento de clic para el botón de cambio de modo
    modeToggleButton.addEventListener('click', toggleMode);
});


