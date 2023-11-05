import {getContact} from "./data/sample";

export default async function loader() {
    const contacts = await getContact();
    return {contacts};
}