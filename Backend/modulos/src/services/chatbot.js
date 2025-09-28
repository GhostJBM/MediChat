import { SessionsClient } from '@google-cloud/dialogflow';
import { v4 as uuidv4 } from 'uuid';
import { config } from '../config.js';

const sesiones = new Map();

const sessionClient = new SessionsClient({
  credentials: {
    client_email: config.GOOGLE_CLIENT_EMAIL,
    private_key: config.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  },
  projectId: config.GOOGLE_PROJECT_ID,
});

export async function getChatbotReply(message,sessionId ) {

  const sessionPath = sessionClient.projectAgentSessionPath(config.GOOGLE_PROJECT_ID, sessionId);
  const previousContexts = sesiones.get(sessionId) || [];
    
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text: message,
        languageCode: config.DF_LANGUAGE_CODE,
      },
    },
    
    queryParams: {
    contexts: previousContexts,
    }
  };

  const responses = await sessionClient.detectIntent(request);
  const result = responses[0].queryResult;

  sesiones.set(sessionId, result.outputContexts || [])

  return result.fulfillmentText
}
