
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(request);
        if (request.from === "popup") {
            fillOUtData();
            sendResponse({ "message": "Data fill completed" })
        }
    }
);

//select option
function setDynamicData(fieldNameKey, fieldValue) {
    let val
    const fieldOptions = document.getElementById(`${fieldNameKey}`).options;
    [...fieldOptions]?.forEach((option) => {
        if (option.innerText === fieldValue.trim()) {
            val = option.value;
        }
    })
    return val
}

//fill the user data
function fillOUtData() {
    //console.log(setDynamicData('present_upazila', data.present_upazila));
    document.getElementById('name').value = data.name;
    document.getElementById('name_bn').value = data.name_bn;
    document.getElementById('father').value = data.father;
    document.getElementById('father_bn').value = data.father_bn;
    document.getElementById('mother').value = data.mother;
    document.getElementById('mother_bn').value = data.mother_bn;
    document.getElementById('dob').value = data.dob;
    document.getElementById('religion').value = data.religion;
    document.getElementById('gender').value = data.gender;
    if (data.nid === 1) {
        document.getElementById('nid').value = data.nid;
        document.getElementById('nid_no').value = data.nid_no;
    }
    if (data.breg === 1) {
        document.getElementById('breg').value = data.breg;
        document.getElementById('breg_no').value = data.breg_no;
    }

    document.getElementById('passport').value = data.passport;
    document.getElementById('marital_status').value = data.marital_status;
    document.getElementById('mobile').value = data.mobile;
    document.getElementById('confirm_mobile').value = data.confirm_mobile;
    document.getElementById('email').value = data.email;
    document.getElementById('quota').value = data.quota;
    document.getElementById('dep_status').value = data.dep_status;
    document.getElementById('present_careof').value = data.present_careof;
    document.getElementById('present_village').value = data.present_village;
    document.getElementById('present_district').value = setDynamicData('present_district', data.present_district)

    const env = new Event('change')
    document.getElementById('present_district').dispatchEvent(env);
    document.getElementById('present_upazila').value = setDynamicData('present_upazila', data.present_upazila)


    document.getElementById('present_post').value = data.present_post;
    document.getElementById('present_postcode').value = data.present_postcode;
    if (data.same_as_present !== 1) {
        document.getElementById('permanent_careof').value = data.permanent_careof;
        document.getElementById('permanent_village').value = data.permanent_village;
        document.getElementById('permanent_upazila').value = data.permanent_upazila;
        document.getElementById('permanent_post').value = data.permanent_post;
        document.getElementById('permanent_postcode').value = data.permanent_postcode;
    } else {
        document.getElementById('same_as_present').click();
    }

    document.getElementById('ssc_exam').value = data.ssc_exam;
    document.getElementById('ssc_exam').dispatchEvent(env);
    document.getElementById('ssc_roll').value = data.ssc_roll;
    document.getElementById('ssc_group').value = setDynamicData('ssc_group', data.ssc_group);
    document.getElementById('ssc_board').value = setDynamicData('ssc_board', data.ssc_board);
    document.getElementById('ssc_result_type').value = setDynamicData('ssc_result_type', data.ssc_result_type);
    document.getElementById('ssc_result').value = data.ssc_result;
    document.getElementById('ssc_year').value = setDynamicData('ssc_year', data.ssc_year);
    document.getElementById('hsc_exam').value = data.hsc_exam;
    document.getElementById('hsc_exam').dispatchEvent(env);
    document.getElementById('hsc_roll').value = data.hsc_roll;
    document.getElementById('hsc_group').value = setDynamicData('hsc_group', data.hsc_group);
    document.getElementById('hsc_board').value = setDynamicData('hsc_board', data.hsc_board);
    document.getElementById('hsc_result_type').value = setDynamicData('hsc_result_type', data.hsc_result_type);
    document.getElementById('hsc_result').value = data.hsc_result;
    document.getElementById('hsc_year').value = setDynamicData('hsc_year', data.hsc_year);
    document.getElementById('gra_exam').value = setDynamicData('gra_exam', data.gra_exam);
    document.getElementById('gra_exam').dispatchEvent(env);
    document.getElementById('gra_institute').value = setDynamicData('gra_institute', data.gra_institute);
    document.getElementById('gra_year').value = setDynamicData('gra_year', data.gra_year);
    document.getElementById('gra_subject').value = setDynamicData('gra_subject', data.gra_subject);
    document.getElementById('gra_result_type').value = setDynamicData('gra_result_type', data.gra_result_type);
    document.getElementById('gra_result').value = data.gra_result;
    document.getElementById('gra_duration').value = setDynamicData('gra_duration', data.gra_duration);
    if (data.if_applicable_mas === 1) {
        document.getElementById('if_applicable_mas').value = data.if_applicable_mas;
        document.getElementById('mas_exam').value = data.mas_exam;
        document.getElementById('mas_institute').value = data.mas_institute;
        document.getElementById('mas_year').value = data.mas_year;
        document.getElementById('mas_subject').value = data.mas_subject;
        document.getElementById('mas_result_type').value = data.mas_result_type;
        document.getElementById('mas_duration').value = data.mas_duration;
    }
}


