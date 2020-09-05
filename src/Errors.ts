export const enum ERROR_CODE {
    UNHANDLED_ERROR,
    ELEVATED_SHELL,
    CANCELLED_USER_INPUT,
    MISSING_FFMPEG,
    UNK_FFMPEG_ERROR,
    INVALID_VIDEO_GUID,
    NO_SESSION_INFO,
    NO_ENCRYPTION,
    ARIA2C_CRASH,
    NO_CONNECT_ARIA2C
}


export const errors: {[key: number]: string} = {
    [ERROR_CODE.UNHANDLED_ERROR]:       'Unhandled error!\n' +
                                        'Timeout or fatal error, please check your downloads directory and try again',

    [ERROR_CODE.ELEVATED_SHELL]:        'Destreamer cannot run in an elevated (Administrator/root) shell.\n' +
                                        'Please run in a regular, non-elevated window.',

    [ERROR_CODE.CANCELLED_USER_INPUT]:  'Input was cancelled by user',

    [ERROR_CODE.MISSING_FFMPEG]:        'FFmpeg is missing!\n' +
                                        'Destreamer requires a fairly recent release of FFmpeg to download videos',

    [ERROR_CODE.UNK_FFMPEG_ERROR]:      'Unknown FFmpeg error',

    [ERROR_CODE.INVALID_VIDEO_GUID]:    'Unable to get video GUID from URL',

    [ERROR_CODE.NO_SESSION_INFO]:       'Could not evaluate sessionInfo on the page',

    [ERROR_CODE.NO_ENCRYPTION]:         'Could not extract the encryption info from the playlist',

    [ERROR_CODE.ARIA2C_CRASH]:          'The aria2c rpc server crashed with the previous message',

    [ERROR_CODE.NO_CONNECT_ARIA2C]:     'Could not connect to Aria2c json-rpc webSocket'
};


export const enum CLI_ERROR {
    MISSING_INPUT_ARG           = 'You must specify a URLs source. \n' +
                                'Valid options are -i for one or more URLs separated by space or -f for input file. \n',

    INPUT_ARG_CONFLICT          = 'Too many URLs sources specified! \n' +
                                'Please specify a single source, either -i or -f \n',

    INPUTFILE_WRONG_EXTENSION   = 'The specified inputFile has the wrong extension \n' +
                                'Please make sure to use path/to/filename.txt when useing the -f option \n',

    INPUTFILE_NOT_FOUND         = 'The specified inputFile does not exists \n'+
                                'Please check the filename and the path you provided \n',

    INVALID_OUTDIR              = 'Could not create the default/specified output directory \n' +
                                'Please check directory and permissions and try again. \n'
}
