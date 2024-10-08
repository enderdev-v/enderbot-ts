import { Client } from "seyfert";
import { enderbotConfig } from "./classes/Config.js";
import { enderbotConfigType } from "#enderbot/types";
import { enderbotHCmd } from "./classes/handleCmd.js";
import { enderbotLogger } from "./classes/Logger.js";

export class enderbot extends Client<true> {
    override logger: enderbotLogger = new enderbotLogger({
        name: "Using Seyfert!!"
    });
    config: enderbotConfigType = new enderbotConfig();
    constructor() {
        super({ commands: { prefix: () => this.config.prefix } });
    }
    async run() {
        this.setServices({
            handleCommand: enderbotHCmd,
        });
        await this.start();
        await this.uploadCommands();
        this.logger.enderbot("Already nice")
    }
}