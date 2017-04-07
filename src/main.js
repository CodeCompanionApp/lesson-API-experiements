
import chokidar from 'chokidar';

import lesson from './lesson.js';

function createAgent() {
    const fileWatcher = chokidar.watch('files');

    return {
        watcher: {
            on(evt, cb) {
                fileWatcher.on(evt, cb);
            },
        },
    };
}


lesson( createAgent() );


