import amqp from "amqplib";

async function main() {
  const connection = await amqp.connect("amqp://localhost");
  console.log("connection");
  //console.log(connection);
  // especie de sessão
  const channel = await connection.createChannel();
  //console.log(channel);
  channel.assertQueue("test", { durable: true });
  const input = {
    rideId: "1234566789",
    fare: 10,
  };
  channel.sendToQueue("test", Buffer.from(JSON.stringify(input)));
}

main();

//npx ts-node producer.ts
