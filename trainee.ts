type fildOfPractis = "social-work" | "masseur" | "fitness-instructor";
type zone = "north" | "center" | "south";


type trainee = {
    name: string;
    numberOfMeetingS: number;
    email: string;
    numberOfTtrainees: number;
    fildOfPractis: fildOfPractis;
    zone: zone;
    totalPrice: string;

};

type traineeArray = trainee[];

const trainees: traineeArray = [];

const addtraineeForm = document.querySelector("form[name='nwe-trainee']") as HTMLFormElement | null;
if (!addtraineeForm) {
    console.error("Couldn't find add trainee form.");
} 
else {
    addtraineeForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        trainees.push({
            name: getRequiredString(formData, "name"),
            numberOfMeetingS: Number(getRequiredNumber(formData, "nunber-of-meetings")),
            email: getRequiredString(formData, "email"),
            numberOfTtrainees: Number(getRequiredNumber(formData, "number-of-traines")),
            fildOfPractis: parsesFildOfPractis(getRequiredString(formData, "filed-of-prctis")),
            zone: parseZone(getRequiredString(formData, "practic-zone")),
            totalPrice: getRequiredString(formData, "total-price"),
        });

        console.log(trainees);
        localStorage.setItem("shai","test");
        
    });
}

function getString(formData: FormData, key: string) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }

    if (!value) {
        return undefined;
    }

    return value;
}
function getRequiredString(formData: FormData, key: string) {
    const value = getString(formData, key);

    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;
}

function parsesFildOfPractis(value: string): fildOfPractis {
    if (value !== "social-work" && value !== "masseur" && value !== "fitness-instructor") {
        throw new Error(`Invalid fild of pracis: ${value}`);
    }

    return value;
}
function parseZone(value: string): zone {
    if (value !== "north" && value !== "center" && value !== "south" ) {
        throw new Error(`Invalid status type: ${value}`);
    }
    return value;
}

function getNumber(formData: FormData, key: number) {
    const value = formData.get(key);

    if (value == null) {
        throw new Error(`Field ${key} doesn't exist!`);
    }

    if (typeof value !== "string") {
        throw new Error(`Value of field ${key} is not a string!`);
    }

    if (!value) {
        return undefined;
    }

    return value;
}
function getRequiredNumber(formData: FormData, key: number) {
    const value = getNumber(formData, key);

    if (!value) {
        throw new Error(`Value for ${key} is required!`);
    }

    return value;
}
