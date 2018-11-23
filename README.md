##How to generate a static website 怎么生成静态网站
+ 1  安装python3和git(略)
+ 2  git clone https://github.com/dongguangming/How-to-generate-a-static-website.git website

        cd website
        pip3 install -r requirements.txt
        python3 app.py runserver  -h 192.168.10.42 -p 9999 -d -r --thread
        -h指运行程序的机器ip，-p指使用9999端口，开启debug调试模式，自动重启，使用多线程
        然后通过浏览器访问[mysite](http://192.168.10.42:9999)


###参考文献
[Powerful static website generator with flask](https://nicolas.perriault.net/code/2012/dead-easy-yet-powerful-static-website-generator-with-flask/)

[Build a Simple, Static, Markdown-Powered Blog with Flask](http://www.jamesharding.ca/posts/simple-static-markdown-blog-in-flask/)

[How to make a Flask blog in one hour or less](http://charlesleifer.com/blog/how-to-make-a-flask-blog-in-one-hour-or-less/)

[Hosting Static Flask Sites on Github Pages](https://stevenloria.com/hosting-static-flask-sites-on-github-pages/)

