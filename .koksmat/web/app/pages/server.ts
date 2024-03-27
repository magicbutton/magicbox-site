"use server"

import { XMLParser } from "fast-xml-parser";
import * as fs from "fs";
import { Root } from "./template_schema";




export async function loadTemplate()  {
    

const xmlFile =  "/Users/nielsgregersjohansen/code/koksmat/ui/apps/www/app/pages/magic365/home/copypagetemplate.xml"
const options = {
    ignoreAttributes: false,
    attributeNamePrefix : "@_"
};
const parser = new XMLParser(options)
const XMLdata = fs.readFileSync(xmlFile, "utf8")
let jObj = parser.parse(XMLdata);
return jObj as any as Root;

}