shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS
$ git init
Initialized empty Git repository in C:/Users/shilpi.bhargava/Downloads/JS/.git/

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git add .
warning: in the working copy of 'Control_flow/one.js', LF will be replaced by CRLF the next time Git touches it
......
shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git config --global core.autocrlf true

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git add .

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git remote add origin https://github.com/Shilpi-Bhargava/JavaScript-All-HC.git

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git add .

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git commit -m "Initial commit"
[master (root-commit) af0d231] Initial commit
 Committer: Shilpi Bhargava <shilpi.bhargava@taazaa.com>
Your name and email address were configured automatically based
on your username and hostname. Please check that they are accurate.
You can suppress this message by setting them explicitly:

    git config --global user.name "Your Name"
    git config --global user.email you@example.com

After doing this, you may fix the identity used for this commit with:

    git commit --amend --reset-author

 12 files changed, 388 insertions(+)
 create mode 100644 Control_flow/one.js
 create mode 100644 Control_flow/switch.js
 create mode 100644 Control_flow/truthy.js
 create mode 100644 Iteration/Git-2.48.1-64-bit.exe
 create mode 100644 Iteration/five.js
 create mode 100644 Iteration/four.js
 create mode 100644 Iteration/nine.js
 create mode 100644 Iteration/one.js
 create mode 100644 Iteration/seven.js
 create mode 100644 Iteration/six.js
 create mode 100644 Iteration/three.js
 create mode 100644 Iteration/two.js

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git push -u origin master
info: please complete authentication in your browser...
To https://github.com/Shilpi-Bhargava/JavaScript-All-HC.git
 ! [rejected]        master -> master (fetch first)
error: failed to push some refs to 'https://github.com/Shilpi-Bhargava/JavaScript-All-HC.git'
hint: Updates were rejected because the remote contains work that you do not
hint: have locally. This is usually caused by another repository pushing to
hint: the same ref. If you want to integrate the remote changes, use
hint: 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git fetch origin
remote: Enumerating objects: 27, done.
remote: Counting objects: 100% (27/27), done.
remote: Compressing objects: 100% (23/23), done.
remote: Total 27 (delta 1), reused 27 (delta 1), pack-reused 0 (from 0)
Unpacking objects: 100% (27/27), 6.54 KiB | 55.00 KiB/s, done.
From https://github.com/Shilpi-Bhargava/JavaScript-All-HC
 * [new branch]      master     -> origin/master
 * [new branch]      new        -> origin/new

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git merge origin/master
fatal: refusing to merge unrelated histories

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git merge origin/master --allow-unrelated-histories


Merge made by the 'ort' strategy.
 01_Variable.js         | 12 ++++++++
 02_Datatype.js         | 16 +++++++++++
 03_Convertion.js       | 45 +++++++++++++++++++++++++++++
 Array.js               | 35 +++++++++++++++++++++++
 Array2.js              | 18 ++++++++++++
 Comparison.js          | 19 +++++++++++++
 Datatypes Summary.js   | 11 ++++++++
 DateAndTime.js         |  8 ++++++
 Event.js               |  0
 NumsAndMath.js         | 13 +++++++++
 Object.js              | 22 +++++++++++++++
 StackAndHeap.js        | 20 +++++++++++++
 String.js              | 32 +++++++++++++++++++++
 StringMethods.js       |  4 +++
 Test.js                |  1 +
 dom.html               | 15 ++++++++++
 function.js            | 54 +++++++++++++++++++++++++++++++++++
 objectDestructuring.js | 20 +++++++++++++
 one.html               | 77 ++++++++++++++++++++++++++++++++++++++++++++++++++
 two.html               | 16 +++++++++++
 20 files changed, 438 insertions(+)
 create mode 100644 01_Variable.js
 create mode 100644 02_Datatype.js
 create mode 100644 03_Convertion.js
 create mode 100644 Array.js
 create mode 100644 Array2.js
 create mode 100644 Comparison.js
 create mode 100644 Datatypes Summary.js
 create mode 100644 DateAndTime.js
 create mode 100644 Event.js
 create mode 100644 NumsAndMath.js
 create mode 100644 Object.js
 create mode 100644 StackAndHeap.js
 create mode 100644 String.js
 create mode 100644 StringMethods.js
 create mode 100644 Test.js
 create mode 100644 dom.html
 create mode 100644 function.js
 create mode 100644 objectDestructuring.js
 create mode 100644 one.html
 create mode 100644 two.html

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$    
Display all 5185 possibilities? (y or n)

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git status
On branch master
nothing to commit, working tree clean

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$ git push origin master

Enumerating objects: 19, done.
Counting objects: 100% (19/19), done.
Delta compression using up to 8 threads
Compressing objects: 100% (18/18), done.
Writing objects: 100% (18/18), 65.87 MiB | 2.57 MiB/s, done.
Total 18 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: warning: See https://gh.io/lfs for more information.
remote: warning: File Iteration/Git-2.48.1-64-bit.exe is 66.32 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB      
remote: warning: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
To https://github.com/Shilpi-Bhargava/JavaScript-All-HC.git
   544200d..5de2246  master -> master

shilpi.bhargava@TZIN-L-326 MINGW64 ~/Downloads/JS (master)
$
