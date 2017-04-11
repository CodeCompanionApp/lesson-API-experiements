
import chokidar from 'chokidar';
import { join as pathJoin } from 'path';
import { readFileSync } from 'fs';

import lesson from './lesson.js';

const selectedFolder = 'files'

function createAgent() {
    const fileWatcher = chokidar.watch('.', {cwd:selectedFolder});

    return {
        watcher: {
            on(evt, cb) {
                //TODO: limit possible events (for security)?
                fileWatcher.on(evt, cb);
            },
        },
        fileContents(path) {
            return readFileSync(pathJoin(selectedFolder, path), 'UTF8');
        },
        presentSlide(content) {
            console.log();
            console.log('>>>>>>>>>> SLIDE <<<<<<<<<<');
            console.log(content);
            console.log('>>>>>>>>>>>>>o<<<<<<<<<<<<<');
            console.log();
        },
    };
}


console.log('loading lesson...');
lesson( createAgent() );


