git checkout . || true
git pull origin main || true

docker stop cors || true
docker rm cors || true
docker rmi -f  cors:dev || true
docker build -t cors:dev . || true
docker run -d -p 5000:80 -e TZ=America/Guatemala --name cors cors:dev || true
docker rmi $(docker images -f "dangling=true" -q) || true