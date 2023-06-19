---
title: Frequently Asked Questions
lang: en-US
---

# Frequently Asked Questions

## License
### Is Kangaroo free?
February 1st, 2022, Kangaroo upgrade its __End User License Agreemen__ (a.k.a “EULA”, “License Agreement”), based on this license agreement, the versions marked with <Badge text="Dev" /> <Badge text="Beta"/> are free for private or commercial use, __others shoud be paid__. See the [product license](../license/service-agreement.md) for details.

### Is Kangaroo open source?
We will put it as a priority task if the project gain donation and support enough to make it be sustainable development.

## Version
### How do I find the version?
You can find the Kangaroo version information in the About dialog box.

On right of Kangaroo title bar, click the main menu button, then go to Help > About.

The Kangaroo version is the first Version number listed and has the version format 'major.minor.release.build', for example '0.8.5.191108'

## When to release stable version?
Kangaroo is working hard to make it be done, the stable version depends two point:
1. Dependencies（GLib/GTK4）'s maturity and stability；
2. Kangaroo's features' maturity and stability；

Based on all the information, the first stable version to be released at the fourth anniversary of the Kangaroo (2023.4.1).

## Language
### What languages does Kangaroo support?
English, Chinese will be support default, other languages depend on user contributation.

### How to switch for other languages?
Setting the environment variables first, then start the application. please refer to the platform documentation for the environment variables.
【Tip】The complete list of localized variables is as follows
```
LANG=zh_CN.UTF-8
LC_CTYPE=zh_CN.UTF-8
LC_NUMERIC=zh_CN.UTF-8
LC_TIME=zh_CN.UTF-8
LC_COLLATE=zh_CN.UTF-8
LC_MONETARY=zh_CN.UTF-8
LC_MESSAGES=zh_CN.UTF-8
LC_ALL=zh_CN.UTF-8

LC_PAPER=zh_CN.UTF-8
LC_MEASUREMENT=zh_CN.UTF-8
```

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
[Gitee](https://gitee.com/dbkangaroo/kangaroo)
[Official (here)](https://www.datatable.online/)

### Technical Support
You could submit your issues and requirements on the repository [Github](https://github.com/dbkangaroo/kangaroo) / 
[Gitee](https://gitee.com/dbkangaroo/kangaroo), or share your solutions about the trouble you've met.

<Vssue :issue-id="3" :title="$title" />
