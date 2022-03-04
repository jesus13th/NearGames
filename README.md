# `NEARGames`

# 📄 Descripción

NearGames es un Smart-Contrat en el que los usuarios se pueden registar, crear juegos y los demas usuarios podran comprarlos.
Las funcionalidades del Smart-Contrat son:

1. Crear Usuario.
2. Consultar Usuario por su Id.
3. Consultar a todos los usuarios.
4. Registrar un videojuego.
5. Consultar un Videojuego por su Id.
6. Consultar todos los videojuegos existentes.
7. Comprar videojuego para un usuario

# 📦 Instalación

Para ejecutar este proyecto localmente, debe seguir los siguientes pasos:

## Paso 1: Prerequisitos

1. Asegúrese de haber instalado [Node.js] ≥ 12 (recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
5. Instale NEAR CLI globalmente: [near-cli] es una interfaz de línea de comandos (CLI) para interactuar con NEAR blockchain

   yarn install --global near-cli

## Step 2: Configuración de NEAR CLI

Configure su near-cli para autorizar su cuenta de prueba creada recientemente:

    near login

## Paso 3: Cree y realice una implementación de desarrollo de contrato inteligente

Para crear el Smart-Contrat de NearGames en el servidor de desarrollo local ejecute la linea `yarn build`, Este comando crea el contrato inteligente y para desplegar el contrato, ejecutar el comando `yarn deploy`. Una vez generado, le mostrara su contrato con la iniciacion 'dev-'.

# 📑 Explorando los métodos de contrato inteligente NearGames

Las siguientes lineas de comando le permiten interactuar con los métodos del contrato inteligente utilizando NEAR CLI.

## Comando para crear usuario:

    near call $CONTRACT RegistrarUsuario '{ "UserId":"string", "Email":"string"}' --account-id <"your test account">

## Comando para consultar todos los usuarios:

    near view $CONTRACT ConsultarUsuarios

## Comando para consultar un usuario por id:

    near view $CONTRACT ConsultarUsuario '{"UserId":"string"}'

## Comando para Crear un videojuego

near call $CONTRACT RegistrarVideojuego '{ "Name":"string", "Price":"string"}' --account-id <"your testaccount">

## Comando para consultar todos los videojuegos:

    near view $CONTRACT ConsultarVideojuegos

## Comando para consultar un videojuego por nombre:

    near view $CONTRACT ConsultarVideojuego '{"Name":"string"}'

## Comando para realizar la compra de un videojuego para un usuario:

    near view $CONTRACT ComprarVideojuego '{"UserId":"string", "Name":"string"}'

## 🖥️ Interfáz gráfica de usuario

    https://www.figma.com/team_invite/redeem/
