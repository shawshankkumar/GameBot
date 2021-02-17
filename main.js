const discord = require("discord.js");
const config = require('./config.json');

const client = new discord.Client();

const prefix = "*";                                                           //comment start 

const fs = require("fs");

client.commands = new discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}                                                                        //comment end            

client.once("ready", (err) => {
    console.log("Hello Human!!");
    message.channel.send("Hey I Am Active Now")
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === "help") {                             //Help
        client.commands.get("help").execute(message, args);
    }

    else
        message.channel.send("Message Barbaad Behenchod")    // To test the working of prefix during introduction of new commands

});





client.login(config.token);