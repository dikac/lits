import Uri from "../../../src/uri/uri";
import StdUri from "../../../src/uri/standard";
import StdAuthority from "../../../src/uri/authority/standard";
import StdUserInfo from "../../../src/uri/user-info/standard";
import StdPath from "../../../src/uri/path/standard";

const TestDatum : Map<string, Uri>= new Map<string, Uri>();
export default TestDatum;

TestDatum.set('scheme://user:password@host:port/path/sub/file?query#fragment',
    new StdUri(
        'scheme',
        new StdAuthority(
            new StdUserInfo(
                'user',
                'password'
            ),
            'host',
            'port'
        ),
        new StdPath('/path/sub/file', '/'),
        'query',
        'fragment'
    )
);

TestDatum.set('C:\\Program Files\\Microsoft Office',
    new StdUri(
        'C',
        new StdAuthority(
            new StdUserInfo(
                '',
                ''
            ),
            '',
            ''
        ),
        new StdPath('\\Program Files\\Microsoft Office', '\\'),
        '',
        ''
    )
);

TestDatum.set(':path:sub:file.ext',
    new StdUri(
        '',
        new StdAuthority(
            new StdUserInfo(
                '',
                ''
            ),
            '',
            ''
        ),
        new StdPath(':path:sub:file.ext', ':'),
        '',
        ''
    )
);


TestDatum.set('path:sub:file.ext',
    new StdUri(
        'path',
        new StdAuthority(
            new StdUserInfo(
                '',
                ''
            ),
            '',
            ''
        ),
        new StdPath('sub:file.ext', ':'),
        '',
        ''
    )
);

TestDatum.set('telnet://192.0.2.16:80/',
    new StdUri(
        'telnet',
        new StdAuthority(
            new StdUserInfo(
                '',
                ''
            ),
            '192.0.2.16',
            '80'
        ),
        new StdPath('/', '/'),
        '',
        ''
    )
);


TestDatum.set('tel:+1-816-555-1212',
    new StdUri(
        'tel',
        new StdAuthority(
            new StdUserInfo(
                '',
                ''
            ),
            '',
            ''
        ),
        new StdPath('+1-816-555-1212', ''),
        '',
        ''
    )
);
