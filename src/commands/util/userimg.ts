import { cmd } from '@enderbot/types';
import { profileImage } from 'discord-arts';
import { userGet } from '../../structures/utils/functions';
const userimg: cmd = {
	name: 'userimg',
	alias: [],
	run: async (_client, message, args) => {
		const user = await userGet(message, args) || message.member;

		const buffer = await profileImage(user?.user.id as string, {
			customTag: 'Admin',
			squareAvatar: true,
			presenceStatus: 'phone',
			badgesFrame: true,
			customBackground: 'https://cdn.discordapp.com/attachments/988614407930146906/1136025281426112632/2Q.png?ex=65c28f7d&is=65b01a7d&hm=f01b5dac81c45958dcc7996f6f8655607733001bee317875131f0decd847275b&',
			borderColor: '#4070F4'
		});
		message.reply({ files: [buffer]});
	}
};
export default userimg;