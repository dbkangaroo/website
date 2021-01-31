---
title: Frequently Asked Questions
lang: en-US
---

# Frequently Asked Questions

## License
### Is Kangaroo free?
Yes, Kangaroo is free for private or commercial use. See the [product license](license.md) for details.

### Is Kangaroo open source?
Not yet now, open source is an option on the desktop.

## Version
### How do I find the version?
You can find the Kangaroo version information in the About dialog box.

On right of Kangaroo title bar, click the main menu button, then go to Help > About.

The Kangaroo version is the first Version number listed and has the version format 'major.minor.release.build', for example '0.8.5.191108'

## Language
### What languages does Kangaroo support?
English, Chinese will be support default, other languages depend on user contributation.

## Verify package
### How to verify the downloaded package?
Follow the steps:
1. Download SHA256SUM and SHA256SUM.asc
2. Get the key used for the signature<br/>
    __apply for 1.6.1 and new versions__<br/>
    The key ID is: 8C0C55F7DEC8FC52 (generated in 2021, current)<br/>
    The public key is: E4F02524471B195CCEFBD7158C0C55F7DEC8FC52 <br/>

    __apply for old versions before 1.6.1__<br/>
    The key ID is: 702F717E0A17659D (generated in 2020, archived)<br/>
    The public key is: 33E5119C5781C1B37E56E580702F717E0A17659D <br/>
    `gpg --keyserver hkp://hkps.pool.sks-keyservers.net --receive-keys 8C0C55F7DEC8FC52`

3. Verify the signature<br/>
`gpg --verify kangaroo-1.6.1.210131.sha256sum.asc`

4. Check the package with sha256sum<br/>
run the following command from within the download directory to get SHA256 hash:<br/>
`sha256sum kangaroo-1.6.1.<else>` <br/>
then search the hash in the SHA256SUM file:<br/>
`grep <sha256sum output> kangaroo-1.6.1.sha256sum`


## Support
### How track the changes?
you can put your eyes on follow ways:
[Twitter](https://twitter.com/Kangaroo)
[Github](https://github.com/dbkangaroo/kangaroo)
[Official (here)](https://dbkangaroo.github.io/)

### Technical Support
You can ask questions and search for answers on Stack Overflow and enter issues and feature requests directly in our GitHub repository.

If you'd like to contact author, you can join the QQ group: [袋鼠宝宝交流群 - 706676886](//shang.qq.com/wpa/qunwpa?idkey=90d913b2da6cd408f4f2fbec5c9167c5f1aea36eafbd3cf01ca9fd715e123f88), he will be there every week.

<Vssue :issue-id="3" :title="$title" />
