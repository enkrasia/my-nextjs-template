"use server"

import fs from "node:fs/promises";

export async function readFile(path: string) {
    try {
        const file = await fs.readFile(path);
        return file;
    }
    catch (error) {
        throw error;
    }
}

export async function writeFile(path: string, content: string) {
    try {
        await fs.writeFile(path, content, "utf-8");
        console.log(`File written in ${path}`);
    }
    catch (error) {
        console.log(`Writing file in ${path} failed`);
        throw error;
    }
}