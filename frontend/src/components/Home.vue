<template>
    <div>
        <h1 style="text-align: center">ค้นหาหลักสูตรปริญญาโท</h1>
        <div class="container">
            <div class="row">
                <div class="col-6 offset-3 align-self-center">
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">ค้นหา 'คณะ'</label>
                        <select id="disabledSelect" class="form-select" v-model="faculty">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">ค้นหา 'รอบรับสมัคร'</label>
                        <select id="disabledSelect" class="form-select" v-model="roundOfAdmid">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">ค้นหา 'โครงการ'</label>
                        <select id="disabledSelect" class="form-select" v-model="project">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="disabledSelect" class="form-label">ค้นหาหลักสูตร ไทย / นานาชาติ</label>
                        <select id="disabledSelect" class="form-select" v-model="course">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">คำค้นหาเพิ่มเติม (Enter เพื่อแยกคำ) [ระบบจะค้นจากชื่อคณะ,หลักสูตร]</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="searchWord">
                    </div>
                </div>
            </div>
            <div class="row" style="margin-top: 60px">
                <h1 style="text-align: center">ผลการค้นหา : </h1>
                <div class="col-12"  v-for="(data) in course" :key="data.id">
                    <div class="card">
                        <div class="card-header">
                            <h5>หลักสูตร : {{data.course}}</h5>
                            <h6>แผนการศึกษา : {{data.plan}} | ช่วงเวลาเรียน : {{data.timestudy}} | เฉพาะ : </h6>
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{data.year}} {{data.round}} {{data.project}}</p>
                            <h5 class="card-title">คณะ : {{data.faculty}}</h5>
                            <p class="card-text">หลักสูตร : {{data.faculty2}}</p>
                            <h6 class="card-title">วันที่เปิดรับสมัคร : {{data.date}}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
    export default{
        data(){
            return{
                course: null,
                faculty: "",
                roundOfAdmid: "",
                project: "",
                course: "",
                searchWord: "",
                all_course: "",
                mate_id: "",
                mate_fullname: "",
                all_Classmate: []
            }
        },
        methods: {},
        computed: {
            searchResult(){
                let result = this.all_course.map(x =>  x)
                return result
            }
        },
        created() {
            axios.get("http://localhost:3001/")
            .then((res) => {
                this.course = res.data
                console.log(res.data)
            })
        },
    }
</script>