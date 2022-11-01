import { decode, encode } from "base-64";
import { decodeXML } from "entities";

export function decodeHTMLEntities(text: string): string {
    return decodeXML(text);
}

export function fromBase64(text: string): string {
    return decode(text);
}

export function toBase64(text: string): string {
    return encode(text);
}
