type fildOfPractis1 = "social-work" | "masseur" | "fitness-instructor";
type zone1 = "north" | "center" | "south";


type claint = {
    name: string;
    // male: true;
    // fmale: true;
    email: string;
    age: number;
    fildOfPractis1: fildOfPractis1;
    zone1: zone1;
    

};

type claintArray = claint[];

const claints: claintArray = [];

const addClaintForm = document.querySelector("form[name='new-client']") as HTMLFormElement | null;
if (!addClaintForm) {
    console.error("Couldn't find add trainee form.");
} 
else {
    addClaintForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(e.target as HTMLFormElement);

        claints.push({
            name: getRequiredString(formData, "name"),
            // male: getString(formData, "male"),
            // male: getString(formData, "Female"),
            email: getRequiredString(formData, "email"),
            age: Number(getRequiredNumber(formData, "age")),
            fildOfPractis1: parsesFildOfPractis(getRequiredString(formData, "filed-of-practis")),
            zone1: parseZone(getRequiredString(formData, "practic-zone")),
        });

        console.log(claints);
        
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

function parsesFildOfPractis(value: string): fildOfPractis1 {
    if (value !== "social-work" && value !== "masseur" && value !== "fitness-instructor") {
        throw new Error(`Invalid fild of pracis: ${value}`);
    }

    return value;
}
function parseZone(value: string): zone1 {
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
