
const slides = {
    welcome: '(1/3) Welcome to my lesson!\nBegin by creating a file called one.txt.',
    filecreated: '(2/3) Good! Now type in the file "hello world!" and save it.',
    content: '(3/3) Well done! This lesson is now complete.',
};

export default function lesson(API) {
    API.watcher.on('all', function happen(ev, path) {
        //console.log('file event', ev, path);
        if( path === 'one.txt' ) {
            if( ev === 'unlink' ) {
                API.presentSlide(slides.welcome);
            }
            else {
                const contains = API.fileContents(path).indexOf('hello world!') !== -1;
                if( contains ) {
                    API.presentSlide(slides.content);
                }
                else {
                    API.presentSlide(slides.filecreated);
                }
            }
        }
    });
    API.presentSlide('Hi! This is the "Hello World!" demo of Code Companion!');
    API.presentSlide(slides.welcome);
};


