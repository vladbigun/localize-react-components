import axios from "axios";

export default class ItemsSignupForm {
    static async getItems() {
        return await axios.post('/agents/api/select-options', {});
    }
}