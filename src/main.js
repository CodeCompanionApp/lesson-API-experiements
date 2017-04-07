
import chokidar from 'chokidar';
import { readFileSync } from 'fs';

import lesson from './lesson.js';

const selectedFolder = 'files'

function createAgent() {
    const fileWatcher = chokidar.watch(selectedFolder);

    function pathFilter(path) {
        if( typeof path !== 'string' ) {
            return path;
        }
        return path.replace(/^files\//g, '');
    }

    return {
        watcher: {
            on(evt, cb) {
                fileWatcher.on(evt, function filterOutPathAndCall(...args) {
                    const newArgs = args.map(pathFilter);
                    cb(...newArgs);
                });
            },
        },
        fileContents(path) {
            return readFileSync(`${selectedFolder}/${path}`, 'UTF8');
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


