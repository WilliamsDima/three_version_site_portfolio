import axios from "axios";

const instance = {
    baseURL: 'https://api.telegram.org/bot',
    key: '1772757969:AAEuseFJ5v0VLVFEIaU8cu8piASf3h8-WzM',
    chatId: '-577220340'

}

export const formAPI = {

    form( data ) {
        let n =  'Имя пользователя: ' +  data.name +  '          ';

        let e =  'Email: ' + data.email + '          ';

        let m =  'Сообщение: ' +  data.text;

        return axios.post(instance.baseURL + instance.key + '/sendMessage?chat_id=' + instance.chatId + '&parse_mode=html&text=' 
        + n + e + m);
    }
};