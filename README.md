# sw-dev-final# วิธีการ run ผ่าน local
## frontend
  1. ทำการ clone
  2. ทำการ cd ไปที่ ./frontend
  3. ทำการพิมพ์คำสั่ง npm install
  4. ทำการพิมพ์คำสั่ง npm run dev เพื่อรัน
## backend
  1. ทำการ clone
  2. ทำการ cd ไปที่ ./backend
  3. ทำการพิมพ์คำสั่ง npm install
  4. ทำการพิมพ์คำสั่ง npm run build
  5. ทำการพิมพ์คำสั่ง npm run start
# วิธี build & deploy docker
## Frontend
  1. ทำการ clone github ลงเครื่องโดยใช้ github desktop
  2. ทำการพิมพ์ docker-compose -f docker-compose-build.yml build frontend
  3. ทำการพิมพ์ docker-compose -f docker-compose-deploy.yml up frontend -d
## Backend
  1. ทำการ clone github ลงเครื่องโดยใช้ github desktop
  2. ทำการพิมพ์ docker-compose -f docker-compose-build.yml build backend
  3. ทำการพิมพ์ docker-compose -f docker-compose-deploy.yml up backend -d
