import namor from "namor";
import { nanoid } from "nanoid";

export const createData = (n) => {
    const arr = [];
    for (let index = 0; index <= n; index++) {
        arr.push({
            id: nanoid(),
            firstName: namor.generate({ words: 1, saltLength: 0 }),
            lastName: namor.generate({ words: 1, saltLength: 0 }),
            totalTimeLivedinSeconds: Math.floor(Math.random() * 1000000),
          })
        
    }
    return arr;

};
