import { SlashCommandBuilder, MessageFlags } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('List of commands.'),
    async run(interaction) {
        const commandList = interaction.client.commands
            .map((cmd) => `**/${cmd.data.name}**: ${cmd.data.description}`)
            .join("\n");

        await interaction.reply({
            content: `Available commands:\n${commandList}`,
            flags: MessageFlags.Ephemeral,
        });
    },
};