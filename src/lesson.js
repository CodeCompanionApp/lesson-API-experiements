
export default function lesson(API) {
    API.watcher.on('all', function happen(ev, path) {
        console.log('file event', ev, path);
    });
    API.watcher.on('ready', function () {
        console.log('READY!', arguments);
    });
    API.watcher.on('raw', function () {
        console.log('raw', arguments);
    });
};


