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

    near call $CONTRACT registrarUsuario '{ "idCuenta":"string", "nombre":"string", "telefono":"string", "correo":"string", "password":"string"}' --account-id <your test account>

## Comando para consultar todos los usuarios:

    near view $CONTRACT consultarUsuarios

## Comando para consultar un usuario por id:

    near view $CONTRACT consultarUsuario '{"idCuenta":"cuenta.testnet"}'

## Comando para guardar un servicio:

    near call $CONTRACT registrarServicio '{ "nombre":"string", "descripción":"string", "costo":"u64", "idUsuario":"string"}' --account-id <your test account>

## Comando para consultar todos los servicios:

    near view $CONTRACT consultarServicios

## Comando para consultar todos los servicios de un usuario:

    near view $CONTRACT consultarServiciosUsuario '{"idUsuario":"string"}'

## Comando para consultar un servicio por su id:

    near view $CONTRACT consultarServicio '{"idServicio":"string"}'

## Comando para agregar un comentario a un servicio:

    near call $CONTRACT agregarComentario '{"idServicio":"u64", "idUsuario":"string", "comentario":"string"}' --account-id <your test account>

## Comando para consultar todos los comentarios de un servicio:

    near view $CONTRACT consultarComentarios '{"idServicio":"u64"}'

## Comando para agregar una valoracion a un servicio:

    near call $CONTRACT agregarValoracion '{"idServicio":"u64", "idUsuario":"string", "valoracion":"u64"}' --account-id <your test account>

## Comando para consultar todas las valoraciones de un servicio:

    near view $CONTRACT consultarValoracion '{"idServicio":"u64"}'

## 🤖 Pruebas

Utilice el siguiente comando para ejecutar las pruebas:

    yarn test

## 🖥️ Interfáz gráfica de usuario

    https://www.figma.com/team_invite/redeem/Yzf4HvEJIRSqPXOGI2aUDZ
