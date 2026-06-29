# 可选镜像源FROM docker.m.daocloud.io/library/nginx:alpine
FROM python:3.10-slim

# 设置工作目录
WORKDIR /app

# 设置环境变量，防止 python 产生 pyc 错误文件，并确保日志实时输出
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# 复制依赖清单并安装（这里使用了清华源，方便在阿里云上快速下载）
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 复制后端所有代码到容器中
COPY . .

# 暴露后端运行的端口（假设你代码里监听的是 8000 端口）
EXPOSE 8000

# 启动命令：请根据你的实际框架取消对应的注释，并修改对应的文件名
# 【如果是 FastAPI / Uvicorn】
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]

# 【如果是 Flask】
# CMD ["python", "app.py"]

# 【如果是 Django】
# CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]