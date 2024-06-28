import Twilio from 'twilio/lib/rest/Twilio.js'

export const pacoteIndex = async (req, res) => {
    const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    try {
      await client.messages.create({
        body: `Alarme disparado!!`,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+555399873937'
      });
      console.log('✅ SMS enviado com sucesso');
    } catch (error) {
      console.error('⚠️ Erro ao enviar SMS: ', error);
    }
  }