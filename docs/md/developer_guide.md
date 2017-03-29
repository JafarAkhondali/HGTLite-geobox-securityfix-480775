# Developer Guide

#### 上传参数
- 关于上传人：user_id, upload_date
- 关于文件：name, size, type, lastModifiedDate,   suffix
- 关于用户指定信息：file_dir, fileTags

#### 部署与启动
- 部署前要生成最新前端资源，进入 `/path/to/geobox/box/assets`，执行`npm run build:prod`
- 进入 `/path/to/geobox`执行`gunicorn -c deploy.py run:geobox`启动服务器，通过`http://localhost:8889`访问首页
- 关闭服务器执行`pkill gunicorn`
