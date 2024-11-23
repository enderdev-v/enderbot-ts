import { createEvent } from "seyfert";
import ms from "ms"
export default createEvent({
    data: { name: "messageCreate" },
    async run(message) {

        if (message.author.bot) return;

        setTimeout(() => {
            if (message.content.includes(("hola").toLowerCase()) || message.content.includes(("ola").toLowerCase())) {
                message.reply({ content: `hola ${message.author} musho gusto` });
            }
        }, ms("2d"))
        if (!message.content.startsWith("enderbot ")) return;
        if (message.content.includes(("amigos").toLowerCase())) {
            message.reply({ content: `hola mis amigos son ThemurftBot y endkachu :D` });
        }
        if (message.content.includes(("Cual es tu pokemon favorito").toLowerCase())) {
            message.reply({ content: `hola mi pokemon favorito es: \n Scoorbunny y Pikachu` });
        }
        if (message.content.includes(("quien eres").toLowerCase())) {
            message.reply({ content: `Soy enderbot, un bot creado por enderdev-v/endercrack mucho gusto :D ` });
        }
    }
})