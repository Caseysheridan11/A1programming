const hospital = {
    name: "LIFE SAVERSS!!",
    patients: [
        {
            id: 1,
            fullName: "Him Himothy",
            dateOfBirth: "12-11-2000",
            symptoms: ["Cold", "Fever", "Malaria"]
        },
        {
            id: 2,
            fullName: "She Sheila",
            dateOfBirth: "1-1-2000",
            symptoms: ["headache", "Fever", "Sore Throat"]
        },
        {
            id: 3,
            fullName: "Me Mee",
            dateOfBirth: "12-11-2000",
            symptoms: ["Ulcer", "Fever", "Food Poisoning"]
        }
    ]
};


//console.log(hospital.patients[2].fullName)


function showPatients(hospital) {
    let result = "<h1>" + hospital.name + "</h1>\n\n";
    
    for (let i = 0; i < hospital.patients.length; i++) {
        result += "<h2>" + hospital.patients[i].fullName + ", " + hospital.patients[i].dateOfBirth + "</h2>\n";
        result += "<ul>\n";

        for (let j = 0; j < hospital.patients[i].symptoms.length; j++) {
            result += "<li>" + hospital.patients[i].symptoms[j] + "</li>\n";
        }

        result += "</ul>\n\n";
    }

    return result;
}

let patientInfo = showPatients(hospital);
console.log(patientInfo);



function getPatient(patientArray) {
    randomIndex = Math.floor(Math.random() * patientArray.length);
    return patientArray[randomIndex].id;
}

randomPatientId = getPatient(hospital.patients);
console.log("Random Patient ID:", randomPatientId);

