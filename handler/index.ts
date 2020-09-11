import axios from 'axios';

export const warmUp = async () => {
    const response = await axios.get<{}>('https://us-central1-fyp-whatsappchatbot.cloudfunctions.net/webApi/warmup');
    return response;
}

